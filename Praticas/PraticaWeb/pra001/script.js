let nome = window.prompt('Digite o seu nome!')
while (nome === '') {
    nome = window.prompt('Por favor, digite o seu nome.')
}
window.alert(`Olá, ${nome}! Seja bem-vindo!`)