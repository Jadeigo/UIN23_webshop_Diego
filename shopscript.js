let cart = []

function addToCart(title, price) {
    cart.push({poductTitle: title, productPrice: price, productQuantity: 1})

    console.log(cart)
    //Etter å ha lagt inn et produkt, opdatter handlelistevisning:
    renderCart()
    //Så må vi oppdatere label 
    document.querySelector("#cart .label").innerHTML = cart.length

    //sjekk for å åpne cart når man trykker på add to cart / la den bli og opdattere seg når man trykker igjen på add to cart.
    document.querySelector("#cartview").classList.remove("hidden")
    /*annet metode 
    if(document.getElementById("cartview").classList.contains("hidden")){
    toggleCart();
    }*/
}
/* Annet metode til å skrivee ut total
function calculatePrice() {
    let totalPrice = 0
    cart.map(prod => totalPrice += prod.productprice)
    document.getElementById("total").innerHTML = TotalPrice
    Vi kaller funksjon etterpå i selve rendercart.
}
*/ 
function renderCart() {
    //Tom variabel for å bygge HTML til produkter
    let listHTML = ""
    // Total price
    let totalPrice = 0
    //Gå gjennom cart-arrayen, lag <li> for hvert produkt
    cart.map((prod, index) => listHTML += `<li id="prod-${index}">
    <span class="title">${prod.poductTitle}</span>
    <span class="price">${prod.productPrice} kr</span>
    <span class="quantity">  x${prod.productQuantity}</span>
    <button class="delete" onclick = "deleteProduct(${index})">X</button>
    </li>`)
    //oppdatere pris
    cart.map(prodPrice => totalPrice += prodPrice.productPrice)
    //Bruke en selector for å finne riktig <ul>, og skrive inn listHTML:
    document.querySelector("#cartview ul").innerHTML = listHTML
    //skrive ut oppdatert total pris
    document.querySelector("#total").innerHTML = totalPrice
}

 //får å delete en product fra handlevogna
function deleteProduct(index) {
    document.getElementById("prod-"+index).classList.add("hidden")
    setTimeout(() => {
        cart.splice(index, 1)
    renderCart()
    }, 700)
    
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}