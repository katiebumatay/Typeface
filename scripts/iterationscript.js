console.log("hello");

$(document).ready(function(){

	// var nightTime = false;

	//expand and contract bars
	$('#a').mouseover(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$(this).toggleClass("[class^='width']");
			var randomW = Math.floor(Math.random() * 150) + 10+ '%'; 
			var time = Math.floor(Math.random() * 300) + 500;
			$('#a1').animate({width: randomW,}, time).animate({width: "10%",}, time);
			var randomW2 = Math.floor(Math.random() * 150) + 10+ '%'; 
			var time2 = Math.floor(Math.random() * 300) + 500;
			$('#a2').animate({width: randomW2,}, time2).animate({width: "10%",}, time2);
			var randomW3 = Math.floor(Math.random() * 150) + 10+ '%'; 
			var time3 = Math.floor(Math.random() * 300) + 500;
			$('#a3').animate({width: randomW3,}, time3).animate({width: "10%",}, time3);
			var randomW4 = Math.floor(Math.random() * 150) + 10+ '%'; 
			var time4 = Math.floor(Math.random() * 300) + 500;
			$('#a4').animate({width: randomW4,}, time4).animate({width: "10%",}, time4);
			var randomW5 = Math.floor(Math.random() * 150) + 10+ '%'; 
			var time5 = Math.floor(Math.random() * 300) + 500;
			$('#a5').animate({width: randomW5,}, time5).animate({width: "10%",}, time5);
			var randomW6 = Math.floor(Math.random() * 150) + 10+ '%'; 
			var time6 = Math.floor(Math.random() * 300) + 500;
			$('#a6').animate({width: randomW6,}, time6).animate({width: "10%",}, time6);

		}
	});

	// $('#a').mouseover(function(){
	// 	if (!$('body').hasClass('nightskyBody')) {
	// 		$(this).toggleClass("[class^='width']");
	// 		var randomH = Math.floor(Math.random() * 150) + 10 + '%'; 
	// 		var time3 = Math.floor(Math.random() * 300) + 500; 
	// 		var time4 = Math.floor(Math.random() * 300) + 500; 
	// 		$('#a .vbar').animate({height: randomH,}, time3).animate({height: "10%",}, time4);
	// 	}
	// });

	// end

	// 	//expand and contract bars
	// $('.letter .hbar').mouseover(function(){
	// 	var currentW = parseInt(this.style.width);
	// 	var randomW = Math.floor(Math.random() * 150) + 10+ '%'; 
	// 	var time = Math.floor(Math.random() * 300) + 500;
	// 	var time2 = Math.floor(Math.random() * 300) + 600; 
	// 	$(this).animate({width: randomW,}, time).animate({width: currentW,}, time2);
	// 	// $(this).animate({width: randomW,}, time).animate({width: "10%",}, time2).animate({width: currentW,}, time1);

	// });
	// $('.letter .vbar').mouseover(function(){
	// 	var randomH = Math.floor(Math.random() * 150) + 10 + '%'; 
	// 	var time3 = Math.floor(Math.random() * 300) + 500; 
	// 	var time4 = Math.floor(Math.random() * 300) + 500; 
	// 	$(this).animate({height: randomH,}, time3).animate({height: "10%",}, time4);
	// });
	// //end


// //reload form
// $(document).ready(function(){

	$('#b').click(function(){
		$('#b').load("iteration.html #b");
	});
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




