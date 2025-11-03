function situaçao() {
    let res = document.getElementById('res')
    res.innerText = ''
    let nome = window.prompt('Digite o nome do aluno:')
    while(nome === '') {
        nome = window.prompt('Por favor, Digite o nome do aluno:')
    }

    let n1 = Number(window.prompt(`Primeira nota de ${nome}: `))
    while(n1 == '' || n1 < 0 || n1 > 10) {
        n1 = window.prompt(`Por favor, Digite a primeira nota de ${nome}:`)
    }

    let n2 = Number(window.prompt(`Segunda nota de ${nome}: `))
    while(n2 == '' || n2 < 0 || n2 > 10) {
        n2 = window.prompt(`Por favor, Digite a segunda nota de ${nome}:`)
    }

    let tit = document.createElement('h2')
    tit.innerText = `Analisando notas de ${nome}`
    res.appendChild(tit)

    let media = (n1 + n2)/2

    res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a <strong>média é ${media}<strong></p>`
    if (media <= 3 && media >= 0) {
        res.innerHTML += `<p>Com a média abaixo de 3,0, o aluno está <strong>REPROVADO<strong></p>`
    } else if (media <= 6) {
        res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <strong>RECUPERAÇÃO<strong></p>`
    } else if (media > 6) {
        res.innerHTML += `<p>Com média acima de 6,0, o aluno está <strong>APROVADO<strong></p>`
    }
}