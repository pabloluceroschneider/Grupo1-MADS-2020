import React, { Component } from 'react'

export class TabInformativo extends Component {
    render() {
        return (
            <div className="ui pointing secondary menu">
                <div className="item active" data-tab="first">Busco compañero y propiedad</div>
                <div className="item" data-tab="second">Busco propiedad</div>
                <div className="item" data-tab="third">Busco Compañero</div>
                <div className="item" data-tab="four">Tengo propiedad</div>
            </div>
        )
    }
}