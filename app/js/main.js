$(function () {

  document.addEventListener('click', event => {
    if (event.target.matches('button')) {
      event.target.focus()
    }
  });

  $('.slider-blog__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.article-partner__inner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
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




  // let mixer2 = mixitup('.new-design__content');



});