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
		}, 0);
	});

	$('.hbar, .vbar').mouseout(function(){	
		$("#two2").animate({
		opacity:"1",
		}, 0);
	});

});

// each bar disappears when clicked
$(document).ready(function(){

	$('#two3 .hbar, #two3 .vbar').click(function(){
		$(this).animate({
		opacity:"0",
		}, 1000);
	});

});

// expands in width when clicked
$(document).ready(function(){

	$('#two4 .hbar, #two4 .vbar').click(function(){
		$("#two4").animate({
		width: "100%",
		}, 1000);
	});

});

// each bar expands then contracts when hovered on
$(document).ready(function(){

	$('#two5 .hbar, #two5 .vbar').mouseover(function(){
		$(this).animate({
		width: "100%",
		}, 1000);
	});

	$('#two5 .hbar, #two5 .vbar').mouseover(function(){
		$(this).animate({
		width: "0",
		}, 200);
	});

});

// each bar expands then contracts when hovered on
$(document).ready(function(){

	$('#two6 .hbar').mouseover(function(){
		$(this).animate({
		width: "100%",
		}, 600);
	});

	$('#two6 .hbar').mouseover(function(){
		$(this).animate({
		width: "10%",
		}, 300);
	});

	$('#two6 .vbar').mouseover(function(){
		$(this).animate({
		height: "100%",
		}, 600);
	});

	$('#two6 .vbar').mouseover(function(){
		$(this).animate({
		height: "10%",
		}, 300);
	});

});
