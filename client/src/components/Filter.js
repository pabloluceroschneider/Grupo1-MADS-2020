import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

// use Filter.css

const InputRadio = props => {
  const {label, value} = props
  return (
    <div>
      <Form.Radio
        label={label}
        value={value}
        checked={value}
        // onChange={ () => handleChange(parent, asc)}
      />
    </div>
  );
};

const Filtro = props => {
  const {filter, index} = props;
  return (
    <div key={index} className="grid-item">
      <label className="filterName">{filter.title}</label>
      {filter.filters.map( f => {
        return (
          <div className="filter">
            <InputRadio label={f.label} value={f.value}/>
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
        {"label":"Dueño Directo", "value":true},
        {"label":"Inmobiliaria", "value":false},
        {"label":"Dueño/Inmobiliaria", "value":false}
      ]
    },{
      "title": "Comodidades",
      "filters":[
        {"label":"Wifi", "value":true},
        {"label":"Balcon", "value":true},
        {"label":"Ascensor", "value":true},
        {"label":"Cochera", "value":false},
        {"label":"Asador", "value":false},
        {"label":"Patio", "value":false},
      ]
    },{
      "title": "Cantidad de habitaciones",
      "filters":[
        {"label":"1", "value":true},
        {"label":"2", "value":false},
        {"label":"3", "value":false},
      ]
    }]


  return (
    <>
      <Form.Group inline>
        <div className="panelFilter">
          {filtros.map(( filter, index) => {
            return (
              <Filtro filter={filter} index={index} key={index} />              
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
