export class Jugador {

    //constructor
    constructor(
    public _id: number,
    public _nombre: string,
    public _posicion: string,
    public _dorsal: number,
    public _nacionalidad: string
  ) {}

  //getters y setters
  get id(): number {return this._id;}
  set id(value: number) {this._id = value;}

  get nombre(): string {return this._nombre;}
  set nombre(value: string) {this._nombre = value;}

  get posicion(): string {return this._posicion;}
  set posicion(value: string) {this._posicion = value;}

  get dorsal(): number {return this._dorsal;}
  set dorsal(value: number) {this._dorsal = value;}

  get nacionalidad(): string {return this._nacionalidad;}
  set nacionalidad(value: string) {this._nacionalidad = value;}
}