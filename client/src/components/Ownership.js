import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { Content } from "./Content";
import Carrousell from "./Carrousell";

export class Ownership extends Component {
  render() {
    const {
      dtp,
      id,
      loc,
      price,
      roomAp,
      own,
      amen,
      image,
      lat,
      long,
      titulo
    } = this.props;
    return (
      // Componente Card tiene dos contenidos grandes. Content y extra content.
      //Columna Imgen tiene la imagen. la imagen la traigo del array imagenes con su fuente
      //Columna Contenido e imagen en la misma fila dentro de content esta la col contenido (Titulo, tag, Descripcion, metadatos y date)
      //Prop dtp: DatePublished, id: id, loc: location, price: price, roomAp: RoomApartment
      <div className="ownership">
        <div className="ui card ownership">
          <div className="complete">
            <div className="content">
              <div className="columnaImagen">
                <Carrousell images={image} />
              </div>
              <hr></hr>
              <div className="columnaContenido">
                <Content
                  id={id}
                  loc={loc}
                  roomAp={roomAp}
                  price={price}
                  dtp={dtp}
                  own={own["rol"]}
                  amen={amen}
                  lat={lat}
                  long={long}
                  titulo={titulo}
                />
              </div>
            </div>
            <div className="extra content">
              <button
                className=" fluid positive ui button "
                style={{ paddingRight: "2px" }}
              >
                Ver propiedad
                <Icon
                  style={{ paddingLeft: "7px" }}
                  color="black"
                  name="home"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
