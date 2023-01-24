
// const userKm = parseInt(prompt(`Quanti KM devi percorrere?`));
// const pricePerKm = 0.21;


const userAgeText = document.getElementById("userAge")
// console.log(userAgeText);

userAgeText.addEventListener(
    "click",

    function () {
        const userAge = parseInt(`Quanti anni hai?`);
    }
)


let outputMessage;

if (!isNaN(userAge) && !isNaN(userKm)) {
    let price = userKm * pricePerKm;

    if (userAge < 18) {
        const discountPercUnder = 20
        const discountAmountUnder = (price * discountPercUnder) / 100
        price -= discountAmountUnder
        outputMessage = `Il prezzo per i minorenni é ${price} `
        // console.log(outputMessage);
    }

    else if (userAge > 64) {
        const discountPercOver = 40
        const discountAmountOver = (price * discountPercOver) / 100
        price -= discountAmountOver
        outputMessage = `Il prezzo per gli over 64 é ${price} `
        // console.log(outputMessage);
    }

    else {
        outputMessage = `Il prezzo del biglietto intero è ${price}`
        // console.log(outputMessage);
    }

    // alert(`${outputMessage}£`)
}
else {
    // alert(`Inserire dei valori corretti e ricaricare`)
}
