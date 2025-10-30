function cambiar_titulo() {
    var titulo = prompt("Introduce un nuevo titulo: ");
    var nodoTitulo = document.getElementById("titulo");
    nodoTitulo.textContent = titulo;
}
function cambiar_fondo() {
    var body = document.body;
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
    var input = document.getElementById("edad");
    var edad = Number(input.value);
    console.log(edad);
    var lista = document.getElementById("resultado");
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
    //  a. 
    var mayorMenor = document.createElement("li");
    mayorMenor.textContent = edad > 18 ? "Eres mayor" : "Eres menor";
    //  b.
    var parImpar = document.createElement("li");
    parImpar.textContent = edad % 2 == 0 ? "La edad es par" : "La edad es impar";
    //  c. Divisores
    var divisores = "";
    for (var i = 1; i < edad; i++) {
        if (edad % i == 0) {
            divisores += i + ", ";
        }
    }
    var listaDivisores = document.createElement("li");
    listaDivisores.textContent = divisores;
    //  d.
    var rangoEdad = "";
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
    var edadTexto = document.createElement("li");
    edadTexto.textContent = rangoEdad;
    lista.appendChild(mayorMenor);
    lista.appendChild(parImpar);
    lista.appendChild(listaDivisores);
}
// Ejercicio 4
function ej4() {
    //Preguntar nombre y mostralo por pantalla
    var nombre = prompt("Dime tu nombre: ");
    var parrafo = document.getElementById("saludo");
    parrafo.textContent = ("Hola, " + nombre + "!");
    //Cambiar color
    var color = document.getElementById("colores");
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
    var opcion = prompt("Selecciona una opción (a, b, c, d o e):");
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
            console.log("Tama\u00F1o de pantalla: ".concat(screen.width, " x ").concat(screen.height, " p\u00EDxeles"));
            break;
        default:
            console.log("Opción no válida. Intenta de nuevo.");
    }
}
// Ejercicio 6
var url = document.getElementById("url");
