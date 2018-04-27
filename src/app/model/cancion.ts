export class Cancion{
    _id : number;
    _nombre: String;

    constructor(id:number = -1, nombre: string = "", ){
        console.log("Cancion constructor");
        this._id = id;
        this._nombre=nombre;
    }

    get id(){
        console.log("getter id");
        return this._id;
    }

    set id(id: number){
        console.log("setter number");
       this._id= id;
    }

    get nombre(){
        console.log("getter nombre");
        return this._nombre;
    }

    set nombre(nombre: String){
        console.log("setter nombre");
       this._nombre= nombre;
    }
}