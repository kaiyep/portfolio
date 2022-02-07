//$(document).foundation()

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}





/* Active state in menu on scroll */

/*
$(document).ready(function() {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass("a-active");
    })
    $(this).addClass("a-active");

    var target = this.hash,
      menuresponsive = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 500, 'swing', function() {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});


function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#menuleft a').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#menuleft ul li a').removeClass("a-active");
      currLink.addClass("a-active");
    } else {
      currLink.removeClass("a-active");
    }
  });
}
*/


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-img", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-img";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

