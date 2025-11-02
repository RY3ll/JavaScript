function clicar() {
    let num = window.prompt('Digite um número Inteiro qualquer: ')
    while (num === '') {
        num = window.prompt('Por favor, digite um número.')
    }

    let n = Number.parseInt(num) 
    window.alert(`O Antecessor de ${num} é: ${n - 1}`)
    window.alert(`O Sucessor de ${num} é: ${n + 1}`)
}