import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "semantic-ui-css/semantic.min.css"
import './styles/index.css';
import Map from './components/Map'


ReactDOM.render(
  <React.Fragment>
   <Map title="Depto Nueva Cba"/>
  </React.Fragment>,
  document.getElementById('root')
);
