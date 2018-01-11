$(function() {
  particlesJS.load('particle', 'particlesjs.json', function() {
    console.log('callback - particles.js config loaded');
  });

  function hero() {
    $("#particle").css({
      width: jQuery(window).width(),
      height: (jQuery(window).height() / 4) * 3

    });

  }

  hero();


  jQuery(window).resize(function() {
    var x = jQuery(window).height();
    if (x <= 300) {
      return x;
    } else {
      hero();
    }
  });






});