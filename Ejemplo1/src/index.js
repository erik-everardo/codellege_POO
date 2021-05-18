// let robot = {
//     color: "Gris",
//     capacidad: 100,
//     consumo: 200,
//     encendido: false,
//     posicionX: -192,
//     posicionY: -98,
//     direccion: 50
// }

class Robot {
    color = "";
    capacidad = 0;
    consumo = 0;
    encendido = false;
    posicionX = 0;
    posicionY = 0;

    constructor(color, capacidad, consumo, encendido, posicionX, posicionY) {
        this.color = color;
        this.capacidad = capacidad;
        this.consumo = consumo;
        this.encendido = encendido;
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }
}

let robot = new Robot("Rojo",30,50,true,30.4,50.3);

console.log(robot);