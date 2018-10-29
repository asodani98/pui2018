
var currentcouch;
var cart;
var number;
var fillpillow;
var itemincart;

var colorImages = {
    'afterschool': "https://i.imgur.com/6yY1N9x.png",
    'morning': "https://png2.kisspng.com/20180614/zjq/kisspng-yellow-throw-pillows-cushion-couch-sisustus-5b22dcb7c74787.9292322115290113838163.png",
    'cozydenim': "https://mbtskoudsalg.com/images/blue-pillow-png-2.png",
    'rainyday': "https://i.imgur.com/dovkLOB.png",
};

window.onload = function() {
    currentcouch = {
        price: '16.99',
        productname: 'Couch Pillow',
        color: 'cozydenim',
        size: '9',
        fill: fillpillow,
        quantity: '1',
    };

    function quantity() {
        number = document.getElementById("quantity").value;
        currentcouch.quantity = number;
    }

    function fillChanged() {
        fillpillow = document.getElementById("fillselect").value;
        currentcouch.fill = fillpillow;
    }

    function changeImage(color) {
        document.getElementById("couchpillow").src = colorImages[color];
        currentcouch.color = color;
    }

    function changeSize(size) {
        var pillow = document.getElementById("couchpillow");
        pillow.style.height = (size * 6) + "%";
        pillow.style.width = (size * 2.5) + "%";
        pillow.style.top = (size * 7.5) + "%";
        pillow.style.left = (size * 3.083) + "%";
        currentcouch.size = size;
    }
};

/*** Adding to cart + visual indication of items in cart ***/


/*** Numbers in the cart ***/


/*** Removing items from shopping cart ***/