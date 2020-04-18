import React, { Component } from 'react'

export class BuscadorPropiedad extends Component {
    render() {
        return (
            <div className="ui icon input">
                <i className="search icon"></i>
                <input type="text" placeholder="¿Dónde quiere vivir?"></input>
            </div>
        )
    }
}