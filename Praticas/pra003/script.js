let nasc = Number(window.prompt('Digite o seu ano de nascimento: '))
let agora = new Date().getFullYear()

while (nasc == '' || nasc < 1980 || nasc > agora) {
    nasc = Number(window.prompt('Ano incorreto, tente novamente.'))
}

window.alert(`Você tem ${agora - nasc} anos!`)