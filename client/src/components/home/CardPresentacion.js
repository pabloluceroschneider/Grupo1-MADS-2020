import React, { Component } from "react";
import PropTypes from "prop-types";

export class CardPresentacion extends Component {
  static propTypes = {
    title: PropTypes.string,
    imagen: PropTypes.string,
    // pagina: PropTypes.string,
  };

  render() {
    const { title, imagen} = this.props;
    return (
      <div className="ui card">
        <div className="image">
          <img
            src={imagen}
            alt={title}
            // onClick={() => handlerPage(pagina)}
          ></img>
          <div className="textoImagen">{title}</div>
        </div>
      </div>
    );
  }
}
