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
    let expReg: RegExp = new RegExp("lo_q_sea");
    let mensaje = document.createElement("span");
    if (document.getElementById("email") != null) {
        let email: HTMLInputElement = document.getElementById("email") as HTMLInputElement;        
        if(expReg.test(email.value)){
            mensaje.textContent = "Email correcto"
        }else{
            mensaje.textContent = "Email incorrecto"
        }
    }
}