var equipos = [
    { nombre: "Real Madrid CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Barcelona CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Villareal CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Atletico Madrid", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Real Betis", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "RCD Espanyol", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Athletic Bilbao", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Getafe CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Sevilla FC", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Alavés", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Elche CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Rayo Vallecano", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Celta de Vigo", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Real Sociedad", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "R.C.D. Mallorca", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Osasuna CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Valencia CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Girona FC", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Levante UD", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    { nombre: "Real Oviedo", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 }
];
function actualizarTabla() {
    var tbody = document.querySelector("#tabla-clasificacion tbody");
    tbody.innerHTML = "";
    equipos.sort(function (a, b) {
        if (b.puntos !== a.puntos)
            return b.puntos - a.puntos;
        var diffA = a.gf - a.gc;
        var diffB = b.gf - b.gc;
        if (diffB !== diffA)
            return diffB - diffA;
        return b.gf - a.gf;
    });
    equipos.forEach(function (e) {
        var row = document.createElement("tr");
        row.innerHTML = "\n            <td>".concat(e.nombre, "</td>\n            <td>").concat(e.puntos, "</td>\n            <td>").concat(e.jugados, "</td>\n            <td>").concat(e.ganados, "</td>\n            <td>").concat(e.empatados, "</td>\n            <td>").concat(e.perdidos, "</td>\n            <td>").concat(e.gf, "</td>\n            <td>").concat(e.gc, "</td>\n        ");
        tbody.appendChild(row);
    });
}
function llenarSelects() {
    var localSelect = document.getElementById("local");
    var visitanteSelect = document.getElementById("visitante");
    equipos.forEach(function (e) {
        var option1 = document.createElement("option");
        option1.value = e.nombre;
        option1.textContent = e.nombre;
        localSelect.appendChild(option1);
        var option2 = document.createElement("option");
        option2.value = e.nombre;
        option2.textContent = e.nombre;
        visitanteSelect.appendChild(option2);
    });
}
function registrarPartido(event) {
    event.preventDefault();
    var localSelect = document.getElementById("local");
    var visitanteSelect = document.getElementById("visitante");
    var golesLocalInput = document.getElementById("golesLocal");
    var golesVisitanteInput = document.getElementById("golesVisitante");
    var local = localSelect.value;
    var visitante = visitanteSelect.value;
    var golesLocal = parseInt(golesLocalInput.value);
    var golesVisitante = parseInt(golesVisitanteInput.value);
    if (local === visitante) {
        alert("El equipo local y visitante no pueden ser el mismo.");
        return;
    }
    var equipoLocal;
    var equipoVisitante;
    for (var i = 0; i < equipos.length; i++) {
        if (equipos[i].nombre === local)
            equipoLocal = equipos[i];
        if (equipos[i].nombre === visitante)
            equipoVisitante = equipos[i];
    }
    equipoLocal.jugados++;
    equipoVisitante.jugados++;
    equipoLocal.gf += golesLocal;
    equipoLocal.gc += golesVisitante;
    equipoVisitante.gf += golesVisitante;
    equipoVisitante.gc += golesLocal;
    if (golesLocal > golesVisitante) {
        equipoLocal.ganados++;
        equipoVisitante.perdidos++;
        equipoLocal.puntos += 3;
    }
    else if (golesLocal < golesVisitante) {
        equipoVisitante.ganados++;
        equipoLocal.perdidos++;
        equipoVisitante.puntos += 3;
    }
    else {
        equipoLocal.empatados++;
        equipoVisitante.empatados++;
        equipoLocal.puntos += 1;
        equipoVisitante.puntos += 1;
    }
    actualizarTabla();
}
window.onload = function () {
    llenarSelects();
    actualizarTabla();
    var form = document.getElementById("form-partido");
    form.onsubmit = registrarPartido;
};
