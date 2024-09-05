//ejercicio de lógica 1

const prompt = require('prompt-sync')({sigint: true});

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let num3 = parseInt(prompt("Ingrese el tercer número: "));

if (num1 === num2 && num2 === num3) {
    console.log("Todos los números son iguales: " + num1, num2, num3);
} else {
    // identificar numeros
    let max, mid, min;

    if (num1 >= num2 && num1 >= num3) {
        max = num1;
        if (num2 >= num3) {
            mid = num2;
            min = num3;
        } else {
            mid = num3;
            min = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        max = num2;
        if (num1 >= num3) {
            mid = num1;
            min = num3;
        } else {
            mid = num3;
            min = num1;
        }
    } else {
        max = num3;
        if (num1 >= num2) {
            mid = num1;
            min = num2;
        } else {
            mid = num2;
            min = num1;
        }
    }

    console.log(max, mid, min);
    console.log(min, mid, max);
}







































/*//para usar prompt como entradas del usuario
const prompt = require('prompt-sync')({
  sigint: true,
});

//variables para imprimir


//Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.

let numeros = [];

for (let index = 0; index < 3; index++) {
  numeros.push(parseInt(prompt('Ingrese un número mayo a 0 y menor a 101: ')));
}

let max = numeros[0];
let min = numeros[0];
let mid;

for (let index = 0; index < numeros.length; index++) {
  let element = numeros[index];

  if (element > max && element > min) {
    max = element;
  } 
  
  if (element < min && element < max) {
    element = min;
  } 
  
  if (element < max && element > min) { 
    mid = element;
  }
  console.log(max);
  console.log(mid);
  console.log(min);
  
  
}


console.log(max, mid, min);
console.log(min, mid, max);
*/
