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
		"Волгоград"
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

	$('.choice-manually a').on('click', function(e){
		e.preventDefault();
		var contents = $(this).html();

		$(this).parents('.modal-body').find('#city-res').val(contents);
		$("#choice-city").modal('hide');
	})
});

$(document).ready(function(){

	$('.jump').on('input propertychange', function(e) {
		var elem = $(e.target),
			value = elem.val(),
			caret = elem.caret(),
			newValue = value.replace(/[^0-9]/g, ''),
			valueDiff = value.length - newValue.length;

		if (valueDiff) {
			elem
				.val(newValue)
				.caret(caret.start - valueDiff, caret.end - valueDiff);
		}

	});

});

$(document).ready(function(){

	// $(function(e){
	// 	$(".choose-another-city").click(function(e) {
	// 		e.preventDefault();
	// 		$("#question-city").modal('hide');
	// 		$('#question-city').on('hidden.bs.modal', function (e) {
	// 			$("#choice-city").modal('show');
	// 		})
	// 	});
	// });
	$(function(e){
		$(".buy-one-click").click(function(e) {
			e.preventDefault();
			$("#quick-view").modal('hide');
			setTimeout(function(){
				$("#buy-one-cl").modal('show');
			}, 400);
		});
	});
	$(function(e){
		$(".detail").click(function(e) {
			e.preventDefault();
			$("#quick-view").modal('hide');
			setTimeout(function(){
				$("#product-info").modal('show');
			}, 400)
		});
	});

	//MASK

	jQuery(function($){
		$(".mask").mask("+ 9 (999) 999-99-99");
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
		searchBlockDesktop = $('.search-block.desktop'),
		searchBlockMini = $('.search-block.mini'),
		searchInput = $('.search-input'),
		searchList = $('.search-list');

		//SHOW SEARCH BLOCK IN HEADER

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
			thisEl.parents('.navbar').find(searchBlockDesktop).css('display', 'block').animate({
				'opacity': 1
			},200)
			thisEl.parents('.navbar').find(searchInput).focus();
		},200);

	});

	//HIDE SEARCH BLOCK IN HEADER

	searchBlockDesktop.find('.close').on('click', function(){
		(searchBlockDesktop).animate({
			'opacity': 0
		},200)
		setTimeout(function(){
			searchBlockDesktop.css('display', 'none');
		},200);
		setTimeout(function(){
			navMenu.css('display', 'block').animate({
					'opacity': 1
				},200)
		},200);
	});

	//SHOW SEARCH LIST

	$('.search-block input').focus(function(){

		var focusEl = $(this).parent().find(searchList);

		focusEl.css({
			display: 'block'
		}).animate({
			opacity: 1
		},100)
		$(this).focusout(function() {
			focusEl.animate({
				opacity: 0
			},100);
			setTimeout(function(){
				focusEl.css({
					display: 'none'
				})
			},100);
		})
	})

	function showElement(showEl){
		showEl.css({
			display: 'block'
		});
	}

	function hideElement(hideEl){
		hideEl.css({
			display: 'none'
		})
	}

	//SHOW AND HIDE SEARCH LIST IN MOBILE 

	$('.search-block.mini input').focus(function(){

		var element = searchBlockMini.find('.close');

		showElement(element);

		$(this).focusout(function(){
			hideElement(element)
		})

	});

	//SHOW AND HIDE SEARCH LIST IN ALL PAGE

	$('.search-w-wrap input').focus(function(){

		var element = $(this).parent().find('.search-words');

		showElement(element);

		$(this).focusout(function(){
			hideElement(element);
		})
	})

	//HIDE SEARCH BLOK ON SCROLL

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

//INSTAGRAM GRID

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