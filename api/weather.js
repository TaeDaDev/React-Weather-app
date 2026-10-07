// Vercel serverless proxy — keeps the OpenWeather key on the server instead of in the client bundle.
const ENDPOINTS = { weather: 'weather', forecast: 'forecast' }

export default async function handler(req, res) {
  const { type, city } = req.query
  const endpoint = ENDPOINTS[type]

  if (!endpoint) return res.status(400).json({ message: 'type must be "weather" or "forecast"' })
  if (typeof city !== 'string' || !city.trim() || city.length > 100) {
    return res.status(400).json({ message: 'city is required' })
  }

  const key = process.env.OPENWEATHER_API_KEY
  if (!key) return res.status(500).json({ message: 'Server is missing OPENWEATHER_API_KEY' })

  const url = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${encodeURIComponent(city.trim())}&appid=${key}`
  try {
    const upstream = await fetch(url)
    const data = await upstream.json()
    // Short CDN cache — repeat searches for the same city don't burn API quota
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=300')
    return res.status(upstream.status).json(data)
  } catch {
    return res.status(502).json({ message: 'Weather service unavailable' })
  }
}
