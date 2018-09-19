console.log("hello");

$(document).ready(function(){

	// var nightTime = false;

	//expand and contract bars
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
	//end


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
	$('.letter').dblclick(function() {
		$('.vbar, .hbar').toggleClass("barsToStars");
		$('body').toggleClass('nightskyBody');
		// nightTime = true;
	});
	//end


	// //make stars shoot away
	// if (nightTime == true) {
	// 	$('.letter .hbar').mouseover(function(){
	// 		var goLeft = Math.floor(Math.random() * 300) + 500; 
	// 		var goUp = (Math.floor(Math.random() * 300) + 500) * (-1);
	// 		var time1 = Math.floor(Math.random() * 300) + 200;
	// 		$(this).animate({left: goLeft, top: goUp,}, time1).animate({opacity: 0,}, 300);
	// 	});

	// 	$('.letter .vbar').mouseover(function(){
	// 		var goRight = (Math.floor(Math.random() * 300) + 500) * (-1); 
	// 		var goDown = (Math.floor(Math.random() * 300) + 500);
	// 		var time2 = Math.floor(Math.random() * 300) + 200;
	// 		$(this).animate({left: goRight, top: goDown,}, time2).animate({opacity: 0,}, 300);
	// 	});
	// }
	// //end -- doesnt shoot in either mode

	// 	//make stars shoot away
	// 	$('.letter .hbar').mouseover(function(){
	// 		if (nightTime == true) {
	// 			var goLeft = Math.floor(Math.random() * 300) + 500; 
	// 			var goUp = (Math.floor(Math.random() * 300) + 500) * (-1);
	// 			var time1 = Math.floor(Math.random() * 300) + 200;
	// 			$(this).animate({left: goLeft, top: goUp,}, time1).animate({opacity: 0,}, 300);
	// 		}
	// 	});

	// 	$('.letter .vbar').mouseover(function(){
	// 		if (nightTime == true) {
	// 			var goRight = (Math.floor(Math.random() * 300) + 500) * (-1); 
	// 			var goDown = (Math.floor(Math.random() * 300) + 500);
	// 			var time2 = Math.floor(Math.random() * 300) + 200;
	// 			$(this).animate({left: goRight, top: goDown,}, time2).animate({opacity: 0,}, 300);
	// 		}
	// 	});
	// //end -- shoots even when not in night mode

	// //make stars shoot away
	// if ($('body').hasClass('nightskyBody')) {
	// 	$('.letter .hbar').mouseover(function(){
	// 		var goLeft = Math.floor(Math.random() * 300) + 500; 
	// 		var goUp = (Math.floor(Math.random() * 300) + 500) * (-1);
	// 		var time1 = Math.floor(Math.random() * 300) + 200;
	// 		$(this).animate({left: goLeft, top: goUp,}, time1).animate({opacity: 0,}, 300);
	// 	});

	// 	$('.letter .vbar').mouseover(function(){
	// 		var goRight = (Math.floor(Math.random() * 300) + 500) * (-1); 
	// 		var goDown = (Math.floor(Math.random() * 300) + 500);
	// 		var time2 = Math.floor(Math.random() * 300) + 200;
	// 		$(this).animate({left: goRight, top: goDown,}, time2).animate({opacity: 0,}, 300);
	// 	});
	// }
	// //end -- doesnt shoot in either mode

		//make stars shoot away
		$('.letter .hbar').mouseover(function(){
			if ($('body').hasClass('nightskyBody')) {
				// $(this).animate({width: '150%',}, 200);
				var goLeft = Math.floor(Math.random() * 300) + 500; 
				var goUp = (Math.floor(Math.random() * 300) + 500) * (-1);
				var time1 = Math.floor(Math.random() * 300) + 200;
				$(this).animate({left: goLeft, top: goUp,}, time1).animate({opacity: 0,}, 300);
			}
		});

		$('.letter .vbar').mouseover(function(){
			if ($('body').hasClass('nightskyBody')) {
				var goRight = (Math.floor(Math.random() * 300) + 500) * (-1); 
				var goDown = (Math.floor(Math.random() * 300) + 500);
				var time2 = Math.floor(Math.random() * 300) + 200;
				$(this).animate({left: goRight, top: goDown,}, time2).animate({opacity: 0,}, 300);
			}
		});
	//end -- shoots in night mode correctly, but has delay on toggle and on shooting

	// $('.letter #a').click(function() {
	// 	$(this).toggleClass('.letterFull #a');
	// }

	$('.letter #a').click(function() {
		$(this).toggleClass(".letterFull #a");
	});






});




