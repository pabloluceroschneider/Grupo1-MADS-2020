import React, { Component } from 'react';
import useFetch from '../util/useFetch';
import { Ownership } from './Ownership';
import Filter, { ButtonFiltros, filterPropiedades } from './Filter';
import Loader from '../util/Loader';

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
			}	
		};

	componentDidMount() {
		this.getPropiedades();
	}

	getPropiedades = async () => {
		let data = await useFetch('/publicaciones');
		this.setState({ ownship: data });
	};
	
	filterPropiedades = callback => {
		const { ownship, filters } = this.state;
		this.setState({ ownship: callback(ownship, filters) })
	};
    
    onClickFilter = () => {
		const { renderFilter } = this.state;
		if (renderFilter){
			this.filterPropiedades(filterPropiedades);
		}
		this.setState({ renderFilter: !renderFilter });
    };

	renderOwnership = () => {
		const { ownship, renderFilter } = this.state;
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
				{console.log(ownship)}
				{renderFilter ? <Filter filterState={this.state.filters} setFilterState={this.setState.bind(this)} /> : null}
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
	};

	render() {
		const { ownship } = this.state;
		return ownship ? this.renderOwnership() : <Loader />;
	}
}
