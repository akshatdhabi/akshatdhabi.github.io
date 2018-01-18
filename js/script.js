$(function() {

  //Screen resize function
  var sideBarOpen = false;

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
    closeSidebar();
  });

  $(".menu_mobile").click(function(event) {
    openSidebar();
  });


  $(".close").click(function() {
    closeSidebar();
  });
  //sidebar open
  function openSidebar(event) {
    sideBarOpen = true;

    $(".sidebar").css({
      width: jQuery(window).width() / 1.5
    });

    $(".sidebar ul").css({
      transition: "all 0.2s 0.3s",
      opacity: 1
    });

    $("body").css({
      overflowY: "hidden"
    });

  }

  function closeSidebar() {
    sideBarOpen = false;
    $(".sidebar").css({
      width: 0
    });

    $(".sidebar ul").css({
      transition: "0s",
      opacity: 0
    });
    $("body").css({
      overflowY: "auto"
    });
  }

  //sidedbar nav_scroll
  $(window).on("scroll", function() {
    if ($(this).scrollTop()) {
      $("nav").css({
        background: "#0d1f22"
      });
    } else {
      $("nav").css({
        background: "none"
      });
    }
  });

  //calling particles
  particlesJS.load('particles', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

});