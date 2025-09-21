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
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by Bonnie Hall</small>
      </footer>
      </div>
    </div>
  );
}


