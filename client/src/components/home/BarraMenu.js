import React, { Component } from 'react'
import { BuscadorPropiedad } from './BuscadorPropiedad'


export class BarraMenu extends Component {
    render() {
        return (
            <div className="ui large top fixed pointed borderless menu">
            <div className="ui container">
              <a className="active item"><i className="home icon"></i></a>
              <a className="item">Home</a>
              <BuscadorPropiedad></BuscadorPropiedad>
              <div className="right menu">
                <div className="item">
                  <a className="ui button">Iniciar Sesión</a>
                </div>
                <div className="item">
                  <a className="ui primary button">Registrarse</a>
                </div>
              </div>
            </div>
          </div>
        )
    }

}
