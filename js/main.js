// making my scroll button

$("#scroll-down").click(function () {
    let aboutOffset = $("#home-about").offset().top;
    $("body").animate({ scrollTop: aboutOffset - 200 }, 1500)
})
// adjust navbar while scrolling.
let index = 0;
$(window).scroll(function () {
    let topOffset = $(window).scrollTop();
    if (topOffset > 300) {
        $("nav").removeClass("bg-transparent");
        $("nav").removeClass("navbar-dark");
        $("nav").addClass("bg-light");
        $("nav").addClass("navbar-light");
        $(".nav-link").addClass("navScroll-link");
        $("#scroll-img").attr("src", "images/bakery-color.png")
        $(".scroll-up").fadeIn(750)
        if (topOffset > $("#about-adv").offset().top - 100) {
            for (index; index < 1; index++) {

                jQuery(function ($) {
                    "use strict";

                    var counterUp = window.counterUp["default"];

                    var $counters = $(".counter");


                    $counters.each(function (ignore, counter) {
                        counterUp(counter, {
                            duration: 3000,
                            delay: 16
                        });
                    });

                });
            }
        }

    }

    else {
        $("nav").addClass("bg-transparent");
        $("nav").addClass("navbar-dark");
        $("nav").removeClass("bg-light");
        $("nav").removeClass("navbar-light");
        $(".nav-link").removeClass("navScroll-link");
        $("#scroll-img").attr("src", "images/bakery-light-1.png")
        $(".scroll-up").fadeOut(750)
    }
})

// scroll-up
$(document).ready(function () {
    $(".scroll-up").hide(0000);
})
$(".scroll-up").click(function () {
    $("body").animate({ scrollTop: "0" }, 1500);


})

//side-bar color boxes
let colorsArray = ["#218fe6", "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4",
    "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"];
for (var i = 0; i < colorsArray.length; i++) {
    $(".color-box").eq(i).css("background-color", colorsArray[i]);
}
$(".color-box").click(function () {
    $(".btn1 ,#about-counter,.quotePost,.btn-contact").css("background-color", $(this).css("background-color"));
    $(".h-a-icons .icon-circle i,#change").css("color", $(this).css("background-color"))
})

$("#toggle-sideBar").click(function () {
    let sideWidth = $(".side-bar").outerWidth();
    if ($("#toggle-sideBar").hasClass("fa-cogs")) {
        $("#toggle-sideBar").removeClass("fa-cogs hi-there")
        $("#toggle-sideBar").addClass("fa-times text-danger")
        $(".fixed-bar").css("right", 0);
    }
    else if ($("#toggle-sideBar").hasClass("fa-times")) {
        $("#toggle-sideBar").addClass("fa-cogs ")
        $("#toggle-sideBar").removeClass("fa-times text-danger")
        $(".fixed-bar").css("right", -sideWidth);
    }


})

//about html page counter section 

