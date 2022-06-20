// Hidden navbar for about page

const hideNavbar = document.getElementById("hide-nav-bar");

function hideFunction() {
    if (window.scrollY >= 65) {
        // hideNavbar.style.display = block;
        hideNavbar.classList.add("hidden-nav-bar");
    } else {
        // hideNavbar.style.display = none;
        // hideNavbar.style.visibility = 'hidden';
        hideNavbar.classList.remove("hidden-nav-bar");
    }
}

const header = document.getElementById("top-header");
const topNav = document.getElementById("nav-bar");
// const headings = document.getElementById("headingsWrap");
const navbarpane = document.getElementById("form-inline-id");
const overlay = document.getElementById("overlay-box");

function myFunction() {
    // alert("Hi there");
    if (window.innerWidth < 1000) {
        if (window.scrollY >= 0) {
            header.classList.remove("headersticky");
            topNav.classList.remove("top-nav-style");
        }

    } else if (window.innerWidth > 1020) {
        // alert("dfghj");

        if (window.scrollY >= 0) {
            header.classList.add("headersticky");
            topNav.classList.add("top-nav-style");
            // headings.classList.add("headingsWrapping");
        } else {
            header.classList.remove("headersticky");
            topNav.classList.remove("top-nav-style");
            // headings.classList.remove("headingsWrapping");
        }
        if (window.scrollY >= 120) {
            navbarpane.classList.add("sticky");
            overlay.classList.add("asd");
        } else {
            navbarpane.classList.remove("sticky");
            overlay.classList.remove("asd");
        }
    } else return 0;

}
// Cinema page
$(document).ready(function () {
    $('.cinema-slick-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    }).slickAnimation();
});
$(".btn-collection").slick({
    speed: 200,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }

    ]
});

function clickLangFilter() {
    if (document.getElementById("language-filter-id").style.display === "none") {
        document.getElementById("language-filter-id").style.display = "block";
    } else {
        document.getElementById("language-filter-id").style.display = "none";
    }
}

function clickGenreFilter() {
    if (document.getElementById("genre-filter-id").style.display === "none") {
        document.getElementById("genre-filter-id").style.display = "block";
    } else {
        document.getElementById("genre-filter-id").style.display = "none";
    }
}

function clickFormatFilter() {
    if (document.getElementById("format-filter-id").style.display === "none") {
        document.getElementById("format-filter-id").style.display = "block";
    } else {
        document.getElementById("format-filter-id").style.display = "none";
    }
}

$(".Cinema-halls").slick({
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }

    ]
});

// index page

$(".slick-content").slick({
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

    ]
});
$(".related-hotels-items").slick({
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

    ]
});

$(".testimonial-slider").slick({
    arrow: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$("#target").zoom();


// Signup page

function customGender() {
    if (document.getElementById("custom-radio").checked) {
        // optionalGender.classList.add("showGender");
        document.getElementById("third-gender").style.display = "block";
    } else {
        document.getElementById("third-gender").style.display = "none";
    }
}

//Book Info page

function GuestAccount() {
    if (document.getElementById("book-for-guest").checked) {
        document.getElementById("guestDetail").style.display = "block";
    } else {
        document.getElementById("guestDetail").style.display = "none";
    }
}
// Index page gps location
function Mylocation() {
    if (document.getElementById("location-track-id").click) {
        document.getElementById("detect-my-location").style.display = "block";
    } else {
        document.getElementById("detect-my-location").style.display = "none";
    }
    var ignoreClickOnMeElement = document.getElementById('location-track-id');

    document.addEventListener('click', function (event) {
        var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        if (!isClickInsideElement) {
            document.getElementById("detect-my-location").style.display = "none";
        }
    });
}

// Geo Location javascript
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(savePosition, positionError, {
            timeout: 10000
        });
    } else {
        //Geolocation is not supported by this browser
    }
}

// handle the error here
function positionError(error) {
    var errorCode = error.code;
    var message = error.message;

    alert(message);
}

function savePosition(position) {
    $.post("geocoordinates.php", {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    });
}