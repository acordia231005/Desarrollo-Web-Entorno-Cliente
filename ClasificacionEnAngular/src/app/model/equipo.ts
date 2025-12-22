import { Jugador } from "./jugador";

export class Equipo {

    //constructor
    constructor(
    public _id: number,
    public _nombre: string,
    public _ciudad: string,
    public _estadio: string,
    public _puntos: number,
    public _partidosJugados: number,
    public _partidosGanados: number,
    public _partidosEmpatados: number,
    public _partidosPerdidos: number,
    public _golesAFavor: number,
    public _golesEnContra: number,
    public _escudo: string,
    public _jugadores: Jugador[] = []
  ) {}

  //getters y setters
  get nombre(): string {return this._nombre;}
  set nombre(value: string) {this._nombre = value;}

  get ciudad(): string {return this._ciudad;}
  set ciudad(value: string) {this._ciudad = value;}

  get estadio(): string {return this._estadio;}
  set estadio(value: string) {this._estadio = value;}

  get puntos(): number {return this._puntos;}
  set puntos(value: number) {this._puntos = value;}

  get partidosJugados(): number {return this._partidosJugados;}
  set partidosJugados(value: number) {this._partidosJugados = value;}

  get partidosGanados(): number {return this._partidosGanados;}
  set partidosGanados(value: number) {this._partidosGanados = value;}

  get partidosEmpatados(): number {return this._partidosEmpatados;}
  set partidosEmpatados(value: number) {this._partidosEmpatados = value;}

  get partidosPerdidos(): number {return this._partidosPerdidos;}
  set partidosPerdidos(value: number) {this._partidosPerdidos = value;}

  get golesAFavor(): number {return this._golesAFavor;}
  set golesAFavor(value: number) {this._golesAFavor = value;}

  get golesEnContra(): number {return this._golesEnContra;}
  set golesEnContra(value: number) {this._golesEnContra = value;}

  get escudo(): string {return this._escudo;}
  set escudo(value: string) {this._escudo = value;}

  get jugadores(): Jugador[] {return this._jugadores;}
  set jugadores(value: Jugador[]) {this._jugadores = value;}

  //Metodo de diferencia de goles
  get diferenciaGoles(): number {
    return this._golesAFavor - this._golesEnContra;
  }

}