 $(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 300)
    $(".navigation-block").addClass("scrolled");
  else
    $(".navigation-block").removeClass("scrolled");
});