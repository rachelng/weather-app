$(document).ready(function() {
	$(".search").on("click", "#search-btn", function(e){
		e.preventDefault();
		
		var inputValue = $("#query").val().toUpperCase();
		var url = 'http://autocomplete.wunderground.com/aq?&cb=?&query=';
		
		$.getJSON(url+inputValue, function(json){
			var RESULTS = json.RESULTS;
			for(var i=0; i <= RESULTS.length; i++) {
				var result = RESULTS[i];
				$("#results").append('<p>' + result.name + '</p>');
			}
		});
	});
});