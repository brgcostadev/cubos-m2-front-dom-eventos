const inputs = document.querySelectorAll('input') //seleciona TODOS

/* ITERA 1 A 1 */ inputs.forEach(input => {
    input.addEventListener/*ESCUTAR*/('change' /*A FORMA COMO ESCUTA*/, function (event) { /*COMPORTAMENTO ESPERADO*/
        const inputModificado = event.target /* A LINHA DO INPUT */
        if (inputModificado.dataset.resposta === inputModificado.value) {
            input.classList.add("acerto")
        }
    })
})
