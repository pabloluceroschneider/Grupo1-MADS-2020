import React, { useState, useEffect, useRef } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

// const fields = {
// 	habitaciones: 1,
// 	fechaPublicacion: new Date(),
// 	lat: 1,
// 	longitud: 1,
// 	ubicacion: 1,
// 	usuario: 'admin'
// };

const options = [
	{ key: 'd', text: 'Dueño', value: 'dueño' },
	{ key: 'i', text: 'Inmobiliaria', value: 'inmobiliaria' }
];

const FormProperty = () => {
    const firstInput = useRef(null);
    const [fields, setFields] = useState({
        habitaciones : null,
    	fechaPublicacion: new Date(),
	    lat: null,
	    longitud: null,
	    ubicacion: null,
	    usuario: {
            descripcion: null,
            rol: 1
        },
        amenities: {
            asador: null,
            cochera: null
        },
        precio: null
    })

	useEffect(() => {
		firstInput.current.focus();
    }, []);
    
    const onSubmitProperty = () => {
        console.log("fields -->", fields)
    }

	return (
		<div className="form-property">
			<Form>
				<Form.Field>
					<label>Direccion</label>
					<input ref={firstInput} placeholder="Direccion" onChange={ event => setFields({...fields, ubicacion: event.target.value})  } />
				</Form.Field>

				<Form.Field>
					<Form.Input type="number" fluid label="Habitaciones" placeholder="Habitaciones" onChange={ event => setFields({...fields, habitaciones: event.target.value})} />
				</Form.Field>

				<Form.Group widths="equal">
					<Form.Input fluid label="Latitud" placeholder="Latitud" onChange={ event => setFields({...fields, lat: event.target.value})}  />
					<Form.Input fluid label="Longitud" placeholder="Longitud" onChange={ event => setFields({...fields, longitud: event.target.value})}  />
				</Form.Group>

				<Form.Group grouped style={{ textAlign: 'left', marginLeft: '50px' }}>
					<label>Comodidades</label>
					<Form.Field label="Asador" control="input" type="checkbox" onChange={ () => setFields({...fields, amenities: {...fields.amenities, asador: !fields.amenities.asador} })} />
					<Form.Field label="Cochera" control="input" type="checkbox" />
					<Form.Field label="Wifi" control="input" type="checkbox" />
					<Form.Field label="Patio" control="input" type="checkbox" />
					<Form.Field label="Balcon" control="input" type="checkbox" />
					<Form.Field label="Ascensor" control="input" type="checkbox" />
				</Form.Group>

				<Form.Group widths="equal">
					<Form.Select
						fluid
						label="Tipo de contrato"
						options={options}
                        placeholder="Seleccione tipo de contrato..."
                        // onChange={ event => setFields({...fields, usuario: {descripcion: value}})} 
					/>
					<Form.Input type="number" fluid label="Precio" placeholder="Precio" onChange={ event => setFields({...fields, precio: event.target.value})}  />
				</Form.Group>

                <Button type='submit' onClick={onSubmitProperty}>Publicar</Button>
	
			</Form>
		</div>
	);
};

export default FormProperty;
