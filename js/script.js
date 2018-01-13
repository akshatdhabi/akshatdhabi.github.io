$(function() {
  particlesJS.load('particle', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  //calling hero resize function
  hero();
  //sidenav opener
  jQuery(window).resize(function() {
    var x = jQuery(window).height();
    if (x <= 300) {
      return x;
    } else {
      hero();
    }
  });
  $(".menu-icon").click(function() {
    sideNavOpen();
  });
  $(".closeButton").click(function() {
    sideNavClose();
  });



});



function hero() {
  $("#particle").css({
    width: jQuery(window).width(),
    height: jQuery(window).height()
  });
}

function sideNavOpen() {
  $(".sidebar").css({
    width: "250px"
  });
  $(".content").css({
    eft: "250px"
  });

}

function sideNavClose() {
  $(".sidebar").css({
    width: "0"
  });


}