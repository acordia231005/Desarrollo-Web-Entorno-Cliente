function cambiar_titulo(){
    let titulo: string = prompt("Introduce un nuevo titulo: ") as string;
    let nodoTitulo: HTMLHeadingElement = document.getElementById("titulo") as HTMLHeadingElement;
    nodoTitulo.textContent = titulo;
}

function cambiar_fondo(){
    let body: HTMLBodyElement = document.body as HTMLBodyElement;
        if(body.style.backgroundColor == "white"){
            body.style.backgroundColor = "black";
            body.style.color = "white";
        }else{
            body.style.backgroundColor = "white";
            body.style.color = "black";
        }
}

function analiza_edad(){
    let input : HTMLInputElement = document.getElementById("edad") as HTMLInputElement;
    let edad : number = Number(input.value);
    console.log(edad);
    
    let lista: HTMLOListElement = document.getElementById("resultado") as HTMLOListElement;
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
//  a. 
    let mayorMenor: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    mayorMenor.textContent = edad > 18? "Eres mayor" : "Eres menor";
//  b.
    let parImpar: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    parImpar.textContent = edad % 2 == 0 ? "La edad es par" : "La edad es impar";
    
//  c. Divisores
    let divisores: string = "";
    for (let i = 1; i < edad; i++) {
        if(edad % i == 0){
        divisores+= i + ", ";
        }
    }
    let listaDivisores: HTMLLIElement = document.createElement("li") as HTMLLIElement 
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

    let edadTexto: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    edadTexto.textContent = rangoEdad;

    lista.appendChild(mayorMenor);
    lista.appendChild(parImpar);
    lista.appendChild(listaDivisores);
}

// Ejercicio 4
function ej4(){
//Preguntar nombre y mostralo por pantalla
    let nombre = prompt("Dime tu nombre: ");
    let parrafo = document.getElementById("saludo") as HTMLParagraphElement;
    parrafo.textContent = ("Hola, " + nombre + "!");
//Cambiar color
    let color = document.getElementById("colores") as HTMLSelectElement;
    color.onchange = function() {
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

  const opcion = prompt("Selecciona una opción (a, b, c, d o e):") as string

  switch (opcion.toLowerCase()) {
    case "a":
      console.log("Idioma del navegador:", navigator.language);
      break;

    case "b":
      console.log("Nombre del navegador:", navigator.userAgent);
      break;

    case "c":
      console.log(
        "Cookies habilitadas:",
        navigator.cookieEnabled ? "Sí" : "No"
      );
      break;

    case "d":
      console.log(
        `Tamaño de pantalla: ${screen.width} x ${screen.height} píxeles`
      );
      break;
    default:
      console.log("Opción no válida. Intenta de nuevo.");
  }
}

// Ejercicio 6
let url = document.getElementById("url");
