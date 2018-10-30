/*** Page updates when selecting product details ***/

// var currentcouch; // product to be updated
// var cart;
// var number;
// var fill;
// var pillow;
// var cartString;*/

// function init() {
//     console.log("init");
//     if(localStorage.getItem["cart"] === null) {
//         cart = [];
//         localStorage.setItem("cart", "[]");
//     } else {
//         cart = JSON.parse(localStorage.getItem("cart"));
//     }
// }
//
// /*** Couch Pillow ***/
// var colorImages = {
//     'afterschool': "https://i.imgur.com/6yY1N9x.png",
//     'morning': "https://png2.kisspng.com/20180614/zjq/kisspng-yellow-throw-pillows-cushion-couch-sisustus-5b22dcb7c74787.9292322115290113838163.png",
//     'cozydenim': "https://mbtskoudsalg.com/images/blue-pillow-png-2.png",
//     'rainyday': "https://i.imgur.com/dovkLOB.png",
// };
//
// function quantity() {
//     number = document.getElementById("quantity").value;
//     currentcouch.quantity = number;
// }
//
// function fillChanged() {
//     fill = document.getElementById("fillselect").value;
//     currentcouch.fill = fill;
// }
//
// function changeImage(color) {
//     document.getElementById("couchpillow").src = colorImages[color];
//     currentcouch.color = color;
// }
//
// function changeSize(size) {
//     pillow = document.getElementById("couchpillow");
//     pillow.style.height = (size * 6) + "%";
//     pillow.style.width = (size * 2.5) + "%";
//     pillow.style.top = (size * 7.5) + "%";
//     pillow.style.left = (size * 3.083) + "%";currentcouch.size = size;
// }
//
// function addToCart() {
//     cart.push(currentcouch);
//     //move to local storage
//     cartString = JSON.stringify(cart);
//     localStorage.setItem("cart", cartString);
// }
//
// // i have a bug
// function itemnum() {
// document.getElementById("itemnum").innerHTML = cart.length + " " + "Items";
// console.log("item num");
// }

$(document).ready(start);
function start() {
    console.log("test");
    // currentcouch = {
    //     price: 16.00,
    //     productname: 'Couch Pillow',
    //     color: 'cozydenim',
    //     size: '9',
    //     fill: 'duckdown',
    //     quantity: '1',
    // };
    // init();
    // itemnum();
    //
    // var returnCart = localStorage.getItem("cart");
    // cart = JSON.parse(returnCart);
    // console.log("cart contents: " + cart);
    //
    // cart.forEach(function (item, i) {
// i    //    var newItemHTML = "<img onclick='changeImage(currentcouch.color)'/>" + "<li> Size:" + currentcouch.size + "</li>" + "<li>Color:" + currentcouch.color + "</li>"
//     //     + "<li>Fill:" + currentcouch.fill + "</li>" + "<button id='del' onclick='removeFromCart(this,"+this.srcElement+")'>Delete</button>" ;
//     //     var node = $(newItemHTML);
//     //     $("#product").append(node);
    // });
}
// var element;
// function removeFromCart(elem, index) {
//     console.log("delete!");
//     //remove item from cart data structure
//     element = elem;
//     cart.splice(index, 1);
//
//     //save cart back to localStorage
//     cartString = JSON.stringify(cart);
//     localStorage.setItem("cart", cartString);
//
//     //remove div for product from cart page
//     elem = document.getElementsByClassName("delete");
//     elem.parentNode.remove();
// }
