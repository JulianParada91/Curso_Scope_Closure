var firstName; // Tiene valor undefiend // Declaramos
firstName = 'Holguer'; // Asignamos
console.log(firstName); // Mostramos

var lastName = 'Julián'; // Se declara y asigna a mi variable
lastName = "Ana"; // Se vuelve a asigna o se reasigna
console.log(lastName); // Se muestra el valor de mi variable

var secondName = 'Julián'; // Se declara y asigna a mi variable
var secondName = 'Ana'; // Reasignamos
console.log(secondName); // Mostramos

// Let - Puedo reasignar pero no redeclaran

let fruit = 'Apple'; // Declaramos y asignamos
fruit = 'Kiwi' // Reasignamos
console.log(fruit); // Mostramos

let fruit = 'Banano'; // No podemos redeclarar con let
console.log(fruit);

// Const - No podemos reasignar con const

const animal = 'Dog'; // Declaramos y asignamos
animal = 'Cat'; // Reasignamos
const animal = 'Snake';
console.log(animal); // Mostramos

const vehicles = [];
vehicles.push("🛻");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
