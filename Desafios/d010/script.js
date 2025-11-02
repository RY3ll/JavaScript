function bhaskara() {
    let res = document.getElementById('res')
    res.innerText = ''

    let a = Number(window.prompt('Qual é o valor de a?'))
    while (a == '' || a == 0) {
        a = Number(window.prompt('Por favor, digite o valor de a.'))
    }

    let b = Number(window.prompt('Qual é o valor de b?'))
    while (b == '' || b == 0) {
        b = Number(window.prompt('Por favor, digite o valor de b.'))
    }

    let c = Number(window.prompt('Qual é o valor de c?'))
    while (c == '' || c == 0) {
        c = Number(window.prompt('Por favor, digite o valor de c.'))
    }

    let tit = document.createElement('h2')
    tit.innerText = `Resolvendo Bhaskara`
    res.appendChild(tit)

    let bah = (b**2) - (4*a*c)

    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>TRI = ${b}² - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <strong>TRI = ${bah}</strong></p>`
}