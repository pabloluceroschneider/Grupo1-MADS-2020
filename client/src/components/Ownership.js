import React, { Component } from 'react'
import {Grid, Icon} from 'semantic-ui-react'
import {Content} from './Content'


const imagenes = ["https://imgar.zonapropcdn.com/avisos/resize/1/00/45/59/55/84/1200x1200/1716688221.jpg",
                  "https://imgar.zonapropcdn.com/avisos/resize/1/00/44/97/17/01/1200x1200/1704286302.jpg",
                   "https://imgar.zonapropcdn.com/avisos/resize/1/00/44/90/38/04/1200x1200/1700036482.jpg",
                    "https://imgar.zonapropcdn.com/avisos/resize/1/00/45/83/95/69/1200x1200/1719623196.jpg",
                    "https://imgar.zonapropcdn.com/avisos/resize/1/00/45/82/90/81/1200x1200/1719325461.jpg",
                   "https://imgar.zonapropcdn.com/avisos/resize/1/00/45/61/77/65/1200x1200/1714820015.jpg"]
export class Ownership extends Component{

    render(){
        const {dtp, id, loc, price, roomAp, own, amen, image, lat, long} = this.props
        return(
                // Componente Card tiene dos contenidos grandes. Content y extra content.
                //Columna Imgen tiene la imagen. la imagen la traigo del array imagenes con su fuente
                //Columna Contenido e imagen en la misma fila dentro de content esta la col contenido (Titulo, tag, Descripcion, metadatos y date)
                //Prop dtp: DatePublished, id: id, loc: location, price: price, roomAp: RoomApartment
            <div className="ownership">
               
                <div className="ui card ownership" >
                    <div className="complete">

                      <div className="content">
                            <div className="columnaImagen" >
                                 <img className="image" src={image[0]} alt={id}  />
                            </div>
                            <hr></hr>
                            <div className="columnaContenido">
                                <Content 
                                    id = {id}
                                    loc = {loc}
                                    roomAp = {roomAp}
                                    price = {price}
                                    dtp = {dtp}
                                    own ={own['rol']}
                                    amen = {amen}
                                    lat={lat}
                                    long={long}
                                    />
                                
                            </div>
                      </div>
                      <div className="extra content">
                        <button className=" fluid positive ui button " style={{paddingRight:"2px"}}>Ver propiedad  
                            <Icon style={{paddingLeft:"7px"}} color="black" name="home"/>
                        </button>
                      </div>
                    </div>
                </div>
            </div>
            
        )
    }
}