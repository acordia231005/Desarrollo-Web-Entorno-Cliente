let jugador = null;
let edad = null;
let juegoIniciado = false;
let tiradas = [];
let tiempoInicio = null;
let carasDado = null;
const maximas_tiradas = 3;

function menuOption(opcion) {
    console.log(`Opción seleccionada: ${opcion}`);
    switch(opcion.toUpperCase()) {
        case 'A':
            iniciarJuego();
            break;
        case 'B':
            if (juegoIniciado = false) {
                mostrarError("Debes iniciar el juego primero.");
            } else {
                lanzarDados();
            }
            break;
        case 'C':
            if (juegoIniciado = false) {
                mostrarError("Debes iniciar el juego primero.");
            } else {
                mostrarEstadisticas();
            }
            break;
        case 'D':
            salirJuego();
            break;
        default:
            mostrarError("Opción no válida.");
    }
}

function iniciarJuego() {
    jugador = prompt("Introduce tu nombre:");
    edad = prompt("Introduce tu edad:");
    carasDado = prompt("Introduce el numero de caras de tu dado.")
    juegoIniciado = true;
    tiempoInicio = new Date();
    console.log(`Juego iniciado por: ${jugador}, Edad: ${edad}`);
    document.getElementById('output').innerText = `Bienvenido ${jugador}, ¡a jugar!`;
}

function lanzarDados() {
    let total = 0;
    let extraTiradas = 0;
    if(jugador !== null && edad !== null){
    
        const dado1 = Math.floor(Math.random() * carasDado) + 1;
        const dado2 = Math.floor(Math.random() * carasDado) + 1;
        var suma1 = dado1 + dado2;
        var sumaTotal = 0;
        tiradas.push(suma1);
        console.log(`El jugador ${jugador} ha obtenido ${suma1} puntos en esta tirada (Dados: ${dado1} y ${dado2})`);
        total += suma1;
        if(dado1 === dado2) {
            extraTiradas++;
            if(extraTiradas > maximas_tiradas) {
                const dado3 = Math.floor(Math.random() * carasDado) + 1;
                const dado4 = Math.floor(Math.random() * carasDado) + 1;
                var suma2 = dado3 + dado4;
                sumaTotal= suma1 + suma2
                total = sumaTotal;
                console.log(`¡Dobles! Tu puntuacion es: ${total} (Tirada extra número ${extraTiradas})`);
                document.getElementById('output').innerText = `Resultado del turno: ${total} puntos`;
                console.log(`Se han excedido las tiradas extra. Puntuación del turno: 0`);
            } else {
                document.getElementById('output').innerText = `Resultado del turno: ${total} puntos`;
            }
        } else {
            document.getElementById('output').innerText = `Resultado del turno: ${total} puntos`;
            console.log(`No hubo suerte tener una tirada extra`);
        }
  }
}

function mostrarEstadisticas() {
    if(tiradas.length === 0) {
        alert("No se han realizado tiradas aún.");
        return;
    }

    const numTiradas = tiradas.length;
    const sumaTotal = tiradas.reduce((a,b) => a + b, 0);
    const media = (sumaTotal / numTiradas).toFixed(2);
    const maximo = Math.max(...tiradas);
    const minimo = Math.min(...tiradas);

    const stats = `
    Número de tiradas: ${numTiradas}
    Media de puntos: ${media}
    Máximo: ${maximo}
    Mínimo: ${minimo}
    `;

    console.log(stats);
    document.getElementById('output').innerText = stats;
}

function salirJuego() {
    if(!juegoIniciado) {
        mostrarError("El juego no ha sido iniciado.");
        return;
    }

    const tiempoFin = new Date();
    const minutosJugados = Math.floor((tiempoFin - tiempoInicio) / 60000);
    console.log(`Fin del juego. Has estado jugando ${minutosJugados} minutos`);
    document.getElementById('output').innerText = `Fin del juego. Has estado jugando ${minutosJugados} minutos`;
    juegoIniciado = false;
}

function mostrarError(mensaje) {
    console.error(mensaje);
    alert(mensaje);
}
