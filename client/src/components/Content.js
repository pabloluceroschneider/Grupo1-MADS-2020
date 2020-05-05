import React, { Component } from 'react'
import {Grid, Icon, Label} from 'semantic-ui-react'
import {Amenities} from './Amenities'

export class Content extends Component{


    render(){
        const {dtp, id, loc, price, roomAp, own, amen} = this.props
        return(
            <div className="contenido">
                <div className="titulo">
                    <div className="content-titulo">
                    <h1>Apartamento {id}</h1>
                    </div>
                    <div className="tag">
                        <Label as='a' color={own === 1 ? 'blue' : 'red'} tag>
                            {own === 1 ? 'Dueño' : 'Inmobiliaria'}
                        </Label>
                    </div>
                </div>
                <div className="informacion">
                    <div className="columna1">
                            <div className="loc">
                                <h3><Icon name="map marker alternate"/>{loc}</h3>
                            </div>
                            <div className="spacer"></div>
                            <div className="amb">
                                <h3 className="amb">Ambientes: {roomAp}</h3>                                    
                            </div>
                        
                        <div className="precio">
                            <h3>Precio: $ {price}</h3>
                        </div>      
                        <div className="date">
                            <span>{dtp}</span>
                        </div>
                    </div>
                    <div className="columna2">
                        <Amenities amenities = {amen} />
                    </div>
                </div>
            </div>
        )
    }
}