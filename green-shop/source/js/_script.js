$(function(){

  // Toggle Header Menu

  $('.menu, .menu__overlay').click(function(){
    $('.menu__overlay, .menu__content').toggleClass('active');
  });

  // Toggle Header Expand Search

  $('.expand-search').hide();
  $('.expand__search').click(function(){
    $('.expand-search').show();
  })
  $('.expand-search__btn').click(function(){
    $('.expand-search').hide();
  })

  // Slider Home

  $('.feature-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false
  });

  // Slider Sale Product

  $('.feature-product__slider').slick({
    dots: false,
    infinite: false
  })

  // Slider Product Detail

  $('.overview-slider__main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.overview-slider__nav'
  });

  $('.overview-slider__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.overview-slider__main',
    focusOnSelect: true,
    infinite: true,
    arrows: false
  });

  // Toggle Product Grid

  $('.product-sort__btn').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })

  $('.product-sort__grid-btn').click(function(){
    $('.product-list__grid').removeClass('product-list__list');
  })

  $('.product-sort__list-btn').click(function(){
    $('.product-list__grid').addClass('product-list__list');
  })

  // Product Detail Value
  var count = 1;
  $('.product-count__decrease').click(function(){
    count--;
    if(count <= 0){
      count = 1
    }
    $('.product-count__value').text(count);
  })
  $('.product-count__increase').click(function(){
    count++;
    $('.product-count__value').text(count);
  })

})
