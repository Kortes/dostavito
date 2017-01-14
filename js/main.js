$(document).ready(function() {
	$(".select").select2({
	    width: 'auto'
	});

	$(".select").on("select2:open", function() {
	    $(".select2-search__field").attr("placeholder", "Город");
	});
	$(".select").on("select2:close", function() {
	    $(".select2-search__field").attr("placeholder", null);
	});
	
});