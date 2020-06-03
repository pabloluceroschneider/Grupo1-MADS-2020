const sum = require('./sum/sum');
import propiedades from '../__mock__/propiedades';
import { filterPropiedades } from '../__mock__/filterpropiedades';
// import { filterPropiedades } from "../components/Filter";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('propiedades con una habitacion', () =>{
  var prop = filterPropiedades(propiedades, {
    "una_hab": 1,
    "dos_hab": null,
    "tres_hab": null,
    "contrato": null,
    "wifi": null,
    "ascensor": null,
    "cochera": null,
    "asador": null,
    "patio": null,
    "allAmenities": null
  })
  let hab = true;
  prop.map( h => {
    if (h.habitaciones !== 1){
      hab = false
    };
  })
  expect(hab).toBeTruthy();
});
