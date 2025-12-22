import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../model/equipo';
import { LigaService } from '../../services/liga-service';

@Component({
  selector: 'app-tabla-clasificacion',
  imports: [],
  templateUrl: './tabla-clasificacion.html',
  styleUrl: './tabla-clasificacion.css',
})
export class TablaClasificacion implements OnInit{

  equipos: Equipo[] = [];

  constructor(private ligaService: LigaService) {}

  ngOnInit(): void {
    this.cargarEquipos();
  }

  cargarEquipos(): void {
    this.equipos = this.ligaService.obtenerEquipos();
  }
}
