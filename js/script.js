$(function() {

  var menuCounter = 0;
  //Screen resize function

  function screen() {
    $("#hero").css({
      width: jQuery(window).width(),
      height: jQuery(window).height()
    });
    $("#particles").css({
      width: jQuery(window).width(),
      height: jQuery(window).height()
    });
  }
  screen();

  jQuery(window).resize(function() {
    screen();
    if (menuCounter == 1) {
      openSidebar();
    }
  });
  $(".menu_mobile").click(function() {
    openSidebar();
  });



  $(".close").click(function() {
    closeSidebar();
  });
  //sidebar open

  function openSidebar() {
    menuCounter = 1;
    $(".sidebar").css({
      width: jQuery(window).width()
    });

    $(".sidebar ul").css({
      opacity: 1
    });
  }

  function closeSidebar() {
    menuCounter = 0;
    $(".sidebar").css({
      width: 0
    });
    $(".sidebar ul").css({
      opacity: 0
    });
  }

  //calling particles
  particlesJS.load('particles', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

});