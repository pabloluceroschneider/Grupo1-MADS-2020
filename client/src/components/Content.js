import React, { Component } from 'react'
import {Grid, Icon, Label} from 'semantic-ui-react'

export class Content extends Component{


    render(){
        const {dtp, id, loc, price, roomAp} = this.props
        return(
            <div className="contenido">
                <div className="titulo">
                    <div className="content-titulo">
                    <h1>Apartamento {id}</h1>
                    </div>
                    <div className="tag">
                        <Label as='a' color={id %2 === 0 ? 'red' : 'blue'} tag>
                            {id %2 === 0 ? 'Inmobiliaria' : 'Dueño'}
                        </Label>
                    </div>
                </div>
                    <div className="descripcion">
                        <h3><Icon name="map marker alternate"/>{loc}</h3>
                        <h3>Ambientes: {roomAp}</h3>
                                    
                    </div>
                    <div className="metadatos">
                        <div className="precio">
                            <h3>Precio: $ {price}</h3>
                        </div>
                    </div>
                    <div className="date">
                            <span>{dtp}</span>
                     </div>
            </div>
        )
    }
}