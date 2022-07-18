const btn = document.querySelector(".btn")
const modal = document.querySelector(".modal")
const btnNao = document.querySelector(".cancelar")
const btnSim = document.querySelector(".confirmar")

function inscrever() {
    if (btn.textContent === "INSCRITO") {
        modal.classList.remove("escondido")
    }
    if (btn.textContent === "INSCREVER-SE") {
        btn.textContent = "INSCRITO"
        btn.classList.add("inscrito")
    }

}

function nadaMuda() {
    modal.classList.add("escondido")
}

function voltarOriginal() {
    modal.classList.add("escondido")
    btn.textContent = "INSCREVER-SE"
    btn.classList.remove("inscrito")
}