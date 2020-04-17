import React, {useState, useEffect} from 'react';
import './App.css';
import Filter from './Components/Filter'
//Pagina inicio...

function App() {
  const [ publicaciones, setPublicaciones ] = useState(null);

  useEffect( () => {
    let getdata = () => { fetch('/publicaciones').then( res => {
      res.json().then(data => {
        console.log(data);
        return data;
      })
    })}
  setPublicaciones(getdata())
  },[]);

  return (
    <div className="App">
        <Filter />
    </div>
  );
}

export default App;
