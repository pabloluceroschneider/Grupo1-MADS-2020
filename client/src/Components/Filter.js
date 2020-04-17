import React, { useState } from "react";
import { Button } from "semantic-ui-react";


const InputCheck = props => {
    const {text, tabindex} = props;
    return (
        <>
        <input  type="radio" 
                name="fruit" 
                tabindex={`${tabindex}`} 
                className="hidden" 
                onClick={ ()=>{console.log(text)}}
            />
            <label>{text}</label>
        </>
    )

}

const Field = props => {
    const {label, tabindex} = props;
    return (
        <>
        <div className="field">
            <label>{label}</label>
            <div className="ui radio checkbox">
            <InputCheck tabindex={`${tabindex}`} text={"Mayor a menor"} />               
            <InputCheck tabindex={`${tabindex}`} text={"Menor a mayor"} />               
            </div>
        </div>
        </>
    );
};

const GroupedFields = () => {
    const filtros = ['Precio','Fecha de publicación']

  return (
    <div className="grouped fields">
        {filtros.map( (f, index) => {
            return (
                <Field key={index} tabindex={index} label={f} />
            )
        })}
    </div>
  );
};

const PanelFiltros = () => {
  return (
    <>
      <div className="ui form">
        <GroupedFields />
      </div>
    </>
  );
};

const Filter = () => {
  const [renderPanel, setRenderPanel] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setRenderPanel(!renderPanel);
        }}
      >
        { renderPanel ? 'Aplicar': 'Filtros'}
      </Button>
      {renderPanel ? <PanelFiltros /> : null}
    </>
  );
};

export default Filter;
