export default function getFiltrosPropiedades() {
	return {
		habitaciones: 1,
		contrato: null,
		wifi: null,
		ascensor: null,
		cochera: null,
		asador: null,
		patio: null,
		allAmenities: null
	};
}

export const filterPropiedades = ( ownship, filters ) => {
	let data = [];
	data = ownship.filter( p => {
	  let flag = true;
	  if ( filters.una_hab || filters.dos_hab || filters.tres_hab  ){ 
		if ( p.habitaciones !== filters.una_hab && p.habitaciones !== filters.dos_hab && p.habitaciones !== filters.tres_hab ){ flag = false }
	  }
	  if (filters.contrato){ 
		if ( p.usuario.descripcion !== filters.contrato ){ flag = false }
	  }
	  if (filters.asador){
		if ( p.amenities[0].valor !== filters.asador ){ flag = false }
	  }
	  if (filters.cochera){
		if ( p.amenities[1].valor !== filters.cochera ){ flag = false }
	  }
	  if (filters.wifi){
		if ( p.amenities[2].valor !== filters.wifi ){ flag = false }
	  }
	  if (filters.patio){
		if ( p.amenities[3].valor !== filters.patio ){ flag = false }
	  }
	  if (filters.balcon){
		if ( p.amenities[4].valor !== filters.balcon ){ flag = false }
	  }
	  if (filters.ascensor){
		if ( p.amenities[5].valor !== filters.ascensor ){ flag = false }
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
