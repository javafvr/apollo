$(document).ready(function(){
	var pull=$("#pull"),
		nav = $("#nav__mobile-list");
		nav__mobile_list = $("#nav__mobile-list");

	$(".owl-carousel").owlCarousel({
		// loop:true,
		// singleItem:true,
		// slideBy:"page",
		items:1,
		rewind:true,
		nav:true,
		dots:false,
		// autoPlay:true,
		// stagePadding: 40,
		// margin:50,
		// center:true,
		navText:["<img src=\"../img/arrow-left.png\">","<img src=\"../img/arrow-right.png\">"],
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

			}
		}
	});

	$(pull).on('click', function(e){
		
		e.preventDefault();

		$(nav).slideToggle();

		$(this).toggleClass("nav__mobile-list--open");
        

	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 1200 && nav.is(':hidden')){
			nav.removeAttr('style');
		}
	});

});