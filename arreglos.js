// Arreglos
// Un arreglo nos va a permitir almacenar multiples valores en una sola variable (los arreglos son objetos)
// Su sintaxis es la siguiente
// El identificador normalmente será escrito en plural ya que un arreglo contiene varios elementos
let misDatos = [];  // En memoria se crea un arreglo vacío
// Para agregar un elemento al arreglo se especifica el nombre del arreglo y entre corchetes el indice del arreglo a modificar/inicializar
misDatos[0] = 'Elemento 1 en el indice 0';
misDatos[2] = 9;    // Se puede almacenar cualquier tipo de dato, si no lo especificamos el valor inicial será undefined
// La cantidad de elementos que vayamos a definir para nuestro arreglo depende de la cantidad de elementos que agreguemos
// El arreglo irá reservando espacio de memoria de manera dinamica y contigua
// Por lo que si hay un elemento en el indice 0 y otro en el indice 7, si no se especifican los valores entre estos indices, los valores serán undefined
// No importa que en los demás indices no se haya especificado un valor, estos tomarán por default el valor de undefined  (['Elemento 1 en el indice 0', undfined, 9])
// Los indices para acceder a cada una de las casillas reservadas para un arreglo van a comenzar desde el indice 0
// Si tenemos 5 elementos, los indices irán del 0 (primer elemento) al indice 4 (quinto elemento)
// Para leer un valor especifico basta con acceder a su indice respectivo
console.log(misDatos[0]);   // Elemento 1 en el indice 0
console.log(misDatos[1]);   // undefined

// Sintaxis simplificada
// Dentro de los corchetes vamos a especificar los valores con los que queremos inicializar nuestro arreglo en lugar de inicializarlos uno por uno
let misDatosSintaxisSimplificada = [0, 67, 99, 34];
console.log(misDatosSintaxisSimplificada[0]);   // 0
