$(document).ready(function(){
	$('.owl-carousel1').owlCarousel({
	  items:1,
	  // autoplay:true,
	     loop:true,
	     nav:true,
	     navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	     responsive:{
	         0:{
	             items:1
	         },
	         600:{
	             items:1
	         },
	         1000:{
	             items:1
	         }
	     }
	 })
});

$(document).ready(function(){
	$('.owl-carousel2').owlCarousel({
	  items:1,
	  // autoplay:true,
	     loop:true,
	     nav:true,
	     navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	     responsive:{
	         0:{
	             items:1
	         },
	         600:{
	             items:1
	         },
	         1000:{
	             items:1
	         }
	     }
	 })
});

$(document).ready(function(){
	$('.owl-carousel3').owlCarousel({
	  items:1,
	  // autoplay:true,
	     loop:true,
	     nav:true,
	     navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	     responsive:{
	         0:{
	             items:1
	         },
	         600:{
	             items:3
	         },
	         1000:{
	             items:4
	         }
	     }
	 })
});

$(document).ready(function(){
    $('.owl-carousel4').owlCarousel({
        items:1,
        // autoplay:true,
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});

$(document).ready(function(){
    $('.owl-carousel5').owlCarousel({
        items:1,
        // autoplay:true,
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});

$('.clickable1').bind('click', function (ev) {
    var $div = $(ev.target);
    var $display = $div.find('.display');

    var offset = $div.offset();
    var x = ev.clientX - offset.left;

    $('.progress1').width(x);
});

$('.clickable2').bind('click', function (ev) {
    var $div = $(ev.target);
    var $display = $div.find('.display');

    var offset = $div.offset();
    var x = ev.clientX - offset.left;

    $('.progress2').width(x);
});

$('.clickable3').bind('click', function (ev) {
    var $div = $(ev.target);
    var $display = $div.find('.display');

    var offset = $div.offset();
    var x = ev.clientX - offset.left;

    $('.progress3').width(x);
});

 $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });
