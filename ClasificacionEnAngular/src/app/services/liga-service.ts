import { Equipo } from "../model/equipo";
import { Partido } from "../model/partido";


export class LigaService {
  private equipos: Equipo[] = [];
  
  agregarEquipo(equipo: Equipo): void {
    this.equipos.push(equipo);
  }

  obtenerEquipos(): Equipo[] {
    return this.equipos;
  }

  private actualizarClasificacion(partido: Partido): void {
    if (partido.golesLocal == null || partido.golesVisitante == null) return;

    const local = partido.equipoLocal;
    const visitante = partido.equipoVisitante;

    local.partidosJugados++;
    visitante.partidosJugados++;

    local.golesAFavor += partido.golesLocal;
    local.golesEnContra += partido.golesVisitante;

    visitante.golesAFavor += partido.golesVisitante;
    visitante.golesEnContra += partido.golesLocal;

    if (partido.golesLocal > partido.golesVisitante) {
      local.partidosGanados++;
      visitante.partidosPerdidos++;
      local.puntos += 3;
    } else if (partido.golesLocal < partido.golesVisitante) {
      visitante.partidosGanados++;
      local.partidosPerdidos++;
      visitante.puntos += 3;
    } else {
      local.partidosEmpatados++;
      visitante.partidosEmpatados++;
      local.puntos += 1;
      visitante.puntos += 1;
    }
  }
}
