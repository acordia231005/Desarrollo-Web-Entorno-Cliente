function calcula_fibonacci() {
    let num = Number(prompt("Introduce un número "));
    console.log("Fibonacci de " + num + " es: " + fibonacci(num));
}

function fibonacci(num) {
    let resultado = 0 ;
        if (num === 0) { 
            resultado = 0; 
        }else if (num === 1) {
            resultado = 1;
        }else {
            resultado = fibonacci(num - 1) + fibonacci(num - 2);
        }
    return resultado;
    }

function calcula_factorial(isRec) {
    let n = Number(prompt("Introduce un número "));
    let resultado;
    if (isRec) {
        resultado = factorial_recursiva(n);
    } else {
        resultado = factorial_tradicional(n);
    }
    console.log("Factorial de " + n + " es: " + resultado);
}
function factorial_tradicional(n){
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;

    }
    return factorial;
}
function factorial_recursiva(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial_recursiva(n - 1);
    }
}
// ejercicio 2
function calcula_tiempo() {
    let dias = Number(prompt("Introduce una cantidad de días en valor entero: "));
    let horas = dias * 24;
    let minutos = horas * 60;
    let segundos = minutos * 60;
    console.log(dias + " días son " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos.");
}
// ejercicio 3
function calcula_ecuacion_segundo_grado() {
    let a = Number(prompt("Introduce el valor de a: "));
    let b = Number(prompt("Introduce el valor de b: "));
    let c = Number(prompt("Introduce el valor de c: "));
    let discriminante = b * b - 4 * a * c;
    if (discriminante > 0) {
        let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);

        console.log("Las raíces son reales y diferentes: " + Math.trunc(raiz1) + ", " + Math.trunc(raiz2) + ".");
    } else if (discriminante === 0) {
        let raiz = -b / (2 * a);
        console.log("Las raíces son reales e iguales: " + Math.trunc(raiz));
    } else {
        console.log("No tiene solucion real.");
    }
}
// ejercicio 4
function calcular_Letra_DNI(){
const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
let dni = prompt("Introduce tu número de DNI (sin letra):");

dni = parseInt(dni, 10);

    if (!isNaN(dni)) {
    let resto = dni % 23;
    let letra = letras.charAt(resto);

    alert(`Tu DNI completo es: ${dni}${letra}`);
    } else {
    alert("Por favor, introduce un número válido.");
    }
}

function calcula_areas(){
    let opcion;

do {
  opcion = prompt(
    "MENÚ PRINCIPAL\n" +
    "1. Calcular área de un triángulo\n" +
    "2. Calcular área de un rectángulo\n" +
    "3. Calcular área de un círculo\n" +
    "4. Salir\n\n" +
    "Elige una opción (1-4):"
  );

  switch (opcion) {
    case "1":
      // Área de un triángulo
      let baseTri = prompt("Introduce la base del triángulo:");
      let alturaTri = prompt("Introduce la altura del triángulo:");
      if (!isNaN(baseTri) && !isNaN(alturaTri)) {
        let areaTri = (baseTri * alturaTri) / 2;
        alert(`El área del triángulo es: ${areaTri}`);
      } else {
        alert("Valores no válidos. Introduce números.");
      }
      break;

    case "2":
      let baseRec = prompt("Introduce la base del rectángulo:");
      let alturaRec = prompt("Introduce la altura del rectángulo:");
      if (!isNaN(baseRec) && !isNaN(alturaRec)) {
        let areaRec = baseRec * alturaRec;
        alert(`El área del rectángulo es: ${areaRec}`);
      } else {
        alert("Valores no válidos. Introduce números.");
      }
      break;

    case "3":
      let radio = prompt("Introduce el radio del círculo:");
      if (!isNaN(radio)) {
        let areaCirculo = Math.PI * Math.pow(radio, 2);
        alert(`El área del círculo es: ${areaCirculo.toFixed(2)}`);
      } else {
        alert("Valor no válido. Introduce un número.");
      }
      break;

    case "4":
      alert("¡Hasta pronto!");
      break;

    default:
      alert("Opción no válida. Intenta de nuevo.");
  }

    } while (opcion !== "4");
}

function numeroPrimosFor(){
    for (let i = 1; i <= 100; i++) {
        if((i % 7 !== 0) && (i % 3 !== 0) && (i % 2 !== 0)){
        console.log(i);
        }
    }
}

function numeroPrimosWhile(){
    let i = 1;

    while (i <= 100) {
        if (i % 2 !== 0) {             
            if (i % 3 !== 0) {         
                if (i % 7 !== 0) {     
                    console.log(i);     
                }
            }
        }
        i++;
    }
}

function numeroPrimoDoWhile(){

let i = 1;
do {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 7 !== 0) {
        console.log(i);
    }
    i++;
} while (i <= 100);

}