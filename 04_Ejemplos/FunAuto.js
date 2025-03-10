// Funciones Autoejecutables

// // Sintaxis
// (funcion(){ }) ();
// (function () { procedimiento })();

// // Ejemplo
// (function () {
//     // Procedimiento de la funcion
//     console.log("Esta función se ejecuta inmediatamente!");
// })();

// // Sumar dos números
// (function () {
//     var a = 10;
//     var b = 20;
//     var resultado = a + b;
//     console.log("La suma de " + a + " + " + b + " = " + resultado);
// })();

// // Restar dos números con paso de parametros
// (function (a, b) {
//     var resultado = a - b;
//     console.log("La resta de " + a + " - " + b + " = " + resultado);
// })(50, 30);

// // Multiplicar dos números con paso de parametros y retorno de valor
// const multiplicar = (function (a, b) {
//     return a * b;
// })(10, 5);
// console.log("La multiplicación es: " + multiplicar);