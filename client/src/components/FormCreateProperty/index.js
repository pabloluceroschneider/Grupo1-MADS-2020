import React, { useState, useEffect, useRef } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { post } from '../../util/api';
import firebase from '../../util/firebase';

const options = [
	{ key: 'd', text: 'Dueño', value: 'dueño' },
	{ key: 'i', text: 'Inmobiliaria', value: 'inmobiliaria' }
];

const FormProperty = () => {
	const firstInput = useRef(null);
	const [ fields, setFields ] = useState({
		habitaciones: null,
		fechaPublicacion: new Date(),
		lat: null,
		longitud: null,
		ubicacion: null,
		usuario: {
			descripcion: null,
			rol: 1
		},
		amenities: {
			Asador: null,
			Cochera: null,
			Wifi: null,
			Patio: null,
			Balcon: null,
			Ascensor: null
		},
		precios: null,
		images: null
	});

	useEffect(() => {
		firstInput.current.focus();
	}, []);

	const saveImages = async (files) => {
		let bucketName = 'images';

		Array.from(files).forEach(file => { 
			let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
			let uploadTask = storageRef.put(file);
			uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
				let downloadURL = uploadTask.snapshot.downloadURL;
			});
		 });
	};

	const onSubmitProperty = async () => {
		let postJson = { ...fields, amenities: [] };
		postJson.amenities.push({ descripcion: 'Asador', valor: fields.amenities.Asador });
		postJson.amenities.push({ descripcion: 'Cochera', valor: fields.amenities.Cochera });
		postJson.amenities.push({ descripcion: 'Wifi', valor: fields.amenities.Wifi });
		postJson.amenities.push({ descripcion: 'Patio', valor: fields.amenities.Patio });
		postJson.amenities.push({ descripcion: 'Balcon', valor: fields.amenities.Balcon });
		postJson.amenities.push({ descripcion: 'Ascensor', valor: fields.amenities.Ascensor });

		postJson = { ...postJson, precios: [] };
		postJson.precios.push({ idPrecio: 1, descripcion: 'Total', monto: fields.precios });

		await saveImages(postJson.images);

		let names = [];
		Array.from(postJson.images).forEach( file => {
			names.push( file.name )
		})

		postJson = { ...postJson, images: names };

		console.log('postJson -->', postJson);

		await post('/property', postJson);
	};

	return (
		<div className="form-property">
			<Form>
				<Form.Field>
					<label>Direccion</label>
					<input
						ref={firstInput}
						placeholder="Direccion"
						onChange={(event) => setFields({ ...fields, ubicacion: event.target.value })}
					/>
				</Form.Field>

				<Form.Field>
					<Form.Input
						type="number"
						fluid
						label="Habitaciones"
						placeholder="Habitaciones"
						onChange={(event) => setFields({ ...fields, habitaciones: parseInt(event.target.value) })}
					/>
				</Form.Field>

				<Form.Group widths="equal">
					<Form.Input
						fluid
						label="Latitud"
						placeholder="Latitud"
						onChange={(event) => setFields({ ...fields, lat: event.target.value })}
					/>
					<Form.Input
						fluid
						label="Longitud"
						placeholder="Longitud"
						onChange={(event) => setFields({ ...fields, longitud: event.target.value })}
					/>
				</Form.Group>

				<Form.Group grouped style={{ textAlign: 'left', marginLeft: '50px' }}>
					<label>Comodidades</label>
					<Form.Field
						label="Asador"
						control="input"
						type="checkbox"
						onChange={() =>
							setFields({
								...fields,
								amenities: { ...fields.amenities, Asador: !fields.amenities.Asador }
							})}
					/>
					<Form.Field
						label="Cochera"
						control="input"
						type="checkbox"
						onChange={() =>
							setFields({
								...fields,
								amenities: { ...fields.amenities, Cochera: !fields.amenities.Cochera }
							})}
					/>
					<Form.Field
						label="Wifi"
						control="input"
						type="checkbox"
						onChange={() =>
							setFields({ ...fields, amenities: { ...fields.amenities, Wifi: !fields.amenities.Wifi } })}
					/>
					<Form.Field
						label="Patio"
						control="input"
						type="checkbox"
						onChange={() =>
							setFields({
								...fields,
								amenities: { ...fields.amenities, Patio: !fields.amenities.Patio }
							})}
					/>
					<Form.Field
						label="Balcon"
						control="input"
						type="checkbox"
						onChange={() =>
							setFields({
								...fields,
								amenities: { ...fields.amenities, Balcon: !fields.amenities.Balcon }
							})}
					/>
					<Form.Field
						label="Ascensor"
						control="input"
						type="checkbox"
						onChange={() =>
							setFields({
								...fields,
								amenities: { ...fields.amenities, Ascensor: !fields.amenities.Ascensor }
							})}
					/>
				</Form.Group>

				<Form.Group widths="equal">
					<Form.Select
						name="select"
						label="Tipo de contrato"
						options={options}
						placeholder="Seleccione tipo de contrato..."
						onChange={(e, { name, value }) =>
							setFields({ ...fields, usuario: { ...fields.usuario, descripcion: value } })}
					/>
					<Form.Input
						type="number"
						fluid
						label="Precio"
						placeholder="Precio"
						onChange={(event) => setFields({ ...fields, precio: event.target.value })}
					/>
				</Form.Group>

				<Form.Field>
					<input type="file" multiple onChange={(e) => setFields({ ...fields, images: e.target.files })} />
				</Form.Field>

				<Button type="submit" onClick={onSubmitProperty}>
					Publicar
				</Button>
			</Form>
		</div>
	);
};

export default FormProperty;
