console.log("hello");


// make opaque
$(document).ready(function(){

$('.hbar, .vbar').mouseover(function(){
	
	$(".two").animate({
	opacity:".2",
	}, 200);

});

$('.hbar, .vbar').mouseout(function(){
	
	$(".two").animate({
	opacity:"1",
	}, 200);


});

});