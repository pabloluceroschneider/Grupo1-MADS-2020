import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import BarraMenu from './components/barra_menu';

//Pagina inicio...

function App() {
  useEffect( ()=>{
    fetch('/hello').then( res => {
      res.json().then(data => {
        console.log(data);
      })
    })
  },[]);

  return (
    <div className="App">
      <header className="App-header">
      <BarraMenu></BarraMenu>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div class="ui labeled button" tabindex="0">
  <div class="ui red button">
    <i class="heart icon"></i> Like
  </div>
  <a class="ui basic red left pointing label">
    1,048
  </a>
</div>
      </header>
      <button class="ui basic button">
        <i class="icon user"></i>
          Add Friend
      </button>
    </div>
  );
}

export default App;
