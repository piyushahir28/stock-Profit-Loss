var CP = document.querySelector("#cost-price");
var SP = document.querySelector("#selling-price");
var quantity = document.querySelector("#quantity");
var check = document.querySelector("#check-btn");
var output = document.querySelector(".output");
var message = document.querySelector(".opt");


function clickHandler() {
    var costPrice = CP.value;
    var sellPrice = SP.value;
    var qty = quantity.value;

    if (costPrice <= 0 || sellPrice <= 0 || qty <= 0) {
        message.innerHTML = "Please Enter a valid value";
        output.style.display = "block";
    } else {
        if (costPrice < sellPrice) {
            var profit = ((sellPrice - costPrice) * qty).toFixed(2);
            var profitPercent = ((profit * 100) / costPrice).toFixed(2);
            message.innerHTML = "You gained " +
                $ { profit }
            " .Your total profit is ₹ " + $ { profitPercent };
            output.style.display = "block";
        } else {
            var loss = ((costPrice - sellPrice) * qty).toFixed(2);
            var lossPercent = ((loss * 100) / costPrice).toFixed(2);
            message.innerHTML = "You lost " +
                $ { loss }
            " .Your total loss is ₹ " + $ { lossPercent };
            output.style.display = "block";
        }
    }
}

check.addEventListener("click", clickHandler)