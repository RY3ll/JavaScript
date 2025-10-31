function Troco() {
    let pro = window.prompt('Que produto deseja comprar?')
    let val = window.prompt(`Quanto custa ${pro} que você está comprando?`)
    let din = window.prompt(`Que valor você deu para comprar ${pro}?`)
    
    let v = Number(val)
    let d = Number(din)
    let t = Number(d - v)
    
    if (d < v) {
        window.alert(`Você não tem dinheiro suficiente para comprar ${pro} no momento. Volte sempre!`)
    } else {
        window.alert(`Você comprou ${pro} que custou R$${v}. Deu R$${d} em dinheiro e vai receber R$${t} de troco. Volte Sempre!`)
    }
}