import React, { Component } from "react";
import { Ownership } from "./Ownership";
import { Button } from "semantic-ui-react";
import Filter from "./Filter";

export class ListOwnership extends Component {
  state = { ownship: [], renderFilter: false };

  //Hago la llamada al servidor para solicitar las propiedades
  //Extraigo el objeto data de la respuesta y se lo asigno al objeto ownship del state
  componentDidMount() {
    fetch("https://apicoalq.herokuapp.com/publicaciones")
      .then((res) => res.json())
      .then((respuesta) => {
        const { data } = respuesta;
        console.log(data);
        this.setState({ ownship: data });
      });
  }

  onClickFilterButton() {
    const { renderFilter } = this.state;
    this.setState({ renderFilter: !renderFilter });
  }

  filterBtn = () => {
      return (
    <Button
      onClick={() => this.onClickFilterButton()}
      positive={this.state.renderFilter}
    >
      {this.state.renderFilter ? "" : <i className="filter icon"></i>}
      {this.state.renderFilter ? "Aplicar" : "Filtros"}
    </Button>
  )};

  //Extraigo el Objeto ownship del state
  render() {
    const { ownship, renderFilter } = this.state;
    console.log(ownship);
    if (ownship.length === 0){
      return(
        <div>
            
              <div className="ui active inverted dimmer">
                <div className="ui text loader"><h3>Caragando Propiedades...Espere por favor</h3></div>
              </div>
            
        </div>
      )
    }
    return (
      <div className="render ListOwnerShip">
        <div className="titleRow">
          <h1 className="title">Listado de Propiedades</h1>
          <div className="filterComponent">{this.filterBtn()}</div>
        </div>
        {renderFilter ? <Filter /> : null}
        {ownship.map((prop) => {
          return (
            <div className="tarjetaProp" key={prop.id}>
              <Ownership
                dtp={prop.datePublished}
                id={prop.id}
                loc={prop.location}
                own={prop.owner}
                price={prop.price}
                roomAp={prop.roomApartment}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
