function mudou() {
    let res = document.getElementById('res')
    res.innerText = ''
    let pa = Number(window.prompt('Qual era o preço anterior do produto?'))
    while (pa == '') {
        pa = Number(window.prompt('Por favor, digite o preço anterior do produto.'))
    }

    let pn = Number(window.prompt('Qual é o preço atual do produto?'))
    while (pn == '') {
        pn = Number(window.prompt('Por favor, digite o preço atual do produto.'))
    }

    let tit = document.createElement('h2')
    tit.innerText = 'Analisando os valores informados'
    res.appendChild(tit)

    res.innerHTML += `<p>O produto custava ${pa.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${pn.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`

    let ac = pn - pa
    let dec = pa - pn
    let porf = ((pn - pa)/pn) * 100
    let por = ((pa - pn)/pa) * 100

    if (pa < pn) {
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        res.innerHTML += `<p>O preço subiu ${ac.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${porf.toFixed(1).replace('.', ',')}% para cima.</p>`
    } else if (pa > pn) {
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu ${dec.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${por.toFixed(1).replace('.', ',')}% para baixo.</p>`
    }
}