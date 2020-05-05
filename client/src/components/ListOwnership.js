import React, { Component } from 'react';
import useFetch from '../util/useFetch';
import { Ownership } from './Ownership';
import Filter, { ButtonFiltros } from './Filter';
import Loader from '../util/Loader';

export class ListOwnership extends Component {
	state = { ownship: null, renderFilter: false };

	componentDidMount() {
		this.getPropiedades();
	}

	getPropiedades = async () => {
		let data = await useFetch('/publicaciones');
		this.setState({ ownship: data });
    };
    
    onClickFilter = () => {
        const { renderFilter } = this.state;
        this.setState({ renderFilter: !renderFilter })
    }

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
	};

	render() {
		const { ownship } = this.state;
		return ownship ? this.renderOwnership() : <Loader />;
	}
}
