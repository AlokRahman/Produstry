$(function ($) {
  $(document).ready(function () {
    if (window.innerWidth < 768) {
      $(".container_switch")
        .addClass("container-fluid")
        .removeClass("container");
    }
  });

  // preloader js
  var preloader = document.getElementById("loading");
  function preloader101() { }

  var delayInMilisecondds = 3000;
  setTimeout(function () {
    preloader.style.display = "none";
  }, delayInMilisecondds);

  //menu js
  $(".menu_right_icon").on("click", function () {
    $(".logo").toggleClass("logo_left");
    $("#myNav ul").toggleClass("menu_hide");
  });

  //banner js
  $(".carousel").carousel({
    interval: 4000,
  });

  $(".carousel").carousel("cycle");

  //service_slide js
  $(".service_slide").slick({
    slidesToShow: 3,
    autoplay: false,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 575, // tablet breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023, // mobile breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // porfolio part
  $(".portfolio_slick").slick({
    slidesToShow: 4,
    autoplay: false,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 480, // tablet breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // mobile breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // counter js
  $(".counter_number").counterUp({
    time: 4000,
  });

  //blog_slider
  $(".blog_slider").slick({
    infinite: true,
    autoplay: false,
    dots: false,
    arrows: true,
    nextArrow: $(".abt_team_right"),
    prevArrow: $(".abt_team_left"),
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //testimonial slider
  $(".testimonial_content_slider").slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: ".testimonial_img_slider",
  });

  $(".testimonial_img_slider").slick({
    slidesToShow: 3,
    arrows: false,
    asNavFor: ".testimonial_content_slider",
    centerMode: true,
    centerPadding: "0px",
  });
});

// brand slider
$(".brand_slider").slick({
  slidesToShow: 5,
  arrows: false,
  centerMode: true,
  centerPadding: "0px",
  autoplay: true,
  infinite: true,

  responsive: [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});
// about us page  js ***********************************************************

// our team slider
$(".team_slick").slick({
  infinite: true,
  autoplay: false,
  dots: false,
  arrows: true,
  nextArrow: $(".abt_team_right"),
  prevArrow: $(".abt_team_left"),
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
