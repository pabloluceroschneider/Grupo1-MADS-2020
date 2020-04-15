import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'semantic-ui-react'
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
      <h2>Button</h2>
      <button className="ui button">Click Here</button>

    </div>
  );
}

export default App;
