$(document).ready(function() {
	var mobile = $(window).width() < 768;

	// if ($(".select").length > 0) {
	// 	$(".select").select2({
	// 	    width: 'auto'
	// 	});

	// 	$(".select").on("select2:open", function() {
	// 	    $(".select2-search__field").attr("placeholder", "Город");
	// 	});
	// 	$(".select").on("select2:close", function() {
	// 	    $(".select2-search__field").attr("placeholder", null);
	// 	});
	// }

	if ($(".inp_type_city").length > 0) {
		var city = [
			"Архангельск",
			"Екатеринбург",
			"Москва",
			"Салехард",
			"Сыктывкар",
			"Ханты-Мансий"
		]

		$(".inp_type_city").autocomplete({
	    	source: city,
	    	minLength: 0,
	    	open: function( event, ui ) {
	    		$(this).addClass("inp_type_city_open");
	    	},
	    	close: function( event, ui ) {
	    		$(this).removeClass("inp_type_city_open");
	    	}
	    });
	}

	if (mobile) {
		if ($('.recently__list').length > 0) {
			$('.recently__list').slick({
				dots: true,
				infinite: false,
				arrows: false,
				slidesToShow: 4,
  				slidesToScroll: 4,
				responsive: [
					{
					  breakpoint: 760,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
					},
				    {
				      breakpoint: 560,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				]
			});
		}

		$(".menu-burger").click(function(e){
			e.preventDefault();
			var self = $(this);
			var parent = self.closest(".header");
			parent.toggleClass("header_menu_active");
		})
	}
	
});