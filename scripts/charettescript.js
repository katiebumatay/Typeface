console.log("hello");


// hover over bar makes disappear
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