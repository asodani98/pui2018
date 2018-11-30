/* Explore Button on Home Page */
/*
$("#toggleFunc").on("click", function() {
    $(".outer").toggle();
});
*/

$("#go").click(function(){
    $("#plane").animate({ left: "+=250px"}, 2000);
});

$("#stop").click(function(){
    $("#plane").stop();
});

$("#back").click(function(){
    $("#plane").animate({left: "-=250px"}, 2000);
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Initialize and add the map
function initMap() {
    var myLatLng = {lat: 9.53567, lng: 99.93567};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}

function initMap2() {
    var myLatLng = {lat: 19.07283, lng: 72.88261};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}

function initMap3() {
    var myLatLng = {lat: 51.50853, lng: -0.12574};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}

/* Scroll - About Page */
$("#intro").scroll(function() {
});

/* Facts Function - India */
var i = 0;
var txt = 'India is the largest country in South Asia and where my family is originally from.';
var speed = 50;

function fast1Writer() {
    if (i<txt.length) {
        document.getElementById("facts1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(fast1Writer, speed);
    }
}

var x = 0;
var txttwo = "It has a population of 1.39 billion, making it the largest democracy in the world";

function fast2writer() {
    if (x < txttwo.length) {
        document.getElementById("facts2").innerHTML += txttwo.charAt(x);
        x++;
        setTimeout(fast2writer, speed);
    }
}

var y = 0;
var txtthr = "India has more than 2,000 ethnic groups and has more mosques than any Muslim country.";

function fast3writer() {
    if (y < txtthr.length) {
        document.getElementById("facts3").innerHTML += txtthr.charAt(y);
        y++;
        setTimeout(fast3writer, speed);
    }
}

/* Facts Function - England */
var m = 0;
var etxt = 'In England, you can never be more than 115 km from the ocean.';

function efast1Writer() {
    if (m<etxt.length) {
        document.getElementById("efacts1").innerHTML += etxt.charAt(m);
        m++;
        setTimeout(efast1Writer, speed);
    }
}

var n = 0;
var etxttwo = "You can drive from England to France via an underwater tunnel that is around 50 km.";

function efast2writer() {
    if (n < etxttwo.length) {
        document.getElementById("efacts2").innerHTML += etxttwo.charAt(n);
        n++;
        setTimeout(efast2writer, speed);
    }
}

var o = 0;
var etxtthr = "French was the official language of England for about 300 years, from 1066 till 1362.";

function efast3writer() {
    if (o < etxtthr.length) {
        document.getElementById("efacts3").innerHTML += etxtthr.charAt(o);
        o++;
        setTimeout(efast3writer, speed);
    }
}

/* Fast Facts Function - Thailand */

var a = 0;
var ttxt = 'Thailand is the only Southeast Asian country that was never colonized by an European country.';

function tfast1Writer() {
    if (a<ttxt.length) {
        document.getElementById("tfacts1").innerHTML += ttxt.charAt(a);
        a++;
        setTimeout(tfast1Writer, speed);
    }
}

var b = 0;
var ttxttwo = "There are about 35,000 temples in Thailand. Thailand is truly a land of temples.";

function tfast2writer() {
    if (b < ttxttwo.length) {
        document.getElementById("tfacts2").innerHTML += ttxttwo.charAt(b);
        b++;
        setTimeout(tfast2writer, speed);
    }
}

var c = 0;
var ttxtthr = "Thailand used to be known as Siam, and it is the country where Siamese cats originated from.";

function tfast3writer() {
    if (c < ttxtthr.length) {
        document.getElementById("tfacts3").innerHTML += ttxtthr.charAt(c);
        c++;
        setTimeout(tfast3writer, speed);
    }
}

/*$("#toggleSmooth").on("click", function() {
    $(".outer").toggle("slow");
});

$("#slidingUp").on("click", function() {
    $(".outer").slideUp("slow");
});


$("#slidingUpHeight").on("click", function() {
    /!* You can customize your own animation with .animate() *!/
    $(".outer").animate({height: '20px'}, 'slow');
});

$("#slidingDownHeight").on("click", function() {
    /!* You can customize your own animation with .animate() *!/
    $(".outer").animate({height: '300px'}, 'slow');
});

$("#slidingUpDownHeight").on("click", function() {
    /!* You can chain animations such that they appear sequentially *!/
    $(".outer").animate({height: "20px"}, "slow")
        .animate({height: "50px"}, "slow");
});*/

