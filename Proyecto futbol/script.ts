let equipo = [
  { nombre: "Real Madrid CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Barcelona CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Villareal CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Atletico Madrid", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Real Betis", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "RCD Espanyol", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Athletic Bilbao", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Getafe CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Sevilla FC", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Alavés", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Elche CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Rayo Vallecano", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Celta de Vigo", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Real Sociedad", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "R.C.D. Mallorca", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Osasuna CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Valencia CF", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Girona FC", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
  { nombre: "Levante UD", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0  },
  { nombre: "Real Oviedo", puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0 },
];

function ordenarEquipos() {
  

}

function RegistrarDatos(){

}



function mostrarEquipos() {
  let equipos = Object.values(equipo);
  let row: HTMLTableRowElement = document.getElementById("tablaEquipos") as HTMLTableRowElement;
  row.innerHTML = "";

  for (let i = 0; i < equipos.length; i++) {
    let e = equipos[i];
    e.diferenciaGoles = e.golesFavor - e.golesContra;

    let fila = "<tr>" +
      "<td>" + (i + 1) + "</td>" +
      "<td>" + e.nombre + "</td>" +
      "<td>" + e.puntos + "</td>" +
      "<td>" + e.jugados + "</td>" +
      "<td>" + e.ganados + "</td>" +
      "<td>" + e.empatados + "</td>" +
      "<td>" + e.perdidos + "</td>" +
      "<td>" + e.golesFavor + "</td>" +
      "<td>" + e.golesContra + "</td>" +
      "<td>" + e.diferenciaGoles + "</td>" +
    "</tr>";

    row.innerHTML += fila;
  }
}