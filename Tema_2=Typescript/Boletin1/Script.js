// Para iniciarlo . Dsp de ir a la carpeta de 
// antes del Typescript ejecutar este comando
// tsc .\Script.ts 
// Boletin 1
// Ejercicio 1
function ej1() {
    var hora = new Date;
    console.log("Hola, hoy es " + hora.getDate() + "/" + (hora.getMonth() + 1) + "/" + hora.getFullYear());
    console.log("Son las " + hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds());
    console.log("Hora Posterior " + (hora.getHours() + 1) + ":" + hora.getMinutes() + ":" + hora.getSeconds());
    console.log("Hora Anterior " + (hora.getHours() - 1) + ":" + hora.getMinutes() + ":" + hora.getSeconds());
}
// Ejercicio 2
function ej2() {
    var regExp = new RegExp("[^\s@]+@+[^\s@]+\.+[^\s@]+$"); // Con fallos ( hay que solucionar)
    // Rescatamos las partes ( nodos ) necesarios.
    var parrafoOk = document.getElementById("ok"); //Escritura
    var parrafoError = document.getElementById("error"); //Escritura
    //Aplico la validacion ( $inputValue me da el valor del "email") 
    // y miro con el $writeNode si es valido o no ( rudimentario )
    if (regExp.test($inputValue("email"))) {
        $writeNode("ok", "Email valido");
        $writeNode("error", "");
    }
    else {
        $writeNode("ok", "");
        $writeNode("error", "Email no valido");
    }
}
// Ejercicio 3
function ej3() {
    var ventana = window.open("https:www.google.es", "nuevaventana");
    ventana === null || ventana === void 0 ? void 0 : ventana.document.write("hola");
}
// Ejercicio 4
function ej4() {
    var regexp = new RegExp("^https:\/\/");
    var url = $inputValue("url");
    if (regexp.test(url)) {
        window.location.href = url;
    }
    else {
        $writeNode("error2", " una url valida");
        setTimeout(function () { return $writeNode("error2", ""); }, 5000);
    }
}
// Helpers ( comunes para todo el boletin.SIEMPRE EMPIEZAN POR DOLAR) 
// (AQUI PILLAN EL VALOR DEL INPUT Y EL WRITE NODE ESCRIBE EL MENSAJE )
function $inputValue(id) {
    var input = document.getElementById(id); // Lectura
    var result = "";
    if (input) {
        result = input.value; // Aqui leo el valor
    }
    return result;
}
function $writeNode(id, msg) {
    var nodo = document.getElementById(id); //Escritura
    if (nodo) {
        nodo.textContent = msg;
    }
}
