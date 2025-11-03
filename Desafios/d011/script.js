function ano() {
    let res = document.getElementById('res')
    let ano = Number(window.prompt('Digite o ano que quer verificar se é bissexto ou não.'))
    res.innerText = ''
    while (ano == '' || ano == 0) {
        ano = Number(window.prompt('Por favor, digite um ano.'))
    }

    if (ano % 4 == 0) {
        let p = document.createElement('p')
        p.innerHTML = `O ano de ${ano} <strong>É BISSEXTO</strong>`
        res.appendChild(p)
    } else {
        let p = document.createElement('p')
        p.innerHTML = `O ano de ${ano} <strong>NÂO É BISSEXTO</strong>`
        res.appendChild(p)
    }
}