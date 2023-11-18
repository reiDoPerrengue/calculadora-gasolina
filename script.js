let fkm = document.querySelector('input#fkm')
let res = document.querySelector('div#res')

function calcular() {
    let km = Number(fkm.value)
    let gasolina = 6
    let consumo = 10.8
    let calculo = km/consumo * gasolina

    res.innerHTML = `<p> Ei, Adriano tu gastou ${calculo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em gasolina, visse. <\p>`
    
    res.innerHTML += `<p> Seu onix está fazendo ${consumo} por quilometro. <\p>`
}

