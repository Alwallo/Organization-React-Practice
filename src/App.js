import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Holis soy Alvaro y estoy aprendiendo Git con Douglas
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
