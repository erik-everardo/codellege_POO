function main() {
    let foco = new Foco();
    document.getElementById("estado").src = foco.encendido ? "../assets/encendido.jpg" : "../assets/apagado.jpg";
    document.getElementById("estado").style.height = "40px"
    document.getElementById("estado").style.width = "40px"

    document.getElementById("encenderOApagarBtn").addEventListener("click", function() {
        foco.apagarOPrender();
        document.getElementById("estado").src = foco.encendido ? "../assets/encendido.jpg" : "../assets/apagado.jpg";
    });
}

main();
