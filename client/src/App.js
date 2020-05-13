import React, { Component } from 'react';
import { Home } from './pages/Home';
//import {ListOwnership} from './components/ListOwnership'

document.title = "Co-alquilando"

class App extends Component {
  state = { page: 'Home' }

  // _handlerPage = (e) => {
  //   this.setState({page: e})
  // }

  render() {
    const Pages = this.state.page === 'Home' ? <Home></Home> : null

    return (
      <div className="App">
          {Pages}
      </div>
    );
  }
}


 

export default App;
