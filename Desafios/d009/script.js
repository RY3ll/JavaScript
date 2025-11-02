function salario() {
    let res = document.getElementById('res')
    res.innerText = ''

    let fun = window.prompt('Qual é o nome do funcionário(a)?')
    while (fun === '') {
        fun = window.prompt('Por favor, digite o nome do funcionário(a) antes de continuar.')
    }

    let sal = Number(window.prompt(`Qual é o saláro de ${fun}?`))
    while (sal == '' || sal <= 0) {
        sal = window.prompt('Por favor, digite o salário de ' + fun)
    }

    let por = Number(window.prompt(`O salário de ${fun} vai ser reajustado em qual porcentagem?`))
    while (por == '' || por <= 0) {
        por = window.prompt('Por favor, digite o reajuste do funcionário.')
    }

    let tit = document.createElement('h2')
    tit.innerText = `${fun} recebeu um aumento salarial!`
    res.appendChild(tit)

    let valaum = (sal * por)/100
    let aum = sal + valaum

    res.innerHTML += `<p>O salário atual era de ${sal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
    res.innerHTML += `<p>Com um aumento de ${por}%, o salário vai aumentar ${valaum.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${fun} vai passar a ganhar ${aum.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
}