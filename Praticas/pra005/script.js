let p1 = window.prompt('Qual é a capital do Brasil?')
let acertos = 0
if (p1 == 'Brasília'){
    acertos += 1
}

let p2 = Number(window.prompt('Quanto é 5²?'))
if (p2 == 25) {
    acertos += 1
}

let p3 = window.prompt('Quem criou o JavaScript?')
if (p3 == 'Brendan Eich') {
    acertos += 1
}

window.alert(`Você acertou ${acertos} de 3 perguntas!`)