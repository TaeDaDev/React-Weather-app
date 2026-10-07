# 🌤️ WeatherNow

A clean, responsive weather application built with React.js that delivers real-time weather data and 5-day forecasts — powered by the OpenWeather API.

---

## 📸 Preview

<img width="3034" height="2032" alt="image" src="https://github.com/user-attachments/assets/9818224a-1886-43e0-9af2-ce4d765f4985" />


---

## 🚀 Features

- 🔍 **City Search** — Search any city worldwide for instant weather data
- 🌡️ **Temperature Toggle** — Switch between Celsius and Fahrenheit on the fly
- 💧 **Detailed Weather Info** — Humidity, wind speed, weather description, and condition icons
- 📅 **5-Day Forecast** — Daily highs and lows at a glance
- 🌙 **Dark Mode** — Easy on the eyes, day or night
- 💾 **Persistent Search** — Last searched city saved via local storage
- ⚠️ **Error Handling** — Clear feedback for invalid city searches
- ⏳ **Loading Indicator** — Smooth UX while data is being fetched
- 📱 **Responsive Design** — Optimized for both mobile and desktop

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, JavaScript, CSS |
| API | [OpenWeather API](https://openweathermap.org/api) (free tier) |
| State Management | React Context API _(or Redux — optional)_ |
| Deployment | Vercel / Netlify |

---

## 📡 API Endpoints

**Current Weather**
```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}
```

**5-Day Forecast**
```
GET https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}
```

The browser never calls OpenWeather directly. It calls a small Vercel serverless proxy at `api/weather.js`, which adds the key on the server:

```
GET /api/weather?type=weather&city={city}
GET /api/weather?type=forecast&city={city}
```

### Setup

1. Get a free key from [OpenWeather](https://home.openweathermap.org/api_keys).
2. In Vercel → Project → Settings → Environment Variables, add `OPENWEATHER_API_KEY`.
3. To run locally with the API route, use `vercel dev` (plain `npm run dev` doesn't serve `/api`), with the key in a `.env.local` file (git-ignored).

---

