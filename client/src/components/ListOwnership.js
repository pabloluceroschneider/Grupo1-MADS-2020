import React, { Component } from "react";
import { get } from "../util/api";
import { Ownership } from "./Ownership";
import { Button } from "semantic-ui-react";
import Filter from "./Filter";
import Loader from "../util/Loader";

export class ListOwnership extends Component {
  state = { ownship: null, renderFilter: false };

  componentDidMount() {
    this.getPropiedades();
  }

  getPropiedades = async () => {
    let data = await get("/publicaciones");
    this.setState({ ownship: data.data });
  };

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
    );
  };

  renderOwnership = () => {
    const { ownship, renderFilter } = this.state;
    return (
      <div className="render ListOwnerShip">
        <div className="titleRow">
          <h1 className="title">Listado de Propiedades</h1>
          <div className="filterComponent">{this.filterBtn()}</div>
        </div>
        {renderFilter ? <Filter /> : null}
        {/* {this.state.ownship} */}
        {ownship.map((prop) => {
          console.log(prop);
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
  };

  render() {
    const { ownship } = this.state;
    return ownship ? this.renderOwnership() : <Loader />;
  }
}
