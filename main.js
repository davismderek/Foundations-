console.log("main.js")

const changeBuyButton = document.querySelector("#buyButton")
const shoppingCart = document.querySelector("#shoppingCartText")

changeBuyButton.addEventListener("click", function (madePurchase) {
    changeBuyButton.textContent = "Added To Cart!";
    shoppingCart.innerHTML = "Shopping Cart (1)"


});

// document = 
// p = .innerHTML("1")

