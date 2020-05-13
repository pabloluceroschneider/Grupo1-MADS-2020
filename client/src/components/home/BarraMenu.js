import React, { Component } from 'react'
import { BuscadorPropiedad } from './BuscadorPropiedad'


export class BarraMenu extends Component {
    render() {
        return (
            <div className="ui large top fixed pointed borderless menu">
            <div className="ui container">
              <div className="active item"><i className="home icon"></i></div>
              <div className="item">Home</div>
              <BuscadorPropiedad></BuscadorPropiedad>
              <div className="right menu">
                <div className="item">
                  <button className="ui button">Iniciar Sesión</button>
                </div>
                <div className="item">
                  <button className="ui primary button">Registrarse</button>
                </div>
              </div>
            </div>
          </div>
        )
    }

}
