var currentcouch; // product to be updated
var cart;
var number;
var fill;
var pillow;
var cartString;
var image;

function init() {
    if(localStorage.getItem["cart"] === null) {
        cart = [];
        localStorage.setItem("cart", "[]");
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

function addToCart() {
    cart.push(currentcouch);
    //move to local storage
    cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
}

function itemnum () {
    document.getElementById("itemnum").innerText = "Number of Items:"+" "+cart.length;
}

window.onload = function() {
    currentcouch = {
        price: 16.00,
        productname: 'Couch Pillow',
        color: 'cozydenim',
        size: '9',
        fill: 'duckdown',
        quantity: '1',
        image: colorImages.cozydenim,
    };
    init();
    itemnum();

    cart.forEach(function (item, i) {
        var newelementHTML = "<div id='description'>" + "<a>" + "<img id='pillowd'/>" + currentcouch.image + "</a>" + "<ul class='description'>" + "<li id='typed'>"
            + "Couch Pillow" + "</li>" + "<li id='ppud'>" + "$16.00" + "</li>" + "<li id='sized'>Size:" + " " + currentcouch.size
            + "</li>" + "<li id='colord'>Color:" + " " + currentcouch.color + "</li>" + "<li id='filld'>Fill:" + " "
            + currentcouch.fill + "</li>" + "</ul>" + "<div id='buttons'>" + "<button id='delete'>DELETE" + "</button>" + "<form action='productdetailcouch.html'>"
            + "<button class='edit'>EDIT" + "</button>" + "</form>" + "</div>";
        var node = $(newelementHTML);
        $("#product").append(node);
    });
}


// <div id="product">
//     <div id="description">
//     <a>
//     <img id = "pillowd" alt="Denim Blue Couch Pillow" src="https://mbtskoudsalg.com/images/blue-pillow-png-2.png" width="100" height="100"/>
//     </a>
//     <ul class="description">
//     <li id = "typed"> Couch Pillow </li>
// <li id = "ppud"> $16.00 </li>
// <li id = "sized"> Size: 7 in. </li>
// <li id = "colord"> Color: Cozy Denim </li>
// <li id = "filld"> Fill: Duck Down </li>
// </ul>
// </div>
// <div id = buttons>
//     <button>DELETE</button>
//     <form action="productdetailcouch.html">
//     <button>EDIT</button>
//     </form>
//     </div>
//     // </div>

