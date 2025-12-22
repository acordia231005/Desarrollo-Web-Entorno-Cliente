import { Equipo } from "./equipo";

export class Partido {

  //constructor
    constructor(
    public _id: number,
    public _equipoLocal: Equipo,
    public _equipoVisitante: Equipo,
    public _fecha: Date,
    public _golesLocal: number,
    public _golesVisitante: number,
    public _jornada: number
  ) {}

  //getters y setters
  get id(): number {return this._id;}
  set id(value: number) {this._id = value;}

  get equipoLocal(): Equipo {return this._equipoLocal;}
  set equipoLocal(value: Equipo) {this._equipoLocal = value;}

  get equipoVisitante(): Equipo {return this._equipoVisitante;}
  set equipoVisitante(value: Equipo) {this._equipoVisitante = value;}

  get fecha(): Date {return this._fecha;}
  set fecha(value: Date) {this._fecha = value;}

  get golesLocal(): number {return this._golesLocal;}
  set golesLocal(value: number) {this._golesLocal = value;}

  get golesVisitante(): number {return this._golesVisitante;}
  set golesVisitante(value: number) {this._golesVisitante = value;}

  get jornada(): number {return this._jornada;}
  set jornada(value: number) {this._jornada = value;}
}
