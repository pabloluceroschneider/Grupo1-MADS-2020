import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "semantic-ui-css/semantic.min.css"
import './styles/index.css';
import Mapa from './components/ModalMap'


ReactDOM.render(
  <React.Fragment>
   <Mapa title="Depto Nueva Cba" lat={-31.442549049065228} lon={-64.19269119761391}/>
  </React.Fragment>,
  document.getElementById('root')
);
