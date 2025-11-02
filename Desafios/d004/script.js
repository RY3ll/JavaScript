function Troco() {
    let pro = window.prompt('Que produto deseja comprar?')
    while (pro === '') {
        pro = window.prompt('Por favor, me diga o produto antes de continuar.')
    }

    let val = window.prompt(`Quanto custa ${pro} que você está comprando?`)
    while (val === '') {
        val = window.prompt('Por favor, eu preciso saber o preço do produto para continuar.')
    }
    
    let din = window.prompt(`Que valor você deu para comprar ${pro}?`)
    while (din === '') {
        din = window.prompt('Por favor, preciso saber quanto tem em dinheiro para continuar.')
    }
    
    let v = Number(val)
    let d = Number(din)
    let t = Number(d - v)
    
    if (d < v) {
        window.alert(`Você não tem dinheiro suficiente para comprar ${pro} no momento. Volte sempre!`)
    } else {
        window.alert(`Você comprou ${pro} que custou R$${v}. Deu R$${d} em dinheiro e vai receber R$${t} de troco. Volte Sempre!`)
    }
}