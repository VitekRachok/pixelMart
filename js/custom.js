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


$(document).ready(function(){
	$(function(e){
		$(".choose-another-city").click(function(e) {
			e.preventDefault();
			$("#question-city").modal('hide');
			setTimeout(function(){
				$("#choice-city").modal('show');
			}, 400)
		});
	});
	$(function(e){
		$(".buy-one-click").click(function(e) {
			e.preventDefault();
			$("#quick-view").modal('hide');
			setTimeout(function(){
				$("#buy-one-cl").modal('show');
			}, 350)
		});
	});
	$(function(e){
		$(".in-detail").click(function(e) {
			e.preventDefault();
			$("#quick-view").modal('hide');
			setTimeout(function(){
				$("#product-info").modal('show');
			}, 350)
		});
	});

});

$(document).ready(function(){
	$("#filter .dropdown-menu").on('click', function(e) {
		e.stopPropagation();
	});
});

$(document).ready(function(){

	var navMenu = $('.nav-center, .contacts-header'),
		navMenuBig = $('.navbar-big .nav-center, .navbar-big .contacts-header'),
		navSearch = $('.nav-search'),
		searchBlock = $('.search-block'),
		searchInput = $('.search-input'),
		searchList = $('.search-list');

	navSearch.on('click', function(e){

		e.preventDefault();
		var thisEl = $(this);

		thisEl.parents('.navbar').find(navMenu).animate({
			'opacity': 0
		},200)
		setTimeout(function(){
			thisEl.parents('.navbar').find(navMenu).css('display', 'none');
		},200);

		setTimeout(function(){
			thisEl.parents('.navbar').find(searchBlock).css('display', 'block').animate({
				'opacity': 1
			},200)
		},200);

	})

	searchInput.keyup(function(){
		$(this).next(searchList).css('display', 'block').animate({
			'opacity': 1
		},200)
	})

	searchBlock.find('.close').on('click', function(){
		(searchBlock && searchList).animate({
			'opacity': 0
		},200)
		setTimeout(function(){
			searchBlock.css('display', 'none');
		},200);
		setTimeout(function(){
			navMenu.css('display', 'block').animate({
					'opacity': 1
				},200)
		},200);
	});

	$(window).on('scroll load', function() {

		var scrollX = $(this).scrollTop(),
			navHeight = $('.navbar-big').height();

		if(scrollX >= navHeight){
			$('.navbar-big .search-block').css({
				'display': 'none'
			});
			navMenuBig.css({
				'display': 'block',
				'opacity': 1
			})
		}
	});
});

$(window).on('resize load', function() {

	var bigImg = $('.instagram-img.big'),
		smallImg = $('.instagram-img.small'),
		bigImgHeigh = bigImg.height(),
		smallImage = smallImg.find('img');

		smallImg.height(bigImgHeigh/2-15);
		smallImage.css({
			'margin-top': (smallImg.height()-smallImage.height())/2
		});
});