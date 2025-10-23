// Para iniciarlo . Dsp de ir a la carpeta de 
// antes del Typescript ejecutar este comando
// tsc .\Script.ts 

// Boletin 1
// Ejercicio 1
function ej1() {
    let hora : Date = new Date;

    console.log("Hola, hoy es " + hora.getDate() + "/" + (hora.getMonth() + 1)+ "/" + hora.getFullYear());
    console.log("Son las " + hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds())
    console.log("Hora Posterior " + (hora.getHours() +1)+ ":" + hora.getMinutes() + ":" + hora.getSeconds())
    console.log("Hora Anterior " + (hora.getHours() - 1)+ ":" + hora.getMinutes() + ":" + hora.getSeconds())
}

// Ejercicio 2
function ej2() {
    const regExp = new RegExp("[^\s@]+@+[^\s@]+\.+[^\s@]+$"); // Con fallos ( hay que solucionar)

    // Rescatamos las partes ( nodos ) necesarios.
    const parrafoOk = document.getElementById("ok") as HTMLElement; //Escritura
    const parrafoError = document.getElementById("error") as HTMLElement; //Escritura


    //Aplico la validacion ( $inputValue me da el valor del "email") 
    // y miro con el $writeNode si es valido o no ( rudimentario )

    if(regExp.test($inputValue("email"))){
       $writeNode("ok", "Email valido");
       $writeNode("error", "");
    }else{
        $writeNode("ok", "");
        $writeNode("error", "Email no valido");
    }
}

// Ejercicio 3
function ej3(){
    let ventana = window.open("https:www.google.es", "nuevaventana");
    ventana?.document.write("hola");
}

// Ejercicio 4 y 5
function ej4y5() : void{
    const regexp = new RegExp("^https:\/\/");
    const url = $inputValue("url");
    if (regexp.test(url)) {
        window.location.href = url;
    }else{
        $writeNode("error2", " una url valida");
        setTimeout(() => $writeNode("error2", ""), 5000);
    }
}

// Ejercicio 6
function mostrarSaludo(): void{
    const mensaje = document.getElementById("saludo") as HTMLElement;
    mensaje.innerHTML = "Hola a todos.";
}
setTimeout(() => mostrarSaludo(), 5000);

// Ejercicio 7
function ej7(){
    const nombre = navigator.appName;
    const version = navigator.appVersion;
//    const conexion = navigator.connection;  // funciona pero se queda como error tachado par q no cause error
    const plataforma = navigator.platform;

    console.log(nombre);
    console.log(version);
//  console.log(conexion);  
    console.log(plataforma);
}

// Ejercicio 8
function ej8(){
    
}

// Helpers ( comunes para todo el boletin.SIEMPRE EMPIEZAN POR DOLAR) 
// (AQUI PILLAN EL VALOR DEL INPUT Y EL WRITE NODE ESCRIBE EL MENSAJE )

function $inputValue(id: string) : string{
    
    const input = document.getElementById(id) as HTMLInputElement; // Lectura
    let result = "";
    
    if(input){
        result = input.value; // Aqui leo el valor
    }
    return result;
}

function $writeNode(id: string, msg: string) : void{
  
    const nodo = document.getElementById(id) as HTMLElement; //Escritura
    if(nodo){
        nodo.textContent = msg
    }
}