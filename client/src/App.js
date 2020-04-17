import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { ListOwnership } from './Components/ListOwnership'
import {Button} from 'semantic-ui-react'
//Pagina inicio...

function App() {
  useEffect( ()=>{
    fetch('/publicaciones').then( res => {
      res.json().then(data => {
        console.log(data);
      })
    })
  },[]);

  return (
    <div className="App">
        <ListOwnership/>
    </div>
  );
}

export default App;
