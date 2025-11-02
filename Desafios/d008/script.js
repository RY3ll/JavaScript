function desconto() {
    let res = document.getElementById('res')
    res.innerText = ''

    let pro = window.prompt('Qual produto você está comprando?')
    while(pro === '') {
        pro = window.prompt('Por favor,me diga o produto que deseja comprar.')
    }

    let preco = window.prompt(`Qual é o preço de ${pro}?`)
    while (preco === '') {
        preco = window.prompt(`Por favor, me diga o preço de ${pro}`)
    }
    let pre = Number(preco)

    let tit = document.createElement('h2')
    tit.innerText = `Calculando desconto de 10% para ${pro}`
    res.appendChild(tit)

    let valdes = (pre*10)/100
    let des = pre - valdes

    res.innerHTML += `<p>O preço original era R$ ${preco.replace('.', ',')}</p>`
    res.innerHTML += `<p>Você acaba de ganhar R$ ${valdes.toFixed(2).replace('.', ',')} de desconto (-10%)</p>`
    res.innerHTML += `<p>No fim, você vai pagar R$ ${des.toFixed(2).replace('.', ',')} no produto ${pro}</p>`
}