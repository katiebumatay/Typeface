console.log("hello");

$(document).ready(function(){

	$.fn.vbarAnimate = function() {
		var randomW = Math.floor(Math.random() * 100) + 10+ '%'; 
		var time = Math.floor(Math.random() * 300) + 500;
		$(this).animate({width: randomW,}, time).animate({width: "10%",}, time);
	}

	$.fn.hbarAnimate = function() {
		var randomH = Math.floor(Math.random() * 100) + 10+ '%'; 
		var time = Math.floor(Math.random() * 300) + 500;
		$(this).animate({height: randomH,}, time).animate({height: "10%",}, time);
	}

	$.fn.vbarSet = function() {
		var randomW = Math.floor(Math.random() * 50) + 10+ '%'; 
		var time = Math.floor(Math.random() * 300) + 500;
		$(this).animate({width: randomW,}, time);
	}

	$.fn.hbarSet = function() {
		var randomH = Math.floor(Math.random() * 50) + 10+ '%'; 
		var time = Math.floor(Math.random() * 300) + 500;
		$(this).animate({height: randomH,}, time);
	}

	// var nightTime = false;

	//expand and contract bars
	// $('#a').mouseover(function(){
	// 	if (!$('body').hasClass('nightskyBody')) {
	// 		$(this).toggleClass("[class^='width']");
	// 		var randomW = Math.floor(Math.random() * 150) + 10+ '%'; 
	// 		var time = Math.floor(Math.random() * 300) + 500;
	// 		$('#a1').animate({width: randomW,}, time).animate({width: "10%",}, time);
	// 		var randomW2 = Math.floor(Math.random() * 150) + 10+ '%'; 
	// 		var time2 = Math.floor(Math.random() * 300) + 500;
	// 		$('#a2').animate({width: randomW2,}, time2).animate({width: "10%",}, time2);
	// 		var randomW3 = Math.floor(Math.random() * 150) + 10+ '%'; 
	// 		var time3 = Math.floor(Math.random() * 300) + 500;
	// 		$('#a3').animate({width: randomW3,}, time3).animate({width: "10%",}, time3);
	// 		var randomW4 = Math.floor(Math.random() * 150) + 10+ '%'; 
	// 		var time4 = Math.floor(Math.random() * 300) + 500;
	// 		$('#a4').animate({width: randomW4,}, time4).animate({width: "10%",}, time4);
	// 		var randomW5 = Math.floor(Math.random() * 150) + 10+ '%'; 
	// 		var time5 = Math.floor(Math.random() * 300) + 500;
	// 		$('#a5').animate({width: randomW5,}, time5).animate({width: "10%",}, time5);
	// 		$('#a6').randomAnimate();

	// 	}
	// });




/***************** LETTER BAR ANIMATIONS **************/
	$('#a').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#a1').vbarAnimate();
			$('#a2').vbarAnimate();
			$('#a3').vbarAnimate();
			$('#a4').vbarAnimate();
			$('#a5').vbarAnimate();
			$('#a6').hbarAnimate();
		}
	});
		$('#a').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#a1').vbarSet();
			$('#a2').vbarSet();
			$('#a3').vbarSet();
			$('#a4').vbarSet();
			$('#a5').vbarSet();
			$('#a6').hbarSet();
		}
	});



	$('#b').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#b1').vbarAnimate();
			$('#b2').vbarAnimate();
			$('#b3').vbarAnimate();
			$('#b4').hbarAnimate();
			$('#b5').hbarAnimate();
			$('#b6').hbarAnimate();
		}
	});
		$('#b').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#b1').vbarSet();
			$('#b2').vbarSet();
			$('#b3').vbarSet();
			$('#b4').hbarSet();
			$('#b5').hbarSet();
			$('#b6').hbarSet();
		}
	});



	$('#c').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#c1').vbarAnimate();
			$('#c2').hbarAnimate();
			$('#c3').hbarAnimate();
		}
	});
		$('#c').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#c1').vbarSet();
			$('#c2').hbarSet();
			$('#c3').hbarSet();
		}
	});



	$('#d').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#d1').vbarAnimate();
			$('#d2').vbarAnimate();
			$('#d3').hbarAnimate();
			$('#d4').hbarAnimate();
		}
	});
		$('#d').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#d1').vbarSet();
			$('#d2').vbarSet();
			$('#d3').hbarSet();
			$('#d4').hbarSet();
		}
	});


	$('#e').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#e1').vbarAnimate();
			$('#e2').hbarAnimate();
			$('#e3').hbarAnimate();
			$('#e4').hbarAnimate();
		}
	});
		$('#e').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#e1').vbarSet();
			$('#e2').hbarSet();
			$('#e3').hbarSet();
			$('#e4').hbarSet();
		}
	});


	$('#f').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#f1').vbarAnimate();
			$('#f2').hbarAnimate();
			$('#f3').hbarAnimate();
		}
	});
		$('#f').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#f1').vbarSet();
			$('#f2').hbarSet();
			$('#f3').hbarSet();
		}
	});




	// 	$('#a').mouseenter(function(){
	// 	if (!$('body').hasClass('nightskyBody')) {
	// 		$('#a1').hbarAnimate();
	// 		$('#a2').hbarAnimate();
	// 		$('#a3').hbarAnimate();
	// 		$('#a4').hbarAnimate();
	// 		$('#a5').hbarAnimate();
	// 		$('#a6').vbarAnimate();
	// 	}
	// });

	// 	$('#a').click(function(){
	// 	if (!$('body').hasClass('nightskyBody')) {
	// 		$('#a1').hbarSet();
	// 		$('#a2').hbarSet();
	// 		$('#a3').hbarSet();
	// 		$('#a4').hbarSet();
	// 		$('#a5').hbarSet();
	// 		$('#a6').vbarSet();

	// 	}
	// });
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

// //reload form
// $(document).ready(function(){

	// $('#b').click(function(){
	// 	$('#b').load("iteration.html #b");
	// });
// });

	//click to turn page into starry sky
	$('.letter').dblclick(function() {
		$('.vbar, .hbar').toggleClass("barsToStars");
		$('body').toggleClass('nightskyBody');
		// nightTime = true;
	});
	//end

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




