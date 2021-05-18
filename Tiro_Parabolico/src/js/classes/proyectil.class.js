class Proyectil {
    velocidadInicial = 0;
    angulo = 0;

    posicionBottom = [];
    posicionLeft = [];

    constructor(velocidadInicial, angulo) {
        this.velocidadInicial = velocidadInicial;
        this.angulo = angulo;
    }

    calcularDistanciaX(t) {
        let distanciaX =
            this.velocidadInicial * Math.cos(this.angulo * (Math.PI / 180) * t);
    
        return distanciaX;
    }

    calcularDistanciaY(t) {
        let distanciaY =
            this.velocidadInicial * Math.sin(this.angulo * (Math.PI / 180));
            distanciaY = distanciaY * t - 0.5 * 9.8 * Math.pow(t,2);
        return distanciaY;
    }

    almacenerRecorrido() {
        let tiempo = 0;
        while(true) {
            tiempo += 0.01;
            let left = this.calcularDistanciaX(tiempo);
            let bottom = this.calcularDistanciaY(tiempo);
            if(bottom < 0) {
                break;
            }
            this.posicionLeft.push(left);
            this.posicionBottom.push(bottom);
        }
    }
}