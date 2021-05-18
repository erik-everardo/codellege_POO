const drawProyectilButton = document.getElementById("drawProyectil");
const contenedor = document.getElementById("contenedor");
const canvas = document.getElementById("canvas");

drawProyectilButton.addEventListener("click", function(){
    drawProyectil();
})

function drawProyectil() {
    var ctx = document.getElementById("canvas").getContext("2d");
    const proyectil = new Proyectil(45,45);
    proyectil.almacenerRecorrido();
    let posicionesX = proyectil.posicionLeft;
    let posicionesY = proyectil.posicionBottom;

    for (let i = 1; i < posicionesY.length; i++) {
        ctx.beginPath();
        ctx.arc(posicionesX[i] ,posicionesY[i], 2, Math.PI * 2, true);
        ctx.fill();
    }

    console.log(posicionesY);
    console.log(posicionesX);
}