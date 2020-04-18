import React, {Component} from 'react';
import './App.css';
import { ListOwnership } from './Components/ListOwnership'
import {Button} from 'semantic-ui-react'
//Pagina inicio...

class App extends Component {
 // useEffect( ()=>{
 //   fetch('/publicaciones').then( res => {
 //     res.json().then(data => {
 //       console.log(data);
 //     })
 //   })
 // },[]);
 render(){
  return (
    <div className="App">
        <ListOwnership/>
    </div>
  );
}
}

 

export default App;
