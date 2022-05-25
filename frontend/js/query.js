// function myFunction() {

//     list = document.getElementById("form-inline-id");
//     list.classList.add("mySearch");
// }



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
/**
 * Pop Up modal in search button
 * 
 * const searchModal = document.getElementById("btn-search");

function myFunctions() {
    searchModal.classList.add("popup");
} 
 */


/**
 * Toggle Text in newsletter subscribe button
 * 
 * var toggleText = document.getElementById("news1");
var toggleTexts = document.getElementById("news2");

function toggleFunction() {
    if (toggleText.innerHTML === "Save time, save money!" || toggleTexts.innerHTML === "Sign up and we'll send the best deals to you") {
        toggleText.innerHTML = "Sign up and we'll send the best deals to you";
        toggleTexts.innerHTML = "Save time, save money!";
    } else {
        toggleText.innerHTML = "Save time, save money!";
        toggleTexts.innerHTML = "Sign up and we'll send the best deals to you!";
    }
}
 */


// var toggleText = document.getElementById("news1");
// var a = toggleText.innerText;
// var toggleTexts = document.getElementById("news2");
// var b = toggleTexts.innerText;

// function toggleFunction() {
//     if (toggleText.innerText == a || toggleTexts.innerText == b) {
//         toggleText.innerText = b;
//         toggleTexts.innerText = a;
//     } else {
//         toggleText.innerText = a;
//         toggleTexts.innerText = b;
//     }
// }




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





var randomNumberBetween1to5 = Math.floor(Math.random() * 5) + 1;
var noOfGuesses = 3;
var remainingCount = noOfGuesses--;
var i = 0;

function randomCheck() {
    // alert(inputRandomNumber);

    var inputRandomNumber = document.getElementById("inputNumber").value;

    document.getElementById("demo").innerHTML = randomNumberBetween1to5;

    for (i = 0; i <= 2; i++) {
        if (randomNumberBetween1to5 == inputRandomNumber) {
            alert("Your guess is Correct..");
        } else if (remainingCount < 1) {
            alert("Sorry no more tries....");
            document.getElementById("inputNumber").disabled = "true";
            document.getElementById("submit").disabled = "true";
        } else {
            alert("Sorry Incorrect ........Remaining Attempts:" + remainingCount);
            remainingCount--;
        }
        return 0;
    }
}