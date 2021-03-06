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

	// Init instagram carousel
  var insOwl = $("#ins-slider");
  insOwl.owlCarousel({
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
  var modOwl = $(".main-mod-carousel .mod-carousel");
  modOwl.owlCarousel({
    responsive: {
      0: {
        items: 3
      },
      380: {
        items: 4
      },
      480: {
        items: 5
      },
      600: {
        items: 6
      },
      767: {
        items: 7
      },
      992: {
        items: 9
      }
    },
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
  		$('.navbar-big .trash-dropdown').addClass('trash-dropdown-away');
  	}else{
  		$('.navbar-big .trash-dropdown').removeClass('trash-dropdown-away');
  	}
  }
  checkTrashScroll();
  $(window).on('scroll', function() {
  	checkTrashScroll();
  })

  if($('#sub-contact-form').length) {
    $('#sub-contact-form').validate({
      messages: {
        userName: "Введите Ваше имя",
        userEmail: {
         required: "Введите електронную почту",
         email: "Пожалуйста, введите корректную почту",
       },
       userMessage: "Введите свое сообщение",
       userCode: "Введите код"
     }
   });
  }


  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).parents('.panel').addClass('open-panel'); 
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).parents('.panel').removeClass('open-panel');
  });

  
  // init owl-carousel in popup
  $('#quick-view').on('shown.bs.modal', function (e) {
      var modalOwl = $("#quick-view .mod-carousel");
      modalOwl.owlCarousel({
        responsive: {
          0: {
            items: 3
          },
          380: {
            items: 4
          },
          480: {
            items: 5
          },
          600: {
            items: 6
          },
          767: {
            items: 7
          },
          992: {
            items: 9
          }
        },
        margin: 5,
        nav: true,
        navText: "",
        autoplayHoverPause: true,
        loop: true,
      });
      $('.modal-open .photo-carousel-wrap').css('overflow', 'visible');
  })  



})