let slider = $(".production__slider");
let arrowPrev = $("#production-prev");
let arrowNext = $("#production-next");

let testimonialsSlider = $("#testimonials-slider");
let testimonialsPrev = $("#testimonials-prev");
let testimonialsNext = $("#testimonials-next");

$(document).ready(function() {
  slider.slick({
    arrows: false,
    slidesToShow: 4,
    responsive: [{
      breakpoint: 960,
      settings:{
        slidesToShow: 1
      }
    }]
  });

  arrowPrev.on("click", function(event) {
    event.preventDefault();
    slider.slick("slickPrev");
  });

  arrowNext.on("click", function(event) {
    event.preventDefault();
    slider.slick("slickNext");
  });

  slider.on("afterChange", function(event, slick, currentSlide) {
    const thumbs = document.querySelector(".production__slider");

    thumbs.addEventListener("click", (localEvent) => {
      const target = localEvent.target.closest("img");

      if (target.tagName === "IMG") {
        changeImage(target);
      }
    });
  });

  const largeImg = document.getElementById("production-active__img");

  function changeImage(target) {
    largeImg.src = target.src;
  };
});

$(document).ready(function() {
  testimonialsSlider.slick({
    arrows: false,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 769,
      settings:{
        slidesToShow: 2
      }
    }, {  
        breakpoint: 550,
        settings: {
          slidesToShow: 1
      } 
    }]
  });

  testimonialsPrev.on("click", function(event) {
    event.preventDefault();
    testimonialsSlider.slick("slickPrev");
  });

  testimonialsNext.on("click", function(event) {
    event.preventDefault();
    testimonialsSlider.slick("slickNext");
  });
});

