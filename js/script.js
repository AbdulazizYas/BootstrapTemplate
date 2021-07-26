$(function (){
  'use strict';

  //Adjust Slider Height

  const winH = $(window).height(),
        navH = $('.navbar').innerHeight(),
        uppH = $('.upper-bar').innerHeight();
  $('.slider,.carousel-item').height(winH - (navH + uppH))

  //Works Shuffle
  $('.works ul li').on('click',function (){
    $(this).addClass('active').siblings().removeClass('active');
  $('.works .shuffle-img img').fadeOut(100);
  if($(this).data('class') == 'all'){
    $('.works .shuffle-img img').fadeIn(100);
  }else{
    $($(this).data('class')).fadeIn(100)

  }
  })
})