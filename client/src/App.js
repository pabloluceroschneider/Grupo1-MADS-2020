import React, {Component} from 'react';
import './App.css';
import { ListOwnership } from './components/ListOwnership'

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
