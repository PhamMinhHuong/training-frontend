//=require node_modules/jquery/dist/jquery.min.js
//=require node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
//=require _test.js
//=require node_modules/slick-carousel/slick/slick.min.js

$(function(){

  $('.menu, .menu__overlay').click(function(){
    $('.menu__overlay, .menu__content').toggleClass('active');
  });

  $('.expand-search').hide();
  $('.expand__search').click(function(){
    $('.expand-search').show();
  })
  $('.expand-search__btn').click(function(){
    $('.expand-search').hide();
  })
  $('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false
  });
})
