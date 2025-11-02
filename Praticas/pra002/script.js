let num1 = Number(window.prompt('Digite o primeiro número: '))
while (num1 == '') {
    num1 = window.prompt('Por favor, digite um número:')
}

let num2 = Number(window.prompt('Digite o segundo número: '))
while (num2 == '') {
    num2 = window.prompt('Por favor, digite outro número:')
}

let soma = num1 + num2

window.alert(`A soma dos números são de: ${soma}`)