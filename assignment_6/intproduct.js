var currentcouch; // product to be updated
var cart;
var number;
var fill;
var pillow;
var cartString;

function init() {
    if(!localStorage.getItem("cart")) {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
    } else {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
}

var colorImages = {
    'afterschool': "https://i.imgur.com/6yY1N9x.png",
    'morning': "https://png2.kisspng.com/20180614/zjq/kisspng-yellow-throw-pillows-cushion-couch-sisustus-5b22dcb7c74787.9292322115290113838163.png",
    'cozydenim': "https://mbtskoudsalg.com/images/blue-pillow-png-2.png",
    'rainyday': "https://i.imgur.com/dovkLOB.png",
 };

 function quantity() {
     number = document.getElementById("quantity").value;
     currentcouch.quantity = number;
 }

 function fillChanged() {
     fill = document.getElementById("fillselect").value;
     currentcouch.fill = fill;
 }

 function changeImage(color) {
     document.getElementById("couchpillow").src = colorImages[color];
     currentcouch.color = color;
 }

 function changeSize(size) {
     pillow = document.getElementById("couchpillow");
     pillow.style.height = (size * 6) + "%";
     pillow.style.width = (size * 2.5) + "%";
     pillow.style.top = (size * 7.5) + "%";
     pillow.style.left = (size * 3.083) + "%";currentcouch.size = size;
 }

window.onload = function() {
    currentcouch = {
        price: 16.00,
        productname: 'Couch Pillow',
        color: 'cozydenim',
        size: '9',
        fill: 'duckdown',
        quantity: '1',
    };
};

init();


function addToCart() {
    cart.push(currentcouch);
    //move to local storage
    cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}
