const userFare = parseInt(prompt(`Inserisci i km da percorrere`))
const userAge = parseInt (prompt(`Inserisci la tua età`))
const userFee = userFare * 0.21
const minorDiscount = (userFee * 20) / 100
const majorDiscount = (userFee * 40) / 100

let result = ""

if (userAge < 18) {
    result = (userFee - minorDiscount)
    document.getElementById(`price`).innerHTML = "il prezzo da pagare è" + " " + result.toFixed(2) ;

} else if (userAge > 65) {
    result = (userFee - majorDiscount)
    document.getElementById(`price`).innerHTML = "il prezzo da pagare è" + " " + result.toFixed(2);

} else {
    document.getElementById(`price`).innerHTML = userFee.toFixed(2)
}


