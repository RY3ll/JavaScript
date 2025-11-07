let n1 = 23
let n2 = 65
let n3 = 34

if (n1 > n2 && n1 > n3) {
    console.log(`O número ${n1} é maior que ${n2} e ${n3}`)
} else if (n2 > n1 && n2 > n3) {
    console.log(`O número ${n2} é maior que ${n1} e ${n3}`)
} else if (n3 > n1 && n3 > n2) {
    console.log(`O número ${n3} é maior que ${n2} e ${n1}`)
}