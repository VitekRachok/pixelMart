$(window).on('scroll load', function() {

	var scrollX = $(this).scrollTop(),
		navHeight = $('.navbar-big').height();

	$('.navbar-big .scroll-block, .navbar-mini .scroll-block').css({
		"background" : "url('images/gradient.jpg') 0 -" + scrollX / 3 + "px"
	});

	if(scrollX >= navHeight){

		$('.navbar-mini').css('display','block');
		$('.navbar-mini').addClass('navbar-fixed-top');

	}else{
		$('.navbar-mini').removeClass('navbar-fixed-top');
		$('.navbar-mini').css('display','none');
	}


});
