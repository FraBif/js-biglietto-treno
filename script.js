const userFare = parseInt(prompt(`Inserisci i km da percorrere`))
const userAge = parseInt (prompt(`Inserisci la tua età`))
const userFee = parseInt(userFare * 0.21)
const minorDiscount = parseInt((userFee * 20) / 100)
const majorDiscount = parseInt((userFee * 40) / 100)

let result = ""

if (userAge < 18) {
    result = (userFee - minorDiscount)
    document.getElementById(`price`).innerHTML = "il prezzo da pagare è" + " " + result ;

} else if (userAge > 65) {
    result = (userFee - majorDiscount)
    document.getElementById(`price`).innerHTML = "il prezzo da pagare è" + " " + result;

} else {
    document.getElementById(`price`).innerHTML = userFee
}


