let jugador = null;
let edad = null;
let tiradas;
let tiempoInicio = new Date();
let carasDado = null;
let total = 0;
let max = 0;
let min = Infinity;

const MAX_TIRADAS = 3;

function menuOption(opcion) {
    console.log(`Opción seleccionada: ${opcion}`);
    switch(opcion.toUpperCase()) {
        case 'A':
                iniciarJuego();
            break;
        case 'B':
            if (validarJuego()) {
                lanzarDados();
            } else {
                console.log("Debes iniciar el juego primero.");
            }
            break;
        case 'C':
            if (validarJuego()) {
                mostrarEstadisticas();
            } else {
                console,error("Debes iniciar el juego primero.");
            }
            break;
        case 'D':
            salirJuego();
            break;
        default:
            console.log("La letra no es posible");
            break;
}

}
function validarJuego(){
    return jugador && edad;
}

function iniciarJuego() {
    jugador = prompt("Introduce tu nombre:");
    edad = Number(prompt("Introduce tu edad:"));
    carasDado = prompt("Introduce el numero de caras de tu dado.")
    tiempoInicio = new Date();
    console.log(`Juego iniciado por: ${jugador}, Edad: ${edad}`);
    document.getElementById('output').innerText = `Bienvenido ${jugador}, ¡a jugar!`;
}

function lanzarDados() {
    let extraTiradas = 0;
    let turno = 0;
    
    do{
        var dado1 = Number(Math.floor(Math.random() * carasDado) + 1);
        var dado2 = Number(Math.floor(Math.random() * carasDado) + 1);

        turno += (dado1 + dado2);
        extraTiradas++;
        total += (dado1 + dado2);
        
    }while(dado1 == dado2 && extraTiradas <= MAX_TIRADAS)
        
        if (extraTiradas > MAX_TIRADAS) {

            turno = 0;
            document.getElementById('output').innerHTML = `Te has pasado del numero total de dados iguales. Resultado: ` + total;
        }

    document.getElementById('output').innerText = `Resultado de la tirada: ` + total + "puntos";
       
    if (turno > max){
        max = turno;
    }

    if(turno < min){
        min = turno;
    }

}


function mostrarEstadisticas() {
    var media = (total / tiradas).toFixed(2);
    var maximo = Math.max(...tiradas);
    var minimo = Math.min(...tiradas);

    var stats = `
    Número de tiradas: ${tiradas}
    Media de puntos: ${media}
    Máximo: ${maximo}
    Mínimo: ${minimo}
    `;

    console.log(stats);
    document.getElementById('output').innerText = stats;
}

function salirJuego() {
    var tiempoFin = new Date();
    var segundosJugados = tiempoFin - tiempoInicio;
    console.log(`Fin del juego. Has estado jugando ${segundosJugados} segundos`);
    document.getElementById('output').innerText = `Fin del juego. Has estado jugando ${segundosJugados} segundos`;
}