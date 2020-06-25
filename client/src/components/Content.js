import React, { Component } from "react";
import { Icon, Label } from "semantic-ui-react";
import { Amenities } from "./Amenities";
import { Precio } from "./Precio";
import ModalMap from "./ModalMap";

export class Content extends Component {
  render() {
    const { dtp, id, loc, price, roomAp, own, amen, lat, long, titulo} = this.props;
    function toDate(string) {
      var string_date = string;
      var fecha = new Date(string_date);
      return fecha.toLocaleDateString();
    }
    return (
      <div className="contenido">
        <div className="titulo">
          <div className="content-titulo">
            <h1>{titulo}</h1>
          </div>
          <div className="tag">
            <Label as="a" color={own === 1 ? "blue" : "red"} tag>
              {own === 1 ? "Dueño" : "Inmobiliaria"}
            </Label>
          </div>
        </div>
        <div className="informacion">
          <div className="columna1">
            <div className="loc">
              <h3>
                <Icon name="map marker alternate" />
                {loc}
              </h3>
            </div>
            <div className="spacer"></div>
            <div className="amb">
              <h3 className="amb">Ambientes: {roomAp}</h3>
            </div>

            <div className="precio">
              {/* <h3>Precio: $ {price}</h3> */}
              <Precio precios={price} />
            </div>
            <div className="date">
              <span style={{ color: "grey" }}>Publicado {toDate(dtp)}</span>
            </div>
          </div>
          <div className="columna2">
            <ModalMap
              title={"Apartamento " + id}
              lat={lat}
              long={long}
            ></ModalMap>
            <Amenities amenities={amen} />
          </div>
        </div>
      </div>
    );
  }
}
