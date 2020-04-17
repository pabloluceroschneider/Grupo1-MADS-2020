import React, { useState } from "react";
import { Button, Checkbox } from "semantic-ui-react";
// use Filter.css

const InputCheck = (props) => {
  const { text, tabIndex, checked, setAsc } = props;
  let boolean = tabIndex ? true : false;

  return (
    <>
      <Checkbox 
          label={text}
          tabIndex={tabIndex}
          style={{display:'block'}}
          checked={checked}
          onChange={()=> setAsc(boolean)}
        />

    </>
  );
};

const Field = (props) => {
  const { label } = props;
  const [asc, setAsc ] = useState(true)
  return (
    <>
      <div className="field">
        <label>{label}</label>
        <div className="ui radio checkbox">
          <InputCheck tabIndex={1} text={"Mayor a menor"} checked={asc} setAsc={setAsc}/>
          <InputCheck tabIndex={0} text={"Menor a mayor"} checked={!asc} setAsc={setAsc}/>
        </div>
      </div>
    </>
  );
};

const GroupedFields = () => {
  const filtros = [
    "Precio",
    "Fecha de publicación",
    "Cantidad de habitaciones",
  ];

  return (
    <div className="grouped fields">
      {filtros.map((f, index) => {
        return (
          <Field className="grid-item" key={index} label={f} />
        );
      })}
    </div>
  );
};

const PanelFiltros = () => {
  return (
    <>
      <div className="ui form panelFilter">
        <GroupedFields />
      </div>
    </>
  );
};

const Filter = () => {
  const [renderPanel, setRenderPanel] = useState(false);

  const onClickFilterButton = () => {
    if (renderPanel) {
      console.log("filtrar!");
    }
    setRenderPanel(!renderPanel);
  };

  return (
    <>
      <Button onClick={() => onClickFilterButton()} positive={renderPanel}>
        {renderPanel ? "" : <i className="filter icon"></i>}
        {renderPanel ? "Aplicar" : "Filtros"}
      </Button>
      {renderPanel ? <PanelFiltros /> : null}
    </>
  );
};

export default Filter;
