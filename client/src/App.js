import React, { Component } from 'react';
import { Home } from './pages/Home';
import { PublicarPropiedad } from './pages/PublicarPropiedad';
//import {ListOwnership} from './components/ListOwnership'

document.title = "Co-alquilando"

class App extends Component {
  state = { page: 'ListaPropiedades' }

  handlerPage = (e) => {
    this.setState({page: e})
  }

  render() {
    const Pages = this.state.page === 'ListaPropiedades' ? 
      <Home handlerPage={this.handlerPage} /> 
    : <PublicarPropiedad handlerPage={this.handlerPage} />

    return (
      <div className="App">
          {Pages}
      </div>
    );
  }
}


 

export default App;
