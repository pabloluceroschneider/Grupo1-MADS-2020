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
				"habitaciones": null,
				"contrato": null,
				"wifi": null,
				"ascensor": null,
				"cochera": null,
				"asador": null,
				"patio": null,
				"allAmenities": null
			},
			filteredOwnship: null	
		};

	componentDidMount() {
		this.getPropiedades();
	}

	getPropiedades = async () => {
		let data = await get("/propiedades");
		this.setState({ ownship: data });
	};

	filterPropiedades = callback => {
		const { ownship, filters } = this.state;
		this.setState({ filteredOwnship: callback(ownship, filters) })
	};
    
  onClickFilter = () => {
		const { renderFilter } = this.state;
		if (renderFilter){
			this.filterPropiedades(filterPropiedades);
		}
		this.setState({ renderFilter: !renderFilter });
	};C
	
	renderCards = data => {
		return data.map((prop) => {
			return (
				<div className="tarjetaProp" key={prop.id}>
          <Ownership
            dtp={prop.fechaPublicacion}
            id={prop.id}
            loc={prop.ubicacion}
            own={prop.usuario}
            amen = {prop.amenities}
            price={prop.precios}
            roomAp={prop.habitaciones}
            image = {prop.imagenes}
            lat={prop.lat}
            long={prop.longitud}
          />
				</div>
			);
		})
	}

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
				{renderFilter ? <Filter filterState={this.state.filters} setFilterState={this.setState.bind(this)} /> : null}
				{ filteredOwnship ? this.renderCards(filteredOwnship) : this.renderCards(ownship) }
			</div>
		);
	};

	render() {
		const { ownship } = this.state;
		return ownship ? this.renderOwnership() : <Loader />;
	}
}
