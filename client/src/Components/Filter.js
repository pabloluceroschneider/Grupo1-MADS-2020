import React, { useState } from "react";
import { Button } from "semantic-ui-react";
// use Filter.css


const InputCheck = props => {
    const {text, tabIndex} = props;
    return (
        <>
        <input  type="radio" 
                name="fruit" 
                tabIndex={`${tabIndex}`} 
                className="hidden" 
                onClick={ ()=>{console.log(text)}}
            />
            <label>{text}</label>
        </>
    )

}

const Field = props => {
    const {label, tabIndex} = props;
    return (
        <>
        <div className="field">
            <label>{label}</label>
            <div className="ui radio checkbox">
            <InputCheck tabIndex={`${tabIndex}`} text={"Mayor a menor"} />               
            <InputCheck tabIndex={`${tabIndex}`} text={"Menor a mayor"} />               
            </div>
        </div>
        </>
    );
};

const GroupedFields = () => {
    const filtros = ['Precio','Fecha de publicación', 'Cantidad de habitaciones']

  return (
    <div className="grouped fields">
        {filtros.map( (f, index) => {
            return (
                <Field className="grid-item" key={index} tabIndex={index} label={f} />
            )
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
    if (renderPanel){
      console.log("filtrar!")
    }
    setRenderPanel(!renderPanel);
  }

  return (
    <>
      <Button onClick={() => onClickFilterButton()} positive={renderPanel} >
        { renderPanel ? '' : <i class="filter icon"></i>}        
        { renderPanel ? 'Aplicar': 'Filtros'}
      </Button>
      {renderPanel ? <PanelFiltros /> : null}
    </>
  );
};

export default Filter;
