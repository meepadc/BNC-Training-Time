// $(document).ready(function() {
//  $('.owl-carousel').owlCarousel({
//   items: 1
//  })
// });

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	    loop:true,	    
	    nav:true,
	    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i> Prew', 'Next <i class="fa fa-chevron-right" aria-hidden="true"></i>'],
	    // autoplay:true,
   		// autoplayTimeout:1000,
    	// autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:4
	        }
	    }
	});
});

// push menu
$(document).ready(function() {
    $('#show_menu').click(function() {
            $('#menu_box').toggle("slide");
    });
});
// end push menu
  // $(document).ready(function () {
  //          var galleryTop = new Swiper('.gallery-top', {
  //             nextButton: '.swiper-button-next',
  //             prevButton: '.swiper-button-prev',
  //             spaceBetween: 10,
  //         });
  //         var galleryThumbs = new Swiper('.gallery-thumbs', {
  //             // spaceBetween: 10,
  //             centeredSlides: true,
  //             slidesPerView: 'auto',
  //             touchRatio: 0.2,
  //             slideToClickedSlide: true,
  //             direction:'vertical',
  //             // autoplay: 5000
  //         });
  //         galleryTop.params.control = galleryThumbs;
  //         galleryThumbs.params.control = galleryTop;      
  // });

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

