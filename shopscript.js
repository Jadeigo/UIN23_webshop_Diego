let cart = []

function addToCart(title, price) {
    cart.push({poductTitle: title, productPrice: price, productQuantity: 1})

    console.log(cart)
    //Etter å ha lagt inn et produkt, opdatter handlelistevisning:
    renderCart()
    //Så må vi oppdatere label 
    document.querySelector("#cart .label").innerHTML = cart.length
}

function renderCart() {
    //Tom variabel for å bygge HTML til produkter
    let listHTML = ""
    //Gå gjennom cart-arrayen, lag <li> for hvert produkt
    cart.map(prod => listHTML += `<li>
    <span class="title">${prod.poductTitle}</span>
    <span class="price">${prod.productPrice} kr</span>
    <span class="quantity">  x${prod.productQuantity}</span>
    <button class="delete">X</button>
</li>`) 

    //Bruke en selector for å finne riktig <ul>, og skrive inn listHTML:
    document.querySelector("#cartview ul").innerHTML = listHTML
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}