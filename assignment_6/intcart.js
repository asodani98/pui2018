var currentcouch; // product to be updated
var cart;
var number;
var fill;
var pillow;
var cartString;
var newString;

function init() {
    if(localStorage.getItem("cart") === null) {
        cart = [];
        localStorage.setItem("cart", "[]");
    } else {
        cart = JSON.parse(localStorage.getItem('cart'));
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
    // cart.forEach(function (item,i) {
    //     var total = item[i]["quantity"];
    //     document.getElementById("itemnum").innerTEXT = "Number of Items:"+" "+total;
    // });total
    document.getElementById("itemnum").innerText = "Number of Items:"+" "+cart.length;
}

window.onload = function() {
    init();
    displayCart();
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
    displayCart();
    itemnum();
};

function displayCart() {
    $("#product").empty();
    cart.forEach(function (item, i) {
        var newelementHTML = "<div id='overall'" + "<div id='description'>" + "<img id='pillowd' src='" + item.image + "' width='100' height='100'/></a>" + "<ul class='description'>" + "<li id='typed'>"
            + "Couch Pillow" + "</li>" + "<li id='ppud'>" + "$16.00" + "</li>" + "<li id='sized'>Size:" + " " + item.size
            + "</li>" + "<li id='colord'>Color:" + " " + item.color + "</li>" + "<li id='filld'>Fill:" + " "
            + item.fill + "</li>" + "<li id='quantityd'>Quantity:" + " "
            + item.quantity + "</li>" + "</ul>" + "<div id='buttons'>"+"<button class='delete' data-size='"+item.size+"' data-color='"+item.color+"'data-fill='"+item.fill+"'data-quantity='"+item.quantity+"'onclick='removeCartItem(this,"+ i +")'>DELETE"+"</button>" + "<form action='productdetailcouch.html'>"
            + "<button class='edit'>EDIT" + "</button>" + "</form>" + "</div>" + "</div>";
        var node = $(newelementHTML);
        $("#product").append(node);
        itemnum();
    });
}

function removeCartItem(elem,index) {
    //loop through cart, check if item has all same variables, then remove it
            cart.splice(index,1);
            displayCart();
            //save new cart with removed element
            newString = JSON.stringify(cart);
            localStorage.setItem("cart", newString);

    }

