import React, { Component } from 'react'

export class TabInformativo extends Component {
    render() {
        return (
            <div className="ui pointing secondary menu">
                <a className="item active" data-tab="first">Busco compañero y propiedad</a>
                <a className="item" data-tab="second">Busco propiedad</a>
                <a className="item" data-tab="third">Busco Compañero</a>
                <a className="item" data-tab="four">Tengo propiedad</a>
            </div>
        )
    }
}