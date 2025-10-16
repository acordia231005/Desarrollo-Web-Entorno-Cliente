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
    var expReg = new RegExp("lo_q_sea");
    var mensaje = document.createElement("span");
    if (document.getElementById("email") != null) {
        var email = document.getElementById("email");
        if (expReg.test(email.value)) {
            mensaje.textContent = "Email correcto";
        }
        else {
            mensaje.textContent = "Email incorrecto";
        }
    }
}
