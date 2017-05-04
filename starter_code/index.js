
$(document).ready(function(){

	$("#submit-btn").click(changeCity);

//On click, complete function changePic




	function changeCity(){

		//prevent page refresh
		event.preventDefault();

		console.log("something happened");

		//define variable city

		var city = $("#city-type").val();
		//changePic collects value of string entered into city-type input
		//if var city value is given name of city, change background pic to city pic


		//apply a class for each background change
		if (city=="New York"||city=="NYC"||city=="New York City"){
			$("body").attr("class","nyc");
		}

		else if (city=="San Francisco"||city=="SF"||city=="Bay Area"){
			$("body").attr("class","sf");
		}

		else if(city=="Los Angeles"||city=="LA"||city=="LAX"){
			$("body").attr("class","la");	
		}

		else if (city=="Austin"||city=="ATX"){
			$("body").attr("class","austin");
		}

		else if (city=="Sydney"||city=="SYD"){
			$("body").attr("class","sydney");
			
		}
	}
})
