function cambiarTema1() {
    var listaFrutas = document.getElementById("frutas");
    listaFrutas.classList.remove("tema2");
    listaFrutas.classList.add("tema1");
}

function cambiarTema2() {
    var listaFrutas = document.getElementById("frutas");
    listaFrutas.classList.remove("tema1");
    listaFrutas.classList.add("tema2");
}