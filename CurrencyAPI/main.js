let priceUSD = document.querySelector(".priceUSD").children[1].innerHTML;

let priceEUR = document.querySelector(".priceEUR");
let priceILS = document.querySelector(".priceILS");
// priceEUR.children[1].innerHTML = (priceUSD * 0.95).toFixed(2);


fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=4ae1c2c44b01497c878f51f947664b63")
    .then((response) => response.json())
    .then((data) => {
        let euroRate = data.rates["EUR"];
        let ilsRate = data.rates["ILS"];
        console.log(ilsRate);
        priceEUR.children[1].innerHTML = (priceUSD * euroRate);
        priceILS.children[1].innerHTML = (priceUSD * ilsRate);
    })
