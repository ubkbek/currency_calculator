// variables
var elCurrencyForm = document.querySelector(".currency__form");
var elInputAmound = document.querySelector(".сurrency__imput-amound")
var elSelectValyuta = document.querySelector(".сurrency__select-valyut")
var currencyResult = document.querySelector(".currency__result")
var result;

// dont submit information
elCurrencyForm.addEventListener("submit", function(evt){
        evt.preventDefault();

        switch(elSelectValyuta.value){
            case "usd":  result = elInputAmound.value * 10850; break;
            case "rub":  result = elInputAmound.value * 128.70; break;
            case "eur":  result = elInputAmound.value * 12165.97; break;
        }
        currencyResult.textContent = `${result} so'm`;
    })
