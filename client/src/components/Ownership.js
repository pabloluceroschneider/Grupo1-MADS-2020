import React, { Component } from 'react'
import {Grid, Icon, Label} from 'semantic-ui-react'


const imagenes = ["https://imgar.zonapropcdn.com/avisos/resize/1/00/45/59/55/84/1200x1200/1716688221.jpg",
                  "https://imgar.zonapropcdn.com/avisos/resize/1/00/44/97/17/01/1200x1200/1704286302.jpg",
                   "https://imgar.zonapropcdn.com/avisos/resize/1/00/44/90/38/04/1200x1200/1700036482.jpg",
                    "https://imgar.zonapropcdn.com/avisos/resize/1/00/45/83/95/69/1200x1200/1719623196.jpg",
                    "https://imgar.zonapropcdn.com/avisos/resize/1/00/45/82/90/81/1200x1200/1719325461.jpg",
                   "https://imgar.zonapropcdn.com/avisos/resize/1/00/45/61/77/65/1200x1200/1714820015.jpg"]
export class Ownership extends Component{

    render(){
        const {dtp, id, loc, price, roomAp} = this.props
        return(
                // Componente Card tiene dos contenidos grandes. Content y extra content.
                //Columna Imgen tiene la imagen. la imagen la traigo del array imagenes con su fuente
                //Columna Contenido e imagen en la misma fila dentro de content esta la col contenido (Titulo, tag, Descripcion, metadatos y date)
                //Prop dtp: DatePublished, id: id, loc: location, price: price, roomAp: RoomApartment
            <div className="ownership">
               
                <div className="ui card ownership" >
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
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                  </div>
                  <div className="extra content">
                    <button className=" fluid positive ui button " style={{paddingRight:"2px"}}>Ver propiedad  
                        <Icon style={{paddingLeft:"7px"}} color="black" name="home"/>
                    </button>
                  </div>
                </div>
            </div>
            
        )
    }
}