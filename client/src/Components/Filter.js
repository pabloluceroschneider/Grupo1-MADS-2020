import React, {useState} from 'react';
import {Button} from 'semantic-ui-react';

const PanelFiltros = () => {
    return (
        <h1>Panel</h1>
    )
}

const Filter = () => {
    const [renderPanel, setRenderPanel ] = useState(false);

    return (
        <>
            <Button onClick={ () => {setRenderPanel(!renderPanel)} }>
                Filtros
            </Button>
            { renderPanel ? <PanelFiltros /> : null }
        </>
    )
}

export default Filter;