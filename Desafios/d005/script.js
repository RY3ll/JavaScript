function converter() {
    let met = window.prompt('Digite uma distância em metros (m)')
    let titxt = document.getElementById('ti')
    let ul = document.getElementById('lista')
    let m = Number(met)
    
    ul.innerText = ''
    titxt.innerHTML = `A distância de ${m} metros, corresponde a...`
    
    let km = document.createElement('i')
    km.innerHTML = `${m/1000} quilômetros (Km) <br>`
    ul.appendChild(km)

    let hm = document.createElement('i')
    hm.innerHTML = `${m/100} hectômetros (Hm) <br>`
    ul.appendChild(hm)

    let dam = document.createElement('i')
    dam.innerHTML = `${m/10} decâmetros (Dam) <br>`
    ul.appendChild(dam)

    let dm = document.createElement('i')
    dm.innerHTML = `${m*10} decímetros (dm) <br>`
    ul.appendChild(dm)

    let cm = document.createElement('i')
    cm.innerHTML = `${m*100} centímetros (cm) <br>`
    ul.appendChild(cm)

    let mm = document.createElement('i')
    mm.innerHTML = `${m*1000} milímetros (mm) <br>`
    ul.appendChild(mm)
}