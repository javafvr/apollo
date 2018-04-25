$(document).ready(function(){
	var pull=$("#navigation-toggle"),
		menu = $(".navigation ul");

	$(pull).on('click', function(e){
		
		e.preventDefault();

		$(menu).slideToggle();

		//Добавим модификатор
		$(this).toggleClass("navigation__toggle-button--active");
	});

	// Owl-carousel version 2
	$("#top-slider").owlCarousel({
		items:1,
		rewind:true,
		nav:true,
		dots:false,
		navText:["<img src=\"img/icons/arrow-left.png\">","<img src=\"img/icons/arrow-right.png\">"],
		responsive : {
		// breakpoint from 0 up
			0 : {
				nav:false,
				dots:true,

			},
		// breakpoint from 480 up
			320 : {
				nav:false,
				dots:true,
			},
		// breakpoint from 768 up
			768 : {
				dots:true,

			},
		// breakpoint from 1200 up
			1200 : {
				dots:false,

			}
		}
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 768 && menu.is(':hidden')){
			menu.removeAttr('style');
		}

	});

});