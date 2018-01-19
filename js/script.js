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
  //sidebar close focus is lost
  $('body').click(function() {
    if (sideBarOpen == true) {
      closeSidebar();
    }
  });
  //opening link when clicking li parent of a link
  $('.sidebar ul li').click(function(event) {
    event.stopPropagation();
    $(this).find('a').trigger('click');
  });
  //handler for link clicked via  li
  $('a').click(function(event) {
    var url = $(this).attr('href');
    window.location.href = url;
    return false;
  });
  //calling hero screen resize
  screen();

  jQuery(window).resize(function() {
    screen();
    closeSidebar();
  });

  $(".menu_mobile").click(function(event) {
    event.stopPropagation();
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