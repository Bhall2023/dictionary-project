import logo from "./logo.svg";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Dictionary App</h1>
        <img src={logo} alt="logo" className="App-logo img-fluid" />
      </header>
      <main>
        <Dictionary defaultKeyword="sunrise" />
      </main>
      <footer className="App-footer">
        <small>This project was coded by <a href = "https://www.shecodes.io/graduates/162107-bonnie-hall" target="_blank" rel="noopener noreferrer">Bonnie Hall</a> and is open-sourced on {" "}
  <a href = "https://github.com/Bhall2023/dictionary-project" target="_blank" rel="noopener noreferrer">GitHub</a></small>
      </footer>
      </div>
    </div>
  );
}


