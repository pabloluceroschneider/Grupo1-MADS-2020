import React, { useState } from "react";
import { Form } from "semantic-ui-react";
// use Filter.css

const Radios = props => {
  const {label, asc, selected, setSelected, parent} = props;

  const validateCheck = (parent, asc) => {
    if (selected.filter === parent && selected.asc === asc){
      return true
    }
    return false
  }

  const handleChange = (parent, asc) => {
    setSelected( { "filter":parent, "asc":asc} )
  }

  return (
    <div>
      <Form.Radio
        label={label}
        value={asc}
        checked={ validateCheck(parent, asc)}
        onChange={ () => handleChange(parent, asc)}
      />
    </div>
  );
};

const PanelFiltros = () => {
  const filtros = ["Precio", "Fecha de Publicacion","Cantidad de habitaciones"];
  const [selected, setSelected] = useState({ "filter":"Precio", "asc":1});

  return (
    <>
      <Form.Group inline>
        <div className="panelFilter">
          {filtros.map((filterName, index) => {
            return (
              <div key={index} className="grid-item">
                <label className="filterName">{filterName}</label>
                <Radios label="Mayor a menor" asc={1} selected={selected} setSelected={setSelected} parent={filterName}/>
                <Radios label="Menor a mayor" asc={0} selected={selected} setSelected={setSelected} parent={filterName}/>
              </div>
            );
          })}
        </div>
      </Form.Group>
    </>
  );
};

const Filter = () => {

  return (
    <>
       <PanelFiltros />
    </>
  );
};

export default Filter;
