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

  // var mixer = mixitup('.product-week__content');

  // var containerEl1 = document.querySelector('.product-week__content');
  // var containerEl2 = document.querySelector('.new-design__content');

  // var config = {
  //   controls: {
  //     scope: 'local'
  //   }
  // };
  // var mixer1 = mixitup(containerEl1, config);
  // var mixer2 = mixitup(containerEl2, config);

  $('#Container1').mixItUp({
    selectors: {
      filter: '.product-filter__btn'
    }
  });

  // $('#Container2').mixItUp({
  //   selectors: {
  //     filter: '.product-filter__btn'
  //   }
  // });

});