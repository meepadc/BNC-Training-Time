$(document).ready(function() {
 $('.owlCarousel').owlCarousel({
  items: 1
 })
});

// Menu mobile
$(document).ready(function() {
    var removeClass = true;
    $menuLeft = $('.menu_mobile_pushmenu_left');
    $nav_list = $('.menu_mobile_button');

    $nav_list.click(function(e) {
        $(this).toggleClass('active');
        $menuLeft.toggleClass('pushmenu-open');
        removeClass = false;
    });

    $('html').click(function () {
          if (removeClass) {
              $('.menu_mobile_pushmenu_left').removeClass('pushmenu-open');
               $('.menu_mobile_button').removeClass('active');
          }
          removeClass = true;
    });

    $('.menu_mobile_list_inner .parent').find('.menu_mobile_list_submenu').hide();

    // Accordion
    $('.menu_mobile_list_inner .parent').find('.fa-icon-action').click(function () {
      var next = $(this).next();
      next.slideToggle('fast');
      $('.menu_mobile_list_submenu').not(next).slideUp('fast');
      removeClass = false;
    });
    $('.menu_mobile_list_inner li .fa-icon-action').on('click', function(){
      $('.menu_mobile_list_inner li .fa-icon-action.active').removeClass('active');
      $(this).addClass('active');
      removeClass = false;
    });
});
// End Menu mobile

