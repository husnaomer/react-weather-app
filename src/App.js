import "./App.css";
import Weather from "./weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kabul" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            Husna Omer
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/husnaomer/react-weather-app/tree/master"
            target="_blank"
            rel="noopener noreferrer"
          >
            open source on GitHub
          </a>{" "}
          and
          <a
            href="https://merry-zuccutto-5b3e6a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
