function clicar() {
    let nome = window.prompt('Olá usuário! Qual é o seu nome? ')
    while (nome === '') {
        nome = window.prompt('Por favor, digite o seu nome para continuar.')
    }

    let idade = window.prompt(`É bom te conhecer ${nome}! Quantos anos você tem? `)
    while (idade === '') {
        idade = window.prompt('Por favor, digite a sua idade para continuar.')
    }

    window.prompt(`Eu conheço ${nome}, que tem ${idade} anos de idade!`)
}