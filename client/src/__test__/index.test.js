const sum = require('./sum/sum');
const propiedades = require('../__mock__/propiedades');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('propiedades con una habitacion', () =>{
  var prop = propiedades.find( p => p.habitaciones === 1);
  var hab = prop.habitaciones;
  expect(hab).toBe(1);
});