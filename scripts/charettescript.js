console.log("hello");


// hover over bar of first 2 makes first 2 disappear
$(document).ready(function(){

	$('#two1 .hbar, #two1 .vbar').mouseover(function(){
		$("#two1").animate({
		opacity:"0",
		}, 200);
	});

	$('#two1 .hbar, #two1 .vbar').mouseout(function(){	
		$("#two1").animate({
		opacity:"1",
		}, 200);
	});

});

// hover over any bar of any 2 makes second 2 disappear
$(document).ready(function(){

	$('.hbar, .vbar').mouseover(function(){
		$("#two2").animate({
		opacity:"0",
		}, 200);
	});

	$('.hbar, .vbar').mouseout(function(){	
		$("#two2").animate({
		opacity:"1",
		}, 200);
	});

});