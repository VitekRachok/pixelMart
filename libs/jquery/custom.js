$(window).on('scroll load', function() {

	var scrollX = $(this).scrollTop();

	$('.navbar-big .scroll-block').css({
		"background" : "url('images/gradient.jpg') 0 -" + scrollX / 3 + "px"
	});

	// $('.navbar-mini .scroll-block').css({
	// 	"background" : "url('images/gradient.jpg') 0 -" + scrollX / 3 + "px"
	// });

});


// $(document).ready(function() {

// 	var scr = $(window).scrollTop();

// 	// if(scr >= 20){
// 	// 	$('.navbar-big').toggleClass('hide');
// 	// }else{
// 	// 	$('.navbar-big').toggleClass('hide');
// 	// 	// $('.navbar-big').show(200);
// 	// }
// 	$('.navbar-big').on('click', function(){
// 		$(this).animate({
// 			display: "none"
// 		}, 200)
// 	})


// });
