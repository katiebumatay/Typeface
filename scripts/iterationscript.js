console.log("hello");


// // each bar expands then contracts when hovered on, length wise
// $(document).ready(function(){

// 	$('.letter .hbar').mouseover(function(){
// 		$(this).animate({width: "100%",}, 600).animate({width: "10%",}, 300);
// 	});

// 	$('.letter .vbar').mouseover(function(){
// 		$(this).animate({height: "100%",}, 600).animate({height: "10%",}, 300);
// 	});

// });

// each bar expands then contracts when hovered on, length wise
$(document).ready(function(){

	$('.letter .hbar').mouseover(function(){
		var randomW = Math.floor(Math.random() * 150) + 10+ '%'; 
		var time = Math.floor(Math.random() * 300) + 500;
		var time2 = Math.floor(Math.random() * 300) + 600; 
		$(this).animate({width: randomW,}, time).animate({width: "10%",}, time2);
	});

	$('.letter .vbar').mouseover(function(){
		var randomH = Math.floor(Math.random() * 150) + 10 + '%'; 
		var time3 = Math.floor(Math.random() * 300) + 500; 
		var time4 = Math.floor(Math.random() * 300) + 500; 
		$(this).animate({height: randomH,}, time3).animate({height: "10%",}, time4);
	});

});
// //reload form
// $(document).ready(function(){

// 	$('.letter').click(function(){
// 		$('.letter').load(" .letter");
// 	});
// });

// $(document).ready(function(){

// 	$('.letter').click(function(){
// 		$(this).toggleClass("reload");
// 	});
// });

//click to turn page into starry sky
$(document).ready(function(){
	$('.letter').click(function() {
		$('.vbar, .hbar').toggleClass("barsToStars");
		$('body').toggleClass('nightskyBody');
	});
});

// each bar expands then contracts when hovered on, length wise
$(document).ready(function(){

	$('.letter .hbar').mouseover(function(){
		var goLeft = Math.floor(Math.random() * 300) + 500; 
		var goUp = (Math.floor(Math.random() * 300) + 500) * (-1);
		var time1 = Math.floor(Math.random() * 300);
		var time2 = Math.floor(Math.random() * 300); 
		$(this).animate({left: goLeft,}, time1).animate({top: goUp,}, time2).animate({opacity: 0,}, 300);
	});

	$('.letter .vbar').mouseover(function(){
		var goRight = (Math.floor(Math.random() * 300) + 500) * (-1); 
		var goDown = (Math.floor(Math.random() * 300) + 500);
		var time3 = Math.floor(Math.random() * 300);
		var time4 = Math.floor(Math.random() * 300); 
		$(this).animate({left: goRight,}, time3).animate({top: goDown,}, time4);
	});



});


