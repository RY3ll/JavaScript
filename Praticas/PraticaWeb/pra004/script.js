let idade = Number(window.prompt('Digite a sua idade: '))
while (idade == '' || idade > 120 || idade <= 0) {
    idade = Number(window.prompt('Idade incorreta, tente novamente.'))
}

if (idade >= 18) {
    window.alert('Você já é maior de idade.') 
} else {
    window.alert('Você ainda é menor de idade.')
}