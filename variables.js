// La palabra reservada let nos permite declarar variables
// Al nombre de la variable también se le conoce como identificador
// El operador de asignación (=) nos permite asignar un valor a la variable
// El punto y coma ; indica el final de una línea (ponerlo es opcional pero es una práctica común)
let miVariable;  // Se podría inicializar en la misma linea
miVariable = 'Hola Mundo';  // Al valor se le conoce como literal y es de un tipo de dato
// La literal se guardará en una dirección de la memoria RAM con notación hexadecimal (en los frames, que son regiones de memoria)
// Esta dirección va a ser cambiante ya que la RAM es una memoria volatil
// Y cada vez que ejecutemos y terminemos nuestros programas, se crean estas variables pero tambien se destruyen
// Entonces el identificador apunta a esa dirección de memoria con ese valor almacenado

var miOtraVariable = 7; // var es otra palabra reservada que permite declarar variables (no es recomendable y ya no se usa)

// Las variables pueden ser modificadas a cualquier otro valor (siempre que no sean constantes)
// Esto debido al dinamismo de JavaScript, ninguna varible está casada con cierto tipo de dato
miVariable = 9;

// El objeto console con el metodo log nos permite imprimir valores en consola
console.log(miVariable);

// Reglas para definir el identificador de una variable
// 1. Debe comenzar con una letra ya sea mayuscula o minuscula (o con signo de dolar $ o guion bajo _)
// 3. Normalmente la primer letra de cada palabra se escribe en mayuscula exceptuando la primer palabra (a esto se le conoce como camel case)
// 4. No puede comenzar con un numero (posteriormente ya se pueden usar numeros)
// 5. No puede contener espacios
// Ejemplo erroneo: let 1miVariable;

// Además JavaScript es sensible a mayusculas y minusculas
// Por lo que no es lo mismo mivariable y MIVARIABLE (son diferentes variables)

// Esto es un comentario de una sola línea, se define con dos barras diagonales
// Los comentarios sirven para clarificar nuestro codigo o para evitar ejecutar cierta parte de codigo
// Los comentarios son ignorados en la ejecución de nuestro programa

/*
Un comentario multi-linea se define con barra diagonal asterisco
y se cierra con asterisco diagonal
*/

// Los valores van a tener un tipo de dato, los tipos de datos mas comunes en JS son:
// Valores numéricos este tipo de dato nos va a permitir almacenar cualquier tipo de dato numérico
let mivariableNumerica = 7;
// Ya sean flotantes o enteros, todos los datos numéricos serán de tipo number
mivariableNumerica = 7.7;   // A estos valores valores fijos se les conoce como literales

// string este tipo de dato nos permite almacenar cadenas de caracteres en nuestras variables
let miCadena = 'Hola Mundo';    // Para definir una cadena de caracteres se usan comillas dobles, simples o backticks

// boolean nos permite almacenar un valor logico en nuestras variables (true o false)
let miBool = true;

// null es la ausencia de la referencia hacia un objeto (o ausencia de valor pero en ese caso es mejor usar undefined)
let miNull = null;

// undefined significa la ausencia de valor 
// Este es el tipo de dato mas utilizado en JavaScript para indicar ausencia de valor
let miUndefined = undefined;    // Además de ser un valor también es un tipo de dato

// El operador typeof nos sirve para saber o 'preguntar' de que tipo de dato es una variable
console.log(typeof miUndefined);    // undefined

// El concepto de hoisting significa que podemos primero utilizar una variable y después de usarla podemos declararla
// Ya que cuando trabajamos con variables, una parte es declarar la variable y por otro lado es utilizarla
var ejemploDeclaracion;
ejemploDeclaracion = 'Some';
// Normalmente antes de usar una variable se tiene que declarar

// Hoisting lo que significa es que las declaraciones de una variable pueden estar en cualquier parte del programa
// Y todas las declaraciones de las variables al momento en que se ejecuta nuestro programa
// Se suben todas las declaraciones, se ponen al inicio de nuestro programa y por ello podemos trabajar con variables antes de haberlas declarado
ejemploHoisting = 'Some';
var ejemploHoisting;
// No se recomienda usar var por este mismo concepto ya que es confuso
// Y no es recomendable que la declaración de una variable pueda estar en cualquier parte del programa
let ejemploLet = 9;
// Si utilizamos let, esta variable ya no se puede volver a definir (let ejemploLet = 'Nueva definición da error')
// Al usar let no aplica el concepto de hoisting (daría error)
// Otra forma de restringir esto es agregando 'use strict' y con esto aplicamos el modo estricto en JavaScript (desactivamos el hoisting)


// Una constante es una variable, pero, una vez que hemos definido su valor ya no pdemos modificarlo
// Usamos la palabra reservada const en lugar de 'let' o 'var'
// Desde el momento en el que definimos una constante tenemos que inicializarla
const SEGUNDOS_POR_MINUTO = 60;
// Como buena practica nombre el nombre de una constante se define en mayúsculas
// Y si tiene más de una palabra, entonces cada palabra sesepara utilizando guión bajo (snake case)

// Podemos acceder a constantes ya definidas en el lenguaje de JavaScript
// Por ejemplo la constante PI que está almacenada en la clase Math
const PI = Math.PI;
// Tenemos la clase Math y posteriormente por medio del operador punto accedemos a los atributos o metodos de esta clase
