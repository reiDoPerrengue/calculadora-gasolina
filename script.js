let fkm = document.querySelector('input#fkm')
let res = document.querySelector('div#res')

function calcular() {
    let km = Number(fkm.value)
    let gasolina = 6
    let consumo = 10.6
    let calculo = km/consumo * gasolina

    res.innerHTML = `<p> Ei, você gastou ${calculo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de gasolina, visse. <\p>`
    
    res.innerHTML += `<p> Seu onix está fazendo ${consumo} por quilometro. <\p>`
}

