import React, {Component} from 'react';
import {Home } from './pages/Home';

import './App.css';

//Pagina inicio...

class App extends Component {
  state = { page: 'Home' }

  _handlerPage = (e) => {
    this.setState({page: e})
  }

  render() {
    const Pages = this.state.page === 'Home' ? <Home handlerPage={this._handlerPage}></Home> : null

    return (
      <div className="App">
          {Pages}
      </div>
    );
  }
}

export default App;
