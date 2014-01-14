$(document).ready(function() {
	$(".search").on("click", "#search-btn", function()
	{
		event.preventDefault();
		
		var inputValue = $('#query').val();
		var url = 'http://autocomplete.wunderground.com/aq?&cb=?&query=';
		
		$.getJSON(url+inputValue, function(json)
		{
			var RESULTS = json.RESULTS;
			for(var i=0; i < RESULTS.length; i++) 
			{
				var result = RESULTS[i];	
				var url = 'http://api.wunderground.com/api/03170fbb5687fcf6/forecast' + result.l + '.json';
				$('#results').append('<li data-url= ' + url +' >' + result.name  + '</li>');
			}

			console.log()
			var list = $("li");

			for (var j = 0; j < list.length; j++) 
			{
				var listItem = $(list[j]);
				var url = listItem.data("url");

				listItem.click(function () {
					$.ajax({
            type: "GET",
            url: url,
            dataType: "jsonp",
            success: function (data) {
            	//handle success case
            	console.log(data);
            }
            error: function (data) {
            	// do stuff on failure
            }
            
            
        	});
				});
			}
		});
	});
});
