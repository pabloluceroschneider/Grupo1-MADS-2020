import React from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
// use Filter.css

const InputRadio = props => {
  const {label, id, value, setFilterState, filterState } = props

  const toggleCheck = () => { 
    
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
        setFilterState({ filters: {...filterState, allAmenities: "1", wifi: "1", balcon: "1", ascensor: "1", cochera: "1", asador: "1", patio: "1" }})
      }
    }
  }

  return (
    <div>
      <Checkbox
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
        { "label":"Dueño Directo", "id":"contrato", "value": 1 },
        { "label":"Inmobiliaria", "id":"contrato", "value": 2 },
        { "label":"Dueño/Inmobiliaria", "id":"contrato", "value": null }
      ]
    },{
      "title": "Cantidad de habitaciones",
      "filters":[
        { "label":"1","id":"una_hab", "value":1},
        { "label":"2", "id":"dos_hab", "value":2 },
        { "label":"3", "id":"tres_hab", "value":3 },
      ]
    },{
      "title": "Comodidades",
      "filters":[
        { "label":"Wifi", "id":"wifi", "value":"1" },
        { "label":"Balcon","id":"balcon", "value":"1" },
        { "label":"Ascensor","id":"ascensor", "value":"1" },
        { "label":"Cochera","id":"cochera", "value":"1" },
        { "label":"Asador","id":"asador", "value":"1" },
        { "label":"Patio","id":"patio", "value":"1" },
        { "label":"Todas","id":"allAmenities", "value":"1" },
      ]
    }
  ]

  return (
    <>
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
    let flag = true;
    if ( filters.una_hab || filters.dos_hab || filters.tres_hab  ){ 
      if ( p.habitaciones !== filters.una_hab && p.habitaciones !== filters.dos_hab && p.habitaciones !== filters.tres_hab ){ flag = false }
    }
    if (filters.contrato){ 
      if ( p.usuario.rol !== filters.contrato ){ flag = false }
    }
    if (filters.asador){
      if ( !p.amenities[0].valor ){ flag = false }
    }
    if (filters.cochera){
      if ( !p.amenities[1].valor){ flag = false }
    }
    if (filters.wifi){
      if ( !p.amenities[2].valor ){ flag = false }
    }
    if (filters.patio){
      if ( !p.amenities[3].valor){ flag = false }
    }
    if (filters.balcon){
      if ( !p.amenities[4].valor  ){ flag = false }
    }
    if (filters.ascensor){
      if ( !p.amenities[5].valor  ){ flag = false }
    }

    if (flag){ return p }
    return null
  })
  if ( data.length === 0 ){ 
    alert("No hay propiedades con los filtros aplicados"); 
    return null
  }
  return data;
}


export default PanelFiltros
