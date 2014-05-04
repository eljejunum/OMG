$(document).ready(function() {
	$('.menu a.registry img').animate({
		transform: "rotate(5deg)"}, 5000, function(){
			$('.menu a.registry img').animate({
				transform: "rotate(10deg)" }, 5000, function(){}
			)
	});
	
});