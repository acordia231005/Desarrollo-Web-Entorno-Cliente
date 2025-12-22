import { Component, OnInit } from '@angular/core';
import { LigaService } from '../../services/liga-service';
import { Equipo } from '../../model/equipo';
import { Partido } from '../../model/partido';

@Component({
  selector: 'app-registrar-partido',
  imports: [],
  templateUrl: './registrar-partido.html',
  styleUrl: './registrar-partido.css',
})
export class RegistrarPartido implements OnInit{
  equipos: Equipo[] = [];
  idEquipoLocal!: number;
  idEquipoVisitante!: number;
  golesLocal: number = 0;
  golesVisitante: number = 0;
  jornada: number = 1;

  constructor(private ligaService: LigaService) {}

  ngOnInit(): void {
    this.equipos = this.ligaService.obtenerEquipos();
  }

  guardarPartido(): void {
    const local = this.ligaService.obtenerEquipos(this.idEquipoLocal);
    const visitante = this.ligaService.obtenerEquipos(this.idEquipoVisitante);

    if (!local || !visitante || local.id === visitante.id) {
      return;
    }

    const partido = new Partido(
      Date.now(),
      local,
      visitante,
      new Date(),
      this.golesLocal,
      this.golesVisitante,
      this.jornada
    );

    this.ligaService.agregarPartido(partido);

    this.golesLocal = 0;
    this.golesVisitante = 0;
  }
}
