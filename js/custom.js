$(window).on('scroll load', function() {

	var scrollX = $(this).scrollTop(),
		navHeight = $('.navbar-big').height(),
		duration = 200;

	$('.navbar-big .scroll-block, .navbar-mini .scroll-block').css({
		"background" : "url('images/gradient.jpg') 0 -" + scrollX / 3 + "px"
	});

	if(scrollX >= navHeight){

		$('.navbar-mini').css('display','block');
		$('.navbar-mini').addClass('navbar-fixed-top');
		setTimeout(function(){
			$('.navbar-big .trash').removeClass('open');
		},200);

	}else{
		$('.navbar-mini .trash').removeClass('open');
		$('.navbar-mini').removeClass('navbar-fixed-top');
		$('.navbar-mini').css('display','none');
	}

});



	$(function() {
		var availableTags = [
			"Москва",
			"Санкт-Петербург",
			"Новосибирск",
			"Екатеренбург",
			"Нижний Новгород",
			"Уфа",
			"Красноярск",
			"Казань",
			"Самара",
			"Челябинск",
			"Омск",
			"Ростов-на-Дону",
			"Пермь",
			"Волгоград",
			"java",
			"java",
			"java",
			"java"
		],
		appTo = $('#auto-comlete');
		$("#city-res" ).autocomplete({
			source: availableTags,
			appendTo: appTo,
			messages: {
					noResults: '',
					results: function() {}
				}
		});
		$('.ui-helper-hidden-accessible').hide();
	});
