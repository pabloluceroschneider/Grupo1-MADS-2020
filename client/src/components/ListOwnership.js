import React, { Component } from "react";
import { get } from "../util/api";
import { Ownership } from "./Ownership";
import Filter, { ButtonFiltros, filterPropiedades } from "./Filter";
import Loader from "../util/Loader";

export class ListOwnership extends Component {
  state = {
    ownship: null,
    renderFilter: false,
    filters: {
      una_hab: null,
      dos_hab: null,
      tres_hab: null,
      contrato: null,
      wifi: null,
      ascensor: null,
      cochera: null,
      asador: null,
      patio: null,
      allAmenities: null,
    },
    filteredOwnship: null,
  };
 

  componentDidMount() {
    this.getPropiedades();
  }

  getPropiedades = async () => {
    let data = await get("/property/properties");
    this.setState({ ownship: data });
  };

  onClickFilter = () => {
    const { ownship, filters, renderFilter } = this.state;
    if (renderFilter) {
      let filteredOwnship = filterPropiedades(ownship, filters);
      this.setState({ filteredOwnship });
    }
    this.setState({ renderFilter: !renderFilter });
  };
  
  renderCards = (data) => {
    return data.map((prop) => {
      return (
        <div className="tarjetaProp" key={prop.propertyId}>
          <Ownership
            dtp={prop.fechaPublicacion}
            loc={prop.ubicacion}
            own={prop.usuario}
            amen={prop.amenities}
            price={prop.precios}
            roomAp={prop.habitaciones}
            image={prop.images}
            lat={prop.lat}
			long={prop.longitud}
			titulo={prop.titulo}
          />
        </div>
      );
    });
  };

  renderOwnership = () => {
    const { ownship, renderFilter, filteredOwnship } = this.state;
    return (
      <div className="render ListOwnerShip">
        <div className="titleRow">
          <h1 className="title">Listado de Propiedades</h1>
          <div className="filterComponent">
            <ButtonFiltros
              onFilter={() => this.onClickFilter()}
              renderFilter={this.state.renderFilter}
            />
          </div>
        </div>
        {renderFilter ? (
          <Filter
            filterState={this.state.filters}
            setFilterState={this.setState.bind(this)}
          />
        ) : null}
        {filteredOwnship
          ? this.renderCards(filteredOwnship)
          : this.renderCards(ownship)}
      </div>
    );
  };

  render() {
    const { ownship } = this.state;
    return ownship ? this.renderOwnership() : <Loader />;
  }
}
