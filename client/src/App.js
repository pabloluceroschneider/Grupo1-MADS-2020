import React, { Component } from 'react';
import { Home } from './pages/Home';
import {ListOwnership} from './components/ListOwnership'
class App extends Component {
  state = { page: 'Home' }

  _handlerPage = (e) => {
    this.setState({page: e})
  }

  render() {
    const Pages = this.state.page === 'Home' ? <Home handlerPage={this._handlerPage}></Home> : <ListOwnership />

    return (
      <div className="App">
          {Pages}
      </div>
    );
  }
}


 

export default App;
