const userFare = parseInt(prompt(`Inserisci i km da percorrere`))
const userAge = parseInt (prompt(`Inserisci la tua età`))
const userFee = parseInt(userFare * 0,21)
const minorDiscount = parseInt((userFee * 20) / 100)
const majorDiscount = parseInt((userFee * 40) / 100)

let result = ""

if (userAge < 18) {
    result = parseInt((userFee - minorDiscount))
    document.getElementById(`price`).innerHTML = result ;

} else if (userAge > 65) {
    result = parseInt((userFee - majorDiscount))
    document.getElementById(`price`).innerHTML = result ;

}