$(function(){
  $(".spmenu").on("click",function(){
    $(".sp-nav").toggleClass("menu-on-default");
    $(this).toggleClass("menu-on");
    $(".sp-wrap").toggleClass("menu-on");
  });
  $(window).resize(function() {
    var windowWidth = $(window).width();
    if(windowWidth > 991){
      $(".sp-nav").removeClass("menu-on-default");
      $(".spmenu").removeClass("menu-on");
      $(".sp-wrap").removeClass("menu-on");
    }
  });
  $(".sp-nav .slidedown").on("click",function(){
    $(this).toggleClass("on");
  });
});
