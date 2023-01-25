const inputButtonEl = document.getElementById("calculate_tiket");
const userNameEl = document.getElementById("name_and_surname");
const userAgeEl = document.getElementById("age");
const userKmEl = document.getElementById("km");
const coachNumberEl = document.getElementById("coach_number")
const outputNameUser = document.getElementById("name_printed")
const outputTiketPrice = document.getElementById("tiketPrice")
const outoutRandomCode = document.getElementById("random_code")


inputButtonEl.addEventListener(
    'click',

    function () {
        let outputMessage;
        const userName = userNameEl.value;
        const userAge = userAgeEl.value;
        const userKm = userKmEl.value;
        const pricePerKm = 0.21;
        let randomCodeGen = Math.floor(Math.random() * 10000) + 1
        let randomCoachGen = Math.floor(Math.random() * 50) + 1

        if (!isNaN(userAge) && !isNaN(userKm)) {
            let price = pricePerKm * userKm;

            if (userAge < 18) {
                const discountPercUnder = 20
                const discountAmountUnder = (price * discountPercUnder) / 100
                price -= discountAmountUnder
                outputMessage = `€${price.toFixed(2)}`
                // console.log(outputMessage);
            }
            else if (userAge > 64) {
                const discountPercOver = 40;
                const discountAmountOver = (price * discountPercOver) / 100
                price -= discountAmountOver
                outputMessage = `€${price.toFixed(2)}`
            }
            else {
                outputMessage = `€${price.toFixed(2)}`
            }
        }
        else {
            outputMessage = `inserire dati corretti`
        }

        // output
        outputNameUser.innerHTML = userNameEl.value
        outputTiketPrice.innerHTML = outputMessage
        outoutRandomCode.innerHTML = randomCodeGen
        coachNumberEl.innerHTML = randomCoachGen


    }


)



