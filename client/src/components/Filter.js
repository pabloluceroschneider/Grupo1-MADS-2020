import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
// use Filter.css

const InputRadio = props => {
  const {label, id, value, setRequestBody, requestBody } = props

  const toggleCheck = () => { 
    if (requestBody[id] === value){
      setRequestBody({...requestBody, [id]: null })
    }else{
      setRequestBody({...requestBody, [id]: value })
    }

    // Funcionalidad para el input "Todas", que togglea check de todas las amenities 
    if ( id === "todas" ){
      if (requestBody.wifi === 1){
        setRequestBody({...requestBody, wifi: null, balcon:null, ascensor:null, cochera:null, asador:null, patio:null })
      }else{
        setRequestBody({...requestBody, wifi: 1, balcon:1, ascensor:1, cochera:1, asador:1, patio:1 })
      }
    }
  }

  return (
    <div>
      <Form.Radio
        label={label}
        checked={ requestBody[id] === value }
        onClick={ () => toggleCheck() }
      />
    </div>
  );
};

const Filtro = props => {
  const { filter, index, setRequestBody, requestBody } = props;
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
              setRequestBody={setRequestBody}
              requestBody={requestBody}
              />
          </div>
        )
      })}
    </div>
  )

}

const PanelFiltros = () => {
  const filtros = [
    {
      "title": "Tipo de Contrato",
      "filters":[
        { "label":"Dueño Directo", "id":"contrato", "value": "propietario" },
        { "label":"Inmobiliaria", "id":"contrato", "value": "inmobiliaria" },
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
        { "label":"Todas","id":"todas", "value":1 },
      ]
    }
  ]

  const [ requestBody, setRequestBody ] = useState({
    "habitaciones": null,
    "contrato": null,
    "wifi": null,
    "ascensor": null,
    "cochera": null,
    "asador": null,
    "patio": null
  })

  return (
    <>
      {console.log(requestBody)}
      <Form.Group inline>
        <div className="panelFilter">
          {filtros.map( (filter, index) => {
            return (
              <Filtro 
                key={index} 
                filter={filter} 
                index={index} 
                setRequestBody={setRequestBody}
                requestBody={requestBody}
                />              
            )
          })}
        </div>
      </Form.Group>
    </>
  );
};

export const ButtonFiltros = props => {
  return (
    <Button
    onClick={() => this.onClickFilterButton()}
    positive={this.state.renderFilter}
  >
    {this.state.renderFilter ? "" : <i className="filter icon"></i>}
    {this.state.renderFilter ? "Aplicar" : "Filtros"}
  </Button>
  )
}


export default PanelFiltros
