import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          React TEST
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
      <main>
        <h1>Teste de main</h1>
        <p>Selecione data</p>
        <input type="date" name="dataHoje" id="data" />
        <p>Selecione hora</p>
        <input type="datetime-local" name="timeLocal" id="" />
        <p>Selecione usuario</p>
        <input type="text" name="usuario" id="user" />
        <p>Insira a senha</p>
        <input type="password" name="senha" id="senha" />
        <button type="submit">Enviar</button>
      </main>
    </div>
  );
}

export default App;
