$(window).on('scroll load', function() {

	var scrollX = $(this).scrollTop();

	$('.scroll-block').css({
		"background" : "url('images/gradient.jpg') 0 -" + scrollX / 3 + "px"
	});

});