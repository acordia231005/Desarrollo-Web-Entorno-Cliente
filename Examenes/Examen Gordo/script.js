var nombreUsuario = prompt("Ingrese su nombre de usuario:");
var contadorRecarga = 0;
var fecha = new Date();
window.onload = function () {
    document.cookie = "Nombre de usuario: " + nombreUsuario;
};
// recarga de la pagina 
function recarga() {
    window.location.reload;
    contadorRecarga++;
    console.log(contadorRecarga);
}
recarga();
var body = document.getElementById("body");
var h1 = document.createElement("h1");
var bienvenida = "Bienvenido al dashboard de " + nombreUsuario;
h1.innerHTML = "<h1>" + bienvenida + "</h1>";
h1.appendChild(body);
// crear tarjetas
function crear_tarjeta() {
    var select = document.getElementById("tipo");
    switch (select.value) {
        case "incidencia":
            tarjeta_incidencia();
            break;
        case "tarea":
            tarjeta_tarea();
            break;
        case "evento":
            tarjeta_evento();
            break;
        default:
            console.error("Tipo escogida no valida");
            break;
    }
    ;
}
// Crear tarjetas de incidencia
function tarjeta_incidencia() {
    var result = document.getElementById("tarjetas");
    var div = document.createElement("div");
    var a = document.createElement("a");
    var direccion = "https://www.issues.com/" + $inputById("id").value;
    a.textContent = direccion;
    div.style.backgroundColor = "light-red";
    div.textContent = "Id: " + $inputById("id").value + "<br>" +
        "Descripcion: " + $inputById("descripcion").value + ";" +
        "Fecha: " + fecha + ";" +
        "Direccion: " + a;
    div.appendChild(result);
}
// Crear tarjetas de tarea
function tarjeta_tarea() {
    var result = document.getElementById("tarjetas");
    var div = document.createElement("div");
    var a = document.createElement("a");
    var direccion = "https://www.issues.com/" + $inputById("id").value;
    a.textContent = direccion;
    div.style.backgroundColor = "light-blue";
    div.textContent = "Id: " + $inputById("id").value + "<br>" +
        "Descripcion: " + $inputById("descripcion").value + ";" +
        "Fecha: " + fecha + ";" +
        "Direccion: " + direccion;
    div.appendChild(result);
}
// Crear tarjetas de evento
function tarjeta_evento() {
    var result = document.getElementById("tarjetas");
    var div = document.createElement("div");
    var a = document.createElement("a");
    var direccion = "https://www.issues.com/" + $inputById("id").value;
    a.textContent = direccion;
    div.style.backgroundColor = "light-green";
    div.textContent = "Id: " + $inputById("id").value + "<br>" +
        "Descripcion: " + $inputById("descripcion").value + ";" +
        "Fecha: " + fecha + ";" +
        "Direccion: " + direccion;
    div.appendChild(result);
}
// Boton eliminar tarjetas
function eliminar() {
    var p = document.getElementById("tarjetas");
    p.remove;
}
// helpers
function $inputById(id) {
    return document.getElementById(id);
}
