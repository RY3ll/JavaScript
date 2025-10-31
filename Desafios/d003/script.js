function clicar() {
    let num = window.prompt('Digite um número Inteiro qualquer: ')
    let n = Number.parseInt(num) 
    window.alert(`O Antecessor de ${num} é: ${n - 1}`)
    window.alert(`O Sucessor de ${num} é: ${n + 1}`)
}