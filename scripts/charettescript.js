console.log("hello");

$(document).ready(function(){

$('.bar').mouseover(function(){
	
	$(".letter").animate({
	opacity:".2",
	
	}, 200);


});

$('.bar').mouseout(function(){
	
	$(".letter").animate({
	opacity:"1",
	}, 200);


});

