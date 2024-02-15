
// * Son las 3 formas de crear variables en javascript
let a = 10; // ? Forma recomendada

var b = 10; //! No utilizar actualmente

const c = 10; // ? No se le puede reasignar nuevamente el valor
// c = 20; // ! Esto no se puede hacer

d = 30; // ! Esto es mala practica siempre se debe inicializar la variable con (let/const)

let num1 = 10;
let num2 = 10;
let num3 = 10;
let num4 = 10;
let total = num1 + num2;

console.log(total);

// TODO: shortcut para declarar varias variables
let num5 = 15, num6 = 15, num7 = 20, num8 = 29; // ? Aunque es un poco dificil de leer 
let num9 = 15,
    num10 = 15,
    num11 = 20,
    num12 = 29; // ? Javascript ignora espacios, entres y tabulaciones
console.log(num5 + num8)
