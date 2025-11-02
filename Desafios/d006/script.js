function converter() {
    let cel = window.prompt('Digite uma temperatura em C° (Celsius)')
    while (cel === '') {
        cel = window.prompt('Por favor, digite a temperatura antes de continuar.')
    }

    let p = document.getElementById('p')
    let ul = document.getElementById('lista')
    let c = Number.parseFloat(cel)

    ul.innerHTML = ''

    p.innerHTML = `<h2>A temperatura de ${cel}°C, corresponde a...</h2>`

    let kel = document.createElement('i')
    kel.innerHTML = `${c + 273.15}°K (Kelvin) <br>`
    ul.appendChild(kel)

    let fah = document.createElement('i')
    fah.innerHTML = `${((c * 9)/5) + 32}°F (Fahrenheit)`
    ul.appendChild(fah)
}