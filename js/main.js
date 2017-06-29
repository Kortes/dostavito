$(document).ready(function() {
	var mobile = $(window).width() < 768;

	if ($(".select").length > 0) {
		$(".select").select2({
		    width: 'auto'
		});

		$(".select").on("select2:open", function() {
		    $(".select2-search__field").attr("placeholder", "Город");
		});
		$(".select").on("select2:close", function() {
		    $(".select2-search__field").attr("placeholder", null);
		});
	}

	if (mobile) {
		if ($('.recently__list').length > 0) {
			$('.recently__list').slick({
				dots: true,
				infinite: true,
				arrows: false,
				responsive: [
					{
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
				    },
				    {
				      breakpoint: 330,
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