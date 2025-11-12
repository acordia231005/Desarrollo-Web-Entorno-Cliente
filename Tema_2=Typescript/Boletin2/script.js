"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cambiar_titulo() {
    let titulo = prompt("Introduce un nuevo titulo: ");
    let nodoTitulo = document.getElementById("titulo");
    nodoTitulo.textContent = titulo;
}
function cambiar_fondo() {
    let body = document.body;
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}
function analiza_edad() {
    let input = document.getElementById("edad");
    let edad = Number(input.value);
    console.log(edad);
    let lista = document.getElementById("resultado");
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
    //  a. 
    let mayorMenor = document.createElement("li");
    mayorMenor.textContent = edad > 18 ? "Eres mayor" : "Eres menor";
    //  b.
    let parImpar = document.createElement("li");
    parImpar.textContent = edad % 2 == 0 ? "La edad es par" : "La edad es impar";
    //  c. Divisores
    let divisores = "";
    for (let i = 1; i < edad; i++) {
        if (edad % i == 0) {
            divisores += i + ", ";
        }
    }
    let listaDivisores = document.createElement("li");
    listaDivisores.textContent = divisores;
    //  d.
    let rangoEdad = "";
    switch (true) {
        case edad <= 15 && edad > 0:
            rangoEdad = "Niño";
            break;
        case edad <= 30 && edad > 15:
            rangoEdad = "Joven";
            break;
        case edad <= 60 && edad > 30:
            rangoEdad = "Adulto";
            break;
        case edad > 60:
            rangoEdad = "Mayor";
            break;
        default:
            console.error("Edad no valida");
            break;
    }
    let edadTexto = document.createElement("li");
    edadTexto.textContent = rangoEdad;
    lista.appendChild(mayorMenor);
    lista.appendChild(parImpar);
    lista.appendChild(listaDivisores);
}
// Ejercicio 4
function ej4() {
    //Preguntar nombre y mostralo por pantalla
    let nombre = prompt("Dime tu nombre: ");
    let parrafo = document.getElementById("saludo");
    parrafo.textContent = ("Hola, " + nombre + "!");
    //Cambiar color
    let color = document.getElementById("colores");
    color.onchange = function () {
        parrafo.style.color = color.value;
    };
}
//Ejercicio 5
function mostrarMenu() {
    console.log("MENÚ DE INFORMACIÓN DEL NAVEGADOR");
    console.log("a. Idioma del navegador");
    console.log("b. Nombre del navegador");
    console.log("c. ¿Cookies habilitadas?");
    console.log("d. Tamaño de la pantalla (ancho x alto)");
    const opcion = prompt("Selecciona una opción (a, b, c, d o e):");
    switch (opcion.toLowerCase()) {
        case "a":
            console.log("Idioma del navegador:", navigator.language);
            break;
        case "b":
            console.log("Nombre del navegador:", navigator.userAgent);
            break;
        case "c":
            console.log("Cookies habilitadas:", navigator.cookieEnabled ? "Sí" : "No");
            break;
        case "d":
            console.log(`Tamaño de pantalla: ${screen.width} x ${screen.height} píxeles`);
            break;
        default:
            console.log("Opción no válida. Intenta de nuevo.");
    }
}
// Ejercicio 6
let url = document.getElementById("url");
//# sourceMappingURL=script.js.map