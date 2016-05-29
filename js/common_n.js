$(document).ready(function () {

	// Init home page carousel
  var homeOwl = $("#home-carousel");
  homeOwl.owlCarousel({
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

  // Config home page slider
  function configSliderControls (elem) {
	  $(elem).on('click', function (e) {
	  	$(elem).removeClass('active');
	  	$(this).addClass('active');
	  	var dataToggle = $(this).data('toggle');
	  	$("#home-carousel .owl-dot")[dataToggle].click();
	  	e.preventDefault();
	  })

	  homeOwl.on('changed.owl.carousel', function(e) {
	 		var activeNumber = null;
	    $("#home-carousel .owl-dot").each(function (index) {
	    	if($(this).hasClass('active')){
	    		activeNumber = index;
	    	}
	    })
			$(elem)[activeNumber].click();
			e.preventDefault();
	  })
  }

	configSliderControls('.carousel-toggle');
	configSliderControls('.toggle-top-items');


	// Module photo page: carousel init
  var modOwl = $(".mod-carousel");
  modOwl.owlCarousel({
    items: 9,
    margin: 5,
    nav: true,
    navText: "",
    autoplayHoverPause: true,
    loop: true,
  });

  // carousel toggle active class
  function toggleActiveItem(elem) {
  	if($(elem).length) {
  		$(elem).click(function () {
  			$(elem).removeClass('active');
  			$(this).addClass('active');
  		})
  	}
  }

  toggleActiveItem('.mod-carousel-item');

  function checkTrashScroll() {
  	if ($(window).scrollTop() > 90) {
  		$('.trash-dropdown').addClass('trash-dropdown-fixed');
  	}else{
  		$('.trash-dropdown').removeClass('trash-dropdown-fixed');
  	}
  }
  checkTrashScroll();
  $(window).on('scroll', function() {
  	checkTrashScroll();
  })


})