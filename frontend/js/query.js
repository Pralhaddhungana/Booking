// function myFunction() {

//     list = document.getElementById("form-inline-id");
//     list.classList.add("mySearch");
// }

const navbarpane = document.getElementById("form-inline-id");
const sticky = navbarpane.offsetTop;
const overlay = document.getElementById("overlay-box");

function myFunction() {
    // alert("Hi there");
    if (window.scrollY >= 282) {
        navbarpane.classList.add("sticky");
        overlay.classList.add("asd");
    } else {
        navbarpane.classList.remove("sticky");
        overlay.classList.remove("asd");


    }
}

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

$(".testimonial-slider").slick({
    arrow: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});