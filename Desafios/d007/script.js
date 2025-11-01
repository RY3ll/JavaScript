let cd = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')
let cdo = Number.parseFloat(cd)

function converter() {
    let reais = window.prompt('Quantos R$ você tem na carteira?')
    let div = document.getElementById('div')
    div.innerHTML = ''
    
    let r = Number.parseFloat(reais)
    let tot = r/cdo

    let d = document.createElement('p')
    d.innerText = `Com a cotação do dólar valendo ${cdo.toFixed(2).replace('.', ',')}. Você pode comprar apenas ${tot.toFixed(2).replace('.', ',')} dólares.`
    div.appendChild(d)
}