import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
// use Filter.css

const InputRadio = props => {
  const {label, id, value, setFilterState, filterState } = props

  const toggleCheck = () => { 
    
    console.log(filterState[id]);
    if (filterState[id] === value){
      setFilterState({ filters: {...filterState, [id]:null} })
    }else{
      setFilterState({ filters: {...filterState, [id]:value} })
    }

    // Funcionalidad para el input "Todas", que togglea check de todas las amenities 
    if ( id === "allAmenities" ){
      if (filterState.allAmenities){
        setFilterState({ filters: {...filterState, allAmenities:null, wifi: null, balcon:null, ascensor:null, cochera:null, asador:null, patio:null }})
      }else{
        setFilterState({ filters: {...filterState, allAmenities:1, wifi: 1, balcon:1, ascensor:1, cochera:1, asador:1, patio:1 }})
      }
    }

  }

  return (
    <div>
      <Form.Radio
        label={label}
        checked={ filterState[id] === value }
        onClick={ () => toggleCheck() }
      />
    </div>
  );
};

const Filtro = props => {
  const { filter, index, setFilterState, filterState } = props;
  return (
    <div key={index} className="grid-item">
      <label className="filterName">{filter.title}</label>
      {filter.filters.map( (f,index) => {
        return (
          <div key={index} className="filter">
            <InputRadio 
              label={f.label} 
              id={f.id} 
              value={f.value} 
              setFilterState={setFilterState}
              filterState={filterState}
              />
          </div>
        )
      })}
    </div>
  )

}

const PanelFiltros = props => {
  const { filterState, setFilterState } = props;

  const filtros = [
    {
      "title": "Tipo de Contrato",
      "filters":[
        { "label":"Dueño Directo", "id":"contrato", "value": "Propietario" },
        { "label":"Inmobiliaria", "id":"contrato", "value": "Inmobiliaria" },
        { "label":"Dueño/Inmobiliaria", "id":"contrato", "value": "duenoinmobiliaria" }
      ]
    },{
      "title": "Cantidad de habitaciones",
      "filters":[
        { "label":"1","id":"habitaciones", "value":1 },
        { "label":"2", "id":"habitaciones", "value":2 },
        { "label":"3", "id":"habitaciones", "value":3 },
      ]
    },{
      "title": "Comodidades",
      "filters":[
        { "label":"Wifi", "id":"wifi", "value":1 },
        { "label":"Balcon","id":"balcon", "value":1 },
        { "label":"Ascensor","id":"ascensor", "value":1 },
        { "label":"Cochera","id":"cochera", "value":1 },
        { "label":"Asador","id":"asador", "value":1 },
        { "label":"Patio","id":"patio", "value":1 },
        { "label":"Todas","id":"allAmenities", "value":1 },
      ]
    }
  ]

  return (
    <>
      {console.log(filterState)}
      <Form.Group inline>
        <div className="panelFilter">
          {filtros.map( (filter, index) => {
            return (
              <Filtro 
                key={index} 
                filter={filter} 
                index={index} 
                setFilterState={setFilterState}
                filterState={filterState}
                />              
            )
          })}
        </div>
      </Form.Group>
    </>
  );
};

export const ButtonFiltros = props => {
  const { onFilter, renderFilter } = props;
  return (
    <Button
    onClick={() => onFilter()}
    positive={renderFilter}
  >
    {renderFilter ? "" : <i className="filter icon"></i>}
    {renderFilter ? "Aplicar" : "Filtros"}
  </Button>
  )
}

export const filterPropiedades = ( ownship, filters ) => {
  let data = [];
  data = ownship.filter( p => {
    if (
      p.habitaciones === filters.habitaciones &&
      p.usuario.descripcion === filters.contrato 
      // &&
      // p.amenities === filters.habitaciones &&
      // p.amenities === filters.habitaciones &&
      // p.amenities === filters.habitaciones &&
      // p.amenities === filters.habitaciones
    ){ return p }
  })
  if ( data.length === 0 ){ return null}
  return data;
}


export default PanelFiltros
