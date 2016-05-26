$(document).ready(function () {

 // Init carousel
  var owl = $("#home-carousel");
  var owl = owl.owlCarousel({
    items: 1,
    nav: true,
    navText: "",
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    //autoplaySpeed: 5000,
    //autoplayTimeout: 1000,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: false,
    loop: true,
  });


  $('.carousel-toggle').on('click', function () {
  	$('.carousel-toggle').removeClass('active');
  	$(this).addClass('active');
  	var dataToggle = $(this).data('toggle');
  	$("#home-carousel .owl-dot")[dataToggle].click();
  })

  owl.on('changed.owl.carousel', function(event) {
   		var activeNumber = null;
      $("#home-carousel .owl-dot").each(function (index) {
      	if($(this).hasClass('active')){
      		activeNumber = index;
      	}
      })
  		$('.carousel-toggle')[activeNumber].click();
   })






})