// Los operadores nos van a permitir realizar operaciones al utilizar valores y variables
// Tenemos distintos tipos de operadores

// Operadores aritmeticos
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

let a, b, c, d;
a = 8;
b = 6;

// (++variable) pre-incremento
let preincremento = ++a;    // Incrementa en 1 el valor de la variable en esta misma expresión

// (--variable) pre-decremento
let predecremento = --b;    // Decrementa en 1 el valor de la variable en esta misma expresión

// Con el post-incremento y post-decremento primero se utiliza la variable
// Y posteriormente la proxima vez que usemos esta variable, se realizará el incremento o decremento según el caso

// (variable++) post-incremento
c = a++ * b; // La variable 'a' en esta línea sigue con el valor de 9, cuando se vuelva a usar se incrementará su valor

// (variable--) post-decremento
d = a / b--; // La variable b en esta línea conserva el valor de 5 y la variable a tendrá el valor de 10 por su incremento pendiente

// Para asignar valores a nuestras variables usamos el operador de asignación (=)
let age = 19;
// Pero también existen operadores de asignación compuestos
age += 1;   // Esto equivale a age = age + 1
age -= 1;   // Esto equivale a age = age - 1 y así con los demás operadores de asignación compuestos
// El operador de asignación compuesto sí modifica el valor de la variable
// Otros operadores compuestos +=, -=, *=, /=, %=, **=

// Operadores de comparación o relacionales
// (==) operador de igualdad (valor) si es necesario realiza una conversión del tipo de dato para poder comparar los valores
let igualdad = 9 == '9';    // true (ya que el string '9' se convierte a number)
// (===) operador de igualdad exacto o estricto (tipo y valor)
let igualdadExacta = 9 === '9'; // false (ya que un number no es igual a un string)

// (!=) operador de distinto a (valor) (si es necesario realiza una conversión de tipo de dato para poder comparar)
let distinto = 9 != '9'; // false (ya que el string '9' se convierte a number y esto los hace iguales)
// (!+==) operador de distinto exacto a
let distintoExacto = 9 !== '9'; // true (ya que un number es desigual a un string)

// En estos operadores también se realiza una conversión de tipo de dato si es necesario para poder comparar
// (>) operador mayor que
let mayor = 9 > 8;  // true (ya que 9 es mayor que 8)
// (>=) operador mayor o igual que
let mayorIgual = '9' > 9;   // true ya que 9 en string se convierte a entero y no es mayor que 9 pero es igual)
// (<) operador menor que
let menor = 8 < 6;  //  false (ya que 8 no es menor que 6) 
// (<=) operador menor o igual que
let menorIgual = 7 <= 9;    // true (ya que 7 no es igual que 9 pero es menor)

// String interpolation significa que dentro de una misma cadena podemos agregar expresiones
// Para definir una string interpolation se usan backticks
// Y para agregar el valor de alguna variable utilizamos el simbolo de dolar y posteriormente entre llaves la variable u expresión
let nombre = 'Amgel';
console.log(`Hola ${nombre}, cómo estás?`);  //  La variable o expresión se concatenará a la cadena convirtiendose a string
console.lof(`Es 9 mayor a 10? -> ${9 > 10}`);   // Es 9 mayor a 10? -> false

// Operadores lógicos
// (&&) operador and (y), regresa true si ambos operandos son verdaderos, en todo caso contrario regresa false
console.log(false && true);  // false (operador de cortocircuito, ya que si la expresión del lado izquierdo es falsa, ni siquiera se evalúa la otra expresión)
console.log(true && false); // En este caso todavía vale la pena evaluar la expresión del lado derecho (igualmente da false)

// (||) operador or (ó), a este símbolo (||) se le llama pipe, regresa true si uno de los operandos es verdadero
// Solamente en caso de que ambas expresiones sean falsas regresa false
console.log(false || true); // true (si la expresión de la izquierda es falsa, aún hay posibilidades de que la expresión de la derecha sea verdadera por lo tanto sí se evalúa)
console.log(false || false);    // false

// (!) operador de negación not (no), invierte el resultado logico de nuestra expresión
// Es un operador unario (requiere de un valor) a diferencia de && y || que son binarios (requieren de dos valores)
console.log(!true); // false
console.log(!false);    // true

