var CP = document.querySelector("#cost-price");
var SP = document.querySelector("#selling-price");
var quantity = document.querySelector("#quantity");
var check = document.querySelector("#check-btn");
var output = document.querySelector(".output");
var message = document.querySelector(".opt");
var lossImage = document.querySelector(".loss");
var profitImage = document.querySelector(".profit");
var mainImage = document.querySelector(".hero");

function clickHandler() {
    var costPrice = Number(CP.value);
    var sellPrice = Number(SP.value);
    var qty = Number(quantity.value);

    if (costPrice <= 0 || sellPrice <= 0 || qty <= 0) {
        message.innerHTML = "Please Enter a valid value";
        output.style.display = "block";
    } else {
        if (costPrice > sellPrice) {
            var loss = Math.abs(((costPrice - sellPrice) * qty)).toFixed(2);
            var lossPercent = Math.abs((((costPrice - sellPrice) * 100) / costPrice)).toFixed(2);
            document.documentElement.style.setProperty('--primary', 'rgb(161, 38, 38)');
            mainImage.style.display = "none";
            profitImage.style.display = "none";
            message.innerHTML = "You lost " + lossPercent + " %. Your total loss is ₹ " + loss;
            output.style.display = "block";
            lossImage.style.display = "block";
        } else {
            var profit = Math.abs(((sellPrice - costPrice) * qty)).toFixed(2);
            var profitPercent = Math.abs((((sellPrice - costPrice) * 100) / costPrice)).toFixed(2);
            document.documentElement.style.setProperty('--primary', '#479F0B');
            mainImage.style.display = "none";
            lossImage.style.display = "none";
            message.innerHTML = "You gained " + profitPercent + " %. Your total profit is ₹ " + profit;
            output.style.display = "block";
            profitImage.style.display = "block";
        }
    }
}

check.addEventListener("click", clickHandler)