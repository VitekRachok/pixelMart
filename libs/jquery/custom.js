$(window).scroll(function() {

	var scrollX = $(this).scrollTop();

	$('.scroll-block').css({
		"background-position-y" : "-" + scrollX / 3 + "px"
	});

});