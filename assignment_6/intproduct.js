/*** Page updates when selecting product details ***/

var currentcouch;
var cart;
var number;
var fillpillow;
var pillow;
var products;
var cartitems;
//function getLocalData(name)
//{
    //return localStorage.getItem(name)
//}
///function setLocalData(name,value)
//{
    //if (value!=null)
      //  localStorage.setItem(name,value)
    //else
  //      localStorage.removeItem(name);
//}

    //function cart_initCart ()
    //{
      //  cartObj = [];
        //cartCI = 0; //counter
        // Check in browser memory if cart is there
        //if (localStorage.getItem('cartObj')!=null)
        //{
            //if previous cart is present, load it
          //  cartCI = localStorage.getitem('cart');
            //cartObj = JSON.parse(localStorage.getItem('cart'));
        //}
       // else
       // {
         //   console.log("Cart is empty! Add an item to view in cart");
        //}
    //}

    //function addItemInCart (color,size,fill,quantity) {
      //  var newRow = new Object();
        //newRow["color"] = currentcouch.color;
        //newRow["size"] = currentcouch.size;
        //newRow["fill"] = currentcouch.fill;
        //newRow["quantity"] = currentcouch.quantity;

        //cartObj[cartCI++] = newRow;

        //cartObj = JSON.stringify(localStorage.setItem('cart'));
        //cartCI = localStorage.setItem('cart');
    //}

/*** Couch Pillow ***/
    var colorImages = {
        'afterschool': "https://i.imgur.com/6yY1N9x.png",
        'morning': "https://png2.kisspng.com/20180614/zjq/kisspng-yellow-throw-pillows-cushion-couch-sisustus-5b22dcb7c74787.9292322115290113838163.png",
        'cozydenim': "https://mbtskoudsalg.com/images/blue-pillow-png-2.png",
        'rainyday': "https://i.imgur.com/dovkLOB.png",
    };

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
            pillow.style.left = (size * 3.083) + "%";
            currentcouch.size = size;
        }

    if(localStorage.getItem["cart"] != null) {
        cart = [];
        localStorage.setItem("cart", "[]");
    } else {
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    function addToCart() {
            cartItems = JSON.parse(localStorage["cart"]);
            cart.push(currentcouch);
            //move to local storage
            var cartString = JSON.stringify(cart);
            localStorage.setItem("cart", cartString);
            console.log(localStorage.getItem['cart']);
        }

        function itemnum() {
            return cart.length;
        }