export function handleSearch(city, setWeather, setForecast, setLoading) {
  setLoading(true);
  fetch(
    `/api/weather?type=weather&city=${encodeURIComponent(city)}`,
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === 200) {
        localStorage.setItem("city", city);
        setWeather(data);
      } else {
        setWeather(null);
      }
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));

  fetch(
    `/api/weather?type=forecast&city=${encodeURIComponent(city)}`,
  )
    .then((res) => res.json())
    .then((data) => setForecast(data))
    .catch((err) => console.log(err));
}
