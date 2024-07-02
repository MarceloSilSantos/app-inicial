import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          Teste de REact
        </h1>
        <h2>Teste de rescue 2</h2>
        <h3>Teste de rescue 3</h3>
        <h4></h4>
        <li>
          <a href="http://www.uol.com.br">Site Uol</a>
          <a href="http://terra.com.br">Site terra</a> 
          <a href="http://google.com">Motor busca Google</a>
          </li>
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
