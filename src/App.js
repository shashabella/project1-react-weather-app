import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="container">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was created by Ayesha Issah and is
        <a
          href="https://github.com/shashabella/project1-react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
