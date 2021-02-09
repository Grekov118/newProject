$(function () {

  document.addEventListener('click', event => {
    if (event.target.matches('button')) {
      event.target.focus()
    }
  });


  $('.menu__btn').on('click', function () {
    $('.header').toggleClass('header--active');
    $('body').toggleClass('lock');

  });


  $('.slider-blog__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  });

  $('.article-partner__inner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots:true,
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 439,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
    ]
  });

  // var mixer = mixitup('.product-week__content');

  let productWeek = mixitup('.product-week__content', {
    selectors: {
      control: '.product-week .product-filter__btn'
    }
  });

  let newDesign = mixitup('.new-design__content', {
    selectors: {
      control: '.new-design .product-filter__btn'
    }
  });


});