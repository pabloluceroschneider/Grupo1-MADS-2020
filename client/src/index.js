import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "semantic-ui-css/semantic.min.css"
import './styles/index.css';
import Loader from './util/Loader';



ReactDOM.render(
  <React.Fragment>
   <App/>
  </React.Fragment>,
  document.getElementById('root')
);
