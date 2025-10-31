function contar() {
    var i = document.getElementById('txti')
    var f = document.getElementById('txtf')
    var p = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var ini = Number(i.value)
        var fim = Number(f.value)
        var passo = Number(p.value)
    }
    for (var c = ini; c <= fim; c += passo) {
        res.innerHTML += `${c} \u{1F449} `
    }
}