// Los operadores nos van a permitir realizar operaciones al utilizar valores y variables
// Tenemos distintos tipos de operadores

// (+) suma
let suma = 5 + 9;

// (-) resta
let resta = 9 - 8;

// (*) multiplicación
let multiplicacion = 5 * 2;

// (/) división
let division = 10 / 2;

// (%) módulo o residuo de la división
let modulo = 9 / 2; // 1

// (**) potencia o exponente
let potencia = 2 ** 3;  // Este operador se encuentra a partir de la versión de ECMAScript 2016
// Si la versión es inferior tendremos que usar Math.pow(numero, exponente)

let a, b, c, d
a = 8;
b = 6;

// (++variable) pre-incremento
let preincremento = ++a;    // Incrementa en 1 el valor de la variable en esta misma expresión

// (--variable) pre-decremento
let predecremento = --b;    // Decrementa en 1 el valor de la variable en esta misma expresión

// Con el post-incremento y post-decremento primero se utiliza la variable
// Y posteriormente la proxima vez que usemos esta variable, se realizará el incremento o decremento según el caso

// (variable++) post-incremento
c = a++ * b // La variable 'a' en esta línea sigue con el valor de 9, cuando se vuelva a usar se incrementará su valor

// (variable--) post-decremento
d = a / b-- // La variable b en esta línea conserva el valor de 5 y la variable a tendrá el valor de 10 por su incremento pendiente
