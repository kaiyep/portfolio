$(document).foundation()

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}


/* Active state in menu on scroll */

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
