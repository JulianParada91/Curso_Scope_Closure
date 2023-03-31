// Variables

var a; // Declarando mi variable
var b = 'b'; // Declaramos y asignamos a mi variable
b = 'bb'; // Reasignando el valor de mi variable
var a = 'aa'; // Redeclaramos mi variable


// Global Scope

var fruit = 'Apple'; // Variable Global

function bestFruit () {
  console.log(fruit);
}

bestFruit();


function conuntries () {
  country = 'Colombia'; // Se convierte en mi variable global
  console.log(country);
}

conuntries();
console.log(country);
