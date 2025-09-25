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