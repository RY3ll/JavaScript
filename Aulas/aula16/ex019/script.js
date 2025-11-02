let num = document.getElementById('txtn')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let val = []

function inNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (inNumero(num.value) && !inlista(num.value, val)) {
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista! Tente Novamente.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (val == 0) {
        window.alert('Não é possível analizar os números! Tente novamente.')
    } else {
        let tot = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        let media = 0

        for (let pos in val) {
            soma += val[pos]
            if (val[pos] > maior) {
                maior = val[pos]
            } else if (val[pos] < menor) {
                menor = val[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é de ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é de ${media.toFixed(2).replace('.', ',')}</p>`
    }
}