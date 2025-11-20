let equipos = [
    {nombre: "Real Madrid CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Barcelona CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Villareal CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Atletico Madrid", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Real Betis", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "RCD Espanyol", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Athletic Bilbao", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Getafe CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Sevilla FC", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Alavés", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Elche CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Rayo Vallecano", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Celta de Vigo", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Real Sociedad", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "R.C.D. Mallorca", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Osasuna CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Valencia CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Girona FC", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Levante UD", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0},
    {nombre: "Real Oviedo", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0}
];

function actualizarTabla() {
    const tbody = document.querySelector("#tabla-clasificacion tbody")!;
    tbody.innerHTML = "";

    equipos.sort((a, b) => {
        if (b.puntos !== a.puntos) return b.puntos - a.puntos;
        const diffA = a.gf - a.gc;
        const diffB = b.gf - b.gc;
        if (diffB !== diffA) return diffB - diffA;
        return b.gf - a.gf;
    });

    equipos.forEach(e => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${e.nombre}</td>
            <td>${e.puntos}</td>
            <td>${e.jugados}</td>
            <td>${e.ganados}</td>
            <td>${e.empatados}</td>
            <td>${e.perdidos}</td>
            <td>${e.gf}</td>
            <td>${e.gc}</td>
        `;
        tbody.appendChild(row);
    });
}

function llenarSelects() {
    const localSelect = document.getElementById("local") as HTMLSelectElement;
    const visitanteSelect = document.getElementById("visitante") as HTMLSelectElement;

    equipos.forEach(e => {
        const option1 = document.createElement("option");
        option1.value = e.nombre;
        option1.textContent = e.nombre;
        localSelect.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = e.nombre;
        option2.textContent = e.nombre;
        visitanteSelect.appendChild(option2);
    });
}

function registrarPartido(event: Event) {
    event.preventDefault();

    const localSelect = document.getElementById("local") as HTMLSelectElement;
    const visitanteSelect = document.getElementById("visitante") as HTMLSelectElement;
    const golesLocalInput = document.getElementById("golesLocal") as HTMLInputElement;
    const golesVisitanteInput = document.getElementById("golesVisitante") as HTMLInputElement;

    const local = localSelect.value;
    const visitante = visitanteSelect.value;
    const golesLocal = parseInt(golesLocalInput.value);
    const golesVisitante = parseInt(golesVisitanteInput.value);

    if (local === visitante) {
        alert("El equipo local y visitante no pueden ser el mismo.");
        return;
    }

      let equipoLocal: any;
    let equipoVisitante: any;

    for (let i = 0; i < equipos.length; i++) {
        if (equipos[i].nombre === local) equipoLocal = equipos[i];
        if (equipos[i].nombre === visitante) equipoVisitante = equipos[i];
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
    } else if (golesLocal < golesVisitante) {
        equipoVisitante.ganados++;
        equipoLocal.perdidos++;
        equipoVisitante.puntos += 3;
    } else {
        equipoLocal.empatados++;
        equipoVisitante.empatados++;
        equipoLocal.puntos += 1;
        equipoVisitante.puntos += 1;
    }

    actualizarTabla();
}

window.onload = () => {
    llenarSelects();
    actualizarTabla();

    const form = document.getElementById("form-partido") as HTMLFormElement;
    form.onsubmit = registrarPartido;
};