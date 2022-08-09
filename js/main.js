$(function(){
  $('.ourwork__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-left.svg"></img></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/arrow-right.svg"></img></button>',
  });
  $('.video__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});
