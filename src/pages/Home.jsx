import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Pages.css";
import Forecast from "./Forecast";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
  const fetchData = () => {
    fetch("https://localhost:7220/api/reports")
      .then(res => {
        if (!res.ok) throw new Error(`Reports fetch failed: ${res.status}`);
        return res.json();
      })
      .then(json => setData(json))
      .catch(err => console.error("Error fetching reports:", err));
  };

  fetchData(); // run once immediately

  const interval = setInterval(fetchData, 5000); // 🔁 every 5 seconds

  return () => clearInterval(interval); // cleanup when leaving page
}, []);

  const latest = data.length > 0 ? data[data.length - 1] : null;

  function getSuggestion(temp) {
    if (temp < 50) return "Wear a jacket";
    if (temp < 70) return "Wear a hoodie";
    return "T-shirt weather";
  }

  const [weather, setWeather] = useState(null);

  const API_KEY = "65399f17217b8cacce6367b9f8c456b6";
  const CITY = "Elizabethton";

  useEffect(() => {
    if (!API_KEY || API_KEY.includes("YOUR") || !CITY || CITY.includes("NAME")) {
      console.warn("OpenWeather API_KEY or CITY not set; skipping weather fetch.");
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=imperial&appid=${API_KEY}`
    )
      .then(res => {
        if (!res.ok) throw new Error(`Weather API error: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (data && data.cod && data.cod !== 200) throw new Error(data.message || 'Weather API returned an error');
        setWeather(data);
      })
      .catch(err => console.error("Weather fetch error:", err));
  }, []);


  return (
    <div className="dashboard">
      
      {/* Indoor Temp */}
      <div className="display small indoor">
        <h3>Latest Indoor Temp</h3>
        <p style={{ fontSize: "50px" }}>
          {latest && latest.Indoor
            ? `${Math.round(latest.Indoor.TemperatureF)}°F`
            : "Loading..."}
        </p>
      </div>

      {/* Outdoor Temp */}
      <div className="display small outdoor">
        <h3>Latest Outdoor Temp</h3>
        <p style={{ fontSize: "50px" }}>
          {weather?.main?.temp
            ? `${Math.round(weather.main.temp)}°F`
            : "Loading..."}
        </p>
      </div>

      {/* Forecast */}
      <div className="card large forecast" onClick={() => navigate("/forecast")}>
        <h2>Today's Forecast</h2>

        <p>
          {weather?.weather?.[0]?.description
            ? weather.weather[0].description
            : "Loading..."}
        </p>

        <p>
          {latest && latest.Outdoor
            ? getSuggestion(latest.Outdoor.TemperatureF)
            : ""}
        </p>
      </div>

      {/* Indoor History */}
      <div className="card large indoor-history" onClick={() => navigate("/indoor")}>
        <h2>Indoor History</h2>
      </div>

      {/* Outdoor History */}
      <div className="card large outdoor-history" onClick={() => navigate("/outdoor")}>
        <h2>Outdoor History</h2>
      </div>

      {/* About */}
      <div className="card large about" onClick={() => navigate("/about")}>
        <h2>About</h2>
      </div>

    </div>
  );
}

export default Home;