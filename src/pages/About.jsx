import "./Pages.css";

function About() {
  return (
    <div className="page-content">
      <div className="title">
        <h1  style={{ fontSize: "45px" }}>About ENVIROMonitor 1000</h1>
        <p style={{ fontSize: "30px" }}>
          ENVIROMonitor 1000 is a personal environmental monitoring dashboard designed to provide real-time insights into indoor and outdoor conditions. It integrates data from various sensors and weather APIs to help users make informed decisions about their environment.
        </p>
      </div>

      <div className="about-us">
        <h2 style={{ fontSize: "40px" }}>About Us</h2>
        <p style={{ fontSize: "25px" }}>
          We are a team of environmental enthusiasts and developers passionate about creating tools that empower individuals to understand and improve their surroundings. 
        </p>
        <p style={{ fontSize: "25px" }}>
          Our mission is to provide accessible and actionable environmental data to help people live healthier and more sustainable lives.
        </p>

        <h2 style={{ fontSize: "40px" }}>Team</h2>
        <ul>
          <li style={{ fontSize: "25px" }}><strong>Punoi Vilaivanh:</strong> Frontend/Backend Developer</li>
          <li style={{ fontSize: "25px" }}><strong>Jacob Hammonds:</strong> Frontend/CSS Designer</li>
        </ul>
      </div>

      <div className="features">
        <h2 style={{ fontSize: "40px" }}>Features</h2>
        <ul>
          <li style={{ fontSize: "25px" }}><strong>Real-Time Data:</strong> Get up-to-date information on indoor temperature, humidity, and outdoor weather conditions.</li>
          <li style={{ fontSize: "25px" }}><strong>Historical Data:</strong> Access past environmental data to identify trends and patterns.</li>
          <li style={{ fontSize: "25px" }}><strong>Forecasting:</strong> Receive weather forecasts to plan your activities accordingly.</li>
        </ul>

      </div>

      <div className="technology-stack">
        <h2 style={{ fontSize: "40px" }}>Technology Stack</h2>
        <ul>
          <li style={{ fontSize: "25px" }}><strong>Frontend:</strong> React.js for building the user interface.</li>
          <li style={{ fontSize: "25px" }}><strong>Backend:</strong> Node.js and Express for handling API requests and data processing.</li>
          <li style={{ fontSize: "25px" }}><strong>APIs:</strong> OpenWeatherMap API for fetching outdoor weather data.</li>
        </ul>
      </div>

      <div className="contact">
        <h2 style={{ fontSize: "40px" }}>Contact</h2>
        <p style={{ fontSize: "25px" }}>
          For feedback, suggestions, or inquiries, please contact us at <a href="mailto:pvilaivanh@gmail.com">pvilaivanh@gmail.com</a>.
        </p>
      </div>

      <div className="disclaimer">
        <h2 style={{ fontSize: "40px" }}>Disclaimer</h2>
        <p style={{ fontSize: "25px" }}>
          ENVIROMonitor 1000 is intended for informational purposes only. The data provided is based on sensor readings and third-party APIs, which may not always be accurate. Always use your judgment and consult professionals when necessary.
        </p>
      </div>

    </div>
  );
}

export default About;