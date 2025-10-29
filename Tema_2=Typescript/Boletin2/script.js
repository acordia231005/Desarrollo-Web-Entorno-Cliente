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
    var color;
    /*
    id cada vez de un cambio se coge el color para definir
    recoger por variable el color
    para establezerlo en un body.style.color
    
    
    */
}
