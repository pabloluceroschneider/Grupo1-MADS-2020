import React, { Component } from 'react'
import {Grid, Icon, Label} from 'semantic-ui-react'


const imagenes = ["https://imgar.zonapropcdn.com/avisos/resize/1/00/45/59/55/84/1200x1200/1716688221.jpg",
                  "https://imgar.zonapropcdn.com/avisos/resize/1/00/44/97/17/01/1200x1200/1704286302.jpg",
                   "https://imgar.zonapropcdn.com/avisos/resize/1/00/44/90/38/04/1200x1200/1700036482.jpg"]
export class Ownership extends Component{

    render(){
        const {dtp, id, loc, own, price, roomAp, image} = this.props
        return(

                <div className="ui card" >
                  <div className="content">
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column className="columnaImagen" >
                                <img className="image" src={imagenes[id-1]} alt={id}  />
                            </Grid.Column>
                            <Grid.Column className="columnaContenido">
                                <div className="titulo">
                                    <h1>Apartamento {id}</h1>
                                    <div className="tag">
                                        <Label as='a' color={id %2 == 0 ? 'red' : 'blue'} tag>
                                            {id %2 == 0 ? 'Inmobiliaria' : 'Dueño'}
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
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                  </div>
                  <div className="extra content">
                    <button class=" fluid positive ui button " style={{paddingRight:"2px"}}>Ver propiedad  
                        <Icon style={{paddingLeft:"7px"}} color="black" name="home"/>
                    </button>
                  </div>
                </div>
            
        )
    }
}