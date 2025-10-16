// Ejercicio 1: Realiza un ejercicio en JavaScript que cuente 
// el número de cifras de un número dado por pantalla.

function nCifras() {
    let numero = prompt("Introduce un número");
    let contador = 0;

    if (isNaN(numero)) {
        console.log("Ese numero no es valido intentalo de nuevo.")
    } else {
        for (let i = 0; i < numero.length; i++) { 
            contador++; 
        }

        console.log("El número tiene " + contador + " cifras.");
    }
}

// Ejercicio 2: Realiza un ejercicio en JavaScript que pinte por pantalla 
// un triángulo equilátero con n puntos de cada lado. Estos N puntos 
// será el tamaño del triángulo y debe ser un elemento indicado por el usuario.

function pintaTriangulos() {
    let n = Number(prompt('Introduce el número de puntos por lado :'));
    let C = " ";

    
        for (let i = 1; i <= n; i++) {
            C += "\n"; 
            C += ' '.repeat(n - 1);
            C += '* '.repeat(2 * i - 1); 
        }
        console.log(C)

}

/* Realiza un programa que muestre un menú con cuatro opciones. El menú debe
mostrarse hasta que se seleccione salir. Se irán almacenando valores y cuando
indiquemos el tipo de operación a realizar el programa en ese momento debe
mostrarnos el resultados y seguir funcionando.
a. Introducir nuevo número
b. Calcular máximo
c. Calcular mínimo
d. Calcular media
e. Salir
*/

function menu() {
    var numeros = [];
    let maximo;
    let minimo;
    let media;
    var suma;
    do{
    var opt = prompt(
        "a. Introducir nuevo número\n" +
        "b. Calcular máximo\n" +
        "c. Calcular mínimo\n" +
        "d. Calcular media\n" +
        "e. Salir" 
    );

    switch (opt.toUpperCase()) {
        case 'A':
            numeros.push(introducirNumero());
            console.log("Has introducido: " + numeros)
            break;
        case 'B': 
            maximo = Math.max(...numeros);
            console.log("El maximo es: " + maximo);
            break;
        case 'C': 
            minimo = Math.min(...numeros);
            console.log("El maximo es: " + minimo);
            break;
        case 'D': 
            for (const numero of numeros) {
                suma += numero; 
            }
            media = (suma/numeros.length);
            console.log("Esta es la media: " + media);
            break;
        case 'E': 
            console.log("Saliste del sistema.");
            break;
        default:
            console.log("Letra no valida")
            break;
    }
}while (opt.toUpperCase() !== 'E');
}

function introducirNumero() {
    do{
    var n = Number(prompt("Introduce numero"));
    if (isNaN(n)) {
        console.error("Debe ser un numero")
    }
    }while(isNaN(n));

    return n;
}