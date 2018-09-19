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
		var randomW = Math.floor(Math.random() * 35) + 10+ '%'; 
		var time = Math.floor(Math.random() * 300) + 400;
		$(this).animate({width: randomW,}, time);
	}

	$.fn.hbarSet = function() {
		var randomH = Math.floor(Math.random() * 35) + 10+ '%'; 
		var time = Math.floor(Math.random() * 300) + 400;
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



	$('#g').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#g1').vbarAnimate();
			$('#g2').hbarAnimate();
			$('#g3').hbarAnimate();
			$('#g4').hbarAnimate();
			$('#g5').hbarAnimate();
		}
	});
		$('#g').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#g1').vbarSet();
			$('#g2').hbarSet();
			$('#g3').hbarSet();
			$('#g4').hbarSet();
			$('#g5').hbarSet();
		}
	});



	$('#h').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#h1').vbarAnimate();
			$('#h2').vbarAnimate();
			$('#h3').hbarAnimate();
		}
	});
		$('#h').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#h1').vbarSet();
			$('#h2').vbarSet();
			$('#h3').hbarSet();
		}
	});



	$('#i').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#i1').vbarAnimate();
			$('#i2').hbarAnimate();
			$('#i3').hbarAnimate();
		}
	});
		$('#i').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#i1').vbarSet();
			$('#i2').hbarSet();
			$('#i3').hbarSet();
		}
	});



	$('#j').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#j1').vbarAnimate();
			$('#j2').hbarAnimate();
			$('#j3').hbarAnimate();
			$('#j4').hbarAnimate();
		}
	});
		$('#j').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#j1').vbarSet();
			$('#j2').hbarSet();
			$('#j3').hbarSet();
			$('#j4').hbarSet();
		}
	});


	$('#k').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#k1').vbarAnimate();
			$('#k2').vbarAnimate();
			$('#k3').vbarAnimate();
			$('#k4').vbarAnimate();
		}
	});
		$('#k').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#k1').vbarSet();
			$('#k2').vbarSet();
			$('#k3').vbarSet();
			$('#k4').vbarSet();
		}
	});



	$('#l').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#l1').vbarAnimate();
			$('#l2').hbarAnimate();
		}
	});
		$('#l').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#l1').vbarSet();
			$('#l2').hbarSet();
		}
	});



	$('#m').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#m1').vbarAnimate();
			$('#m2').vbarAnimate();
			$('#m3').vbarAnimate();
		}
	});
		$('#m').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#m1').vbarSet();
			$('#m2').vbarSet();
			$('#m3').vbarSet();
		}
	});



	$('#n').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#n1').vbarAnimate();
			$('#n2').vbarAnimate();
			$('#n3').vbarAnimate();
			$('#n4').vbarAnimate();
		}
	});
		$('#n').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#n1').vbarSet();
			$('#n2').vbarSet();
			$('#n3').vbarSet();
			$('#n4').vbarSet();
		}
	});



	$('#o').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#o1').vbarAnimate();
			$('#o2').hbarAnimate();
			$('#o3').hbarAnimate();
			$('#o4').vbarAnimate();
		}
	});
		$('#o').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#o1').vbarSet();
			$('#o2').hbarSet();
			$('#o3').hbarSet();
			$('#o4').vbarSet();
		}
	});



	$('#p').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#p1').vbarAnimate();
			$('#p2').vbarAnimate();
			$('#p3').hbarAnimate();
			$('#p4').hbarAnimate();
		}
	});
		$('#p').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#p1').vbarSet();
			$('#p2').vbarSet();
			$('#p3').hbarSet();
			$('#p4').hbarSet();
		}
	});



	$('#q').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#q1').vbarAnimate();
			$('#q2').hbarAnimate();
			$('#q3').hbarAnimate();
			$('#q4').vbarAnimate();
			$('#q5').vbarAnimate();
		}
	});
		$('#q').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#q1').vbarSet();
			$('#q2').hbarSet();
			$('#q3').hbarSet();
			$('#q4').vbarSet();
			$('#q5').vbarSet();
		}
	});



	$('#r').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#r1').vbarAnimate();
			$('#r2').vbarAnimate();
			$('#r3').vbarAnimate();
			$('#r4').hbarAnimate();
			$('#r5').hbarAnimate();
		}
	});
		$('#r').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#r1').vbarSet();
			$('#r2').vbarSet();
			$('#r3').vbarSet();
			$('#r4').hbarSet();
			$('#r5').hbarSet();
		}
	});




	$('#s').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#s1').hbarAnimate();
			$('#s2').vbarAnimate();
			$('#s3').vbarAnimate();
			$('#s4').vbarAnimate();
			$('#s5').hbarAnimate();
		}
	});
		$('#s').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#s1').hbarSet();
			$('#s2').vbarSet();
			$('#s3').vbarSet();
			$('#s4').vbarSet();
			$('#s5').hbarSet();
		}
	});



	$('#t').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#t1').vbarAnimate();
			$('#t2').hbarAnimate();
			$('#t3').hbarAnimate();
		}
	});
		$('#t').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#t1').vbarSet();
			$('#t2').hbarSet();
			$('#t3').hbarSet();
		}
	});




	$('#u').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#u1').vbarAnimate();
			$('#u2').vbarAnimate();
			$('#u3').hbarAnimate();
		}
	});
		$('#u').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#u1').vbarSet();
			$('#u2').vbarSet();
			$('#u3').hbarSet();
		}
	});



	$('#v').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#v1').vbarAnimate();
			$('#v2').vbarAnimate();
			$('#v3').vbarAnimate();
			$('#v4').vbarAnimate();
			$('#v5').vbarAnimate();
		}
	});
		$('#v').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#v1').vbarSet();
			$('#v2').vbarSet();
			$('#v3').vbarSet();
			$('#v4').vbarSet();
			$('#v5').vbarSet();
		}
	});



		$('#w').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#w1').vbarAnimate();
			$('#w2').vbarAnimate();
			$('#w3').vbarAnimate();
		}
	});
		$('#w').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#w1').vbarSet();
			$('#w2').vbarSet();
			$('#w3').vbarSet();
		}
	});



	$('#x').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#x1').vbarAnimate();
			$('#x2').vbarAnimate();
			$('#x3').vbarAnimate();
			$('#x4').vbarAnimate();
			$('#x5').vbarAnimate();
		}
	});
		$('#x').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#x1').vbarSet();
			$('#x2').vbarSet();
			$('#x3').vbarSet();
			$('#x4').vbarSet();
			$('#x5').vbarSet();
		}
	});



	$('#y').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#y1').vbarAnimate();
			$('#y2').vbarAnimate();
			$('#y3').vbarAnimate();
		}
	});
		$('#y').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#y1').vbarSet();
			$('#y2').vbarSet();
			$('#y3').vbarSet();
		}
	});




	$('#z').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#z1').hbarAnimate();
			$('#z2').hbarAnimate();
			$('#z3').hbarAnimate();
			$('#z4').hbarAnimate();
		}
	});
		$('#z').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#z1').hbarSet();
			$('#z2').hbarSet();
			$('#z3').hbarSet();
			$('#z4').hbarSet();
		}
	});



	$('#zero').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#zero1').vbarAnimate();
			$('#zero2').hbarAnimate();
			$('#zero3').hbarAnimate();
			$('#zero4').vbarAnimate();
			$('#zero5').hbarAnimate();
			$('#zero6').hbarAnimate();
		}
	});
		$('#zero').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#zero1').vbarSet();
			$('#zero2').hbarSet();
			$('#zero3').hbarSet();
			$('#zero4').vbarSet();
			$('#zero5').hbarSet();
			$('#zero6').hbarSet();
		}
	});



	$('#one').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#one1').vbarAnimate();
			$('#one2').hbarAnimate();
			$('#one3').hbarAnimate();
		}
	});
		$('#one').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#one1').vbarSet();
			$('#one2').hbarSet();
			$('#one3').hbarSet();
		}
	});



	$('#two').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#two1').hbarAnimate();
			$('#two2').vbarAnimate();
			$('#two3').hbarAnimate();
			$('#two4').hbarAnimate();
		}
	});
		$('#two').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#two1').hbarSet();
			$('#two2').vbarSet();
			$('#two3').hbarSet();
			$('#two4').hbarSet();
		}
	});



	$('#three').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#three1').vbarAnimate();
			$('#three2').vbarAnimate();
			$('#three3').hbarAnimate();
			$('#three4').hbarAnimate();
			$('#three5').hbarAnimate();
		}
	});
		$('#three').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#three1').vbarSet();
			$('#three2').vbarSet();
			$('#three3').hbarSet();
			$('#three4').hbarSet();
			$('#three5').hbarSet();
		}
	});



	$('#four').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#four1').vbarAnimate();
			$('#four2').vbarAnimate();
			$('#four3').hbarAnimate();
		}
	});
		$('#four').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#four1').vbarSet();
			$('#four2').vbarSet();
			$('#four3').hbarSet();
		}
	});



	$('#five').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#five1').vbarAnimate();
			$('#five2').vbarAnimate();
			$('#five3').hbarAnimate();
			$('#five4').hbarAnimate();
			$('#five5').hbarAnimate();
		}
	});
		$('#five').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#five1').vbarSet();
			$('#five2').vbarSet();
			$('#five3').hbarSet();
			$('#five4').hbarSet();
			$('#five5').hbarSet();
		}
	});



	$('#six').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#six1').vbarAnimate();
			$('#six2').vbarAnimate();
			$('#six3').hbarAnimate();
			$('#six4').hbarAnimate();
			$('#six5').hbarAnimate();
		}
	});
		$('#six').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#six1').vbarSet();
			$('#six2').vbarSet();
			$('#six3').hbarSet();
			$('#six4').hbarSet();
			$('#six5').hbarSet();
		}
	});



	$('#seven').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#seven1').hbarAnimate();
			$('#seven2').hbarAnimate();
			$('#seven3').hbarAnimate();
			$('#seven4').vbarAnimate();
		}
	});
		$('#seven').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#seven1').hbarSet();
			$('#seven2').hbarSet();
			$('#seven3').hbarSet();
			$('#seven4').vbarSet();
		}
	});



	$('#eight').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#eight1').vbarAnimate();
			$('#eight2').vbarAnimate();
			$('#eight3').vbarAnimate();
			$('#eight4').vbarAnimate();
			$('#eight5').hbarAnimate();
			$('#eight6').hbarAnimate();
			$('#eight7').hbarAnimate();
		}
	});
		$('#eight').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#eight1').vbarSet();
			$('#eight2').vbarSet();
			$('#eight3').vbarSet();
			$('#eight4').vbarSet();
			$('#eight5').hbarSet();
			$('#eight6').hbarSet();
			$('#eight7').hbarSet();
		}
	});



	$('#nine').mouseenter(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#nine1').vbarAnimate();
			$('#nine2').vbarAnimate();
			$('#nine3').hbarAnimate();
			$('#nine4').hbarAnimate();
			$('#nine5').hbarAnimate();
		}
	});
		$('#nine').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#nine1').vbarSet();
			$('#nine2').vbarSet();
			$('#nine3').hbarSet();
			$('#nine4').hbarSet();
			$('#nine5').hbarSet();
		}
	});

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

		// $('#a .hbar, #a .vbar').click(function(){
		// 	if ($('body').hasClass('nightskyBody')) {
		// 		$(this).toggleClass(".twinkle");
		// 	}
		// });



	$('.button').click(function(){
		if (!$('body').hasClass('nightskyBody')) {
			$('#a1').vbarSet();
			$('#a2').vbarSet();
			$('#a3').vbarSet();
			$('#a4').vbarSet();
			$('#a5').vbarSet();
			$('#a6').hbarSet();
			$('#b1').vbarSet();
			$('#b2').vbarSet();
			$('#b3').vbarSet();
			$('#b4').hbarSet();
			$('#b5').hbarSet();
			$('#b6').hbarSet();
			$('#c1').vbarSet();
			$('#c2').hbarSet();
			$('#c3').hbarSet();
			$('#d1').vbarSet();
			$('#d2').vbarSet();
			$('#d3').hbarSet();
			$('#d4').hbarSet();
			$('#e1').vbarSet();
			$('#e2').hbarSet();
			$('#e3').hbarSet();
			$('#e4').hbarSet();
			$('#f1').vbarSet();
			$('#f2').hbarSet();
			$('#f3').hbarSet();
			$('#g1').vbarSet();
			$('#g2').hbarSet();
			$('#g3').hbarSet();
			$('#g4').hbarSet();
			$('#g5').hbarSet();
			$('#h1').vbarSet();
			$('#h2').vbarSet();
			$('#h3').hbarSet();
			$('#i1').vbarSet();
			$('#i2').hbarSet();
			$('#i3').hbarSet();
			$('#j1').vbarSet();
			$('#j2').hbarSet();
			$('#j3').hbarSet();
			$('#j4').hbarSet();
			$('#k1').vbarSet();
			$('#k2').vbarSet();
			$('#k3').vbarSet();
			$('#k4').vbarSet();
			$('#l1').vbarSet();
			$('#l2').hbarSet();
			$('#m1').vbarSet();
			$('#m2').vbarSet();
			$('#m3').vbarSet();
			$('#n1').vbarSet();
			$('#n2').vbarSet();
			$('#n3').vbarSet();
			$('#n4').vbarSet();
			$('#o1').vbarSet();
			$('#o2').hbarSet();
			$('#o3').hbarSet();
			$('#o4').vbarSet();
			$('#p1').vbarSet();
			$('#p2').vbarSet();
			$('#p3').hbarSet();
			$('#p4').hbarSet();
			$('#q1').vbarSet();
			$('#q2').hbarSet();
			$('#q3').hbarSet();
			$('#q4').vbarSet();
			$('#q5').vbarSet();
			$('#r1').vbarSet();
			$('#r2').vbarSet();
			$('#r3').vbarSet();
			$('#r4').hbarSet();
			$('#r5').hbarSet();
			$('#s1').hbarSet();
			$('#s2').vbarSet();
			$('#s3').vbarSet();
			$('#s4').vbarSet();
			$('#s5').hbarSet();
			$('#t1').vbarSet();
			$('#t2').hbarSet();
			$('#t3').hbarSet();
			$('#u1').vbarSet();
			$('#u2').vbarSet();
			$('#u3').hbarSet();
			$('#v1').vbarSet();
			$('#v2').vbarSet();
			$('#v3').vbarSet();
			$('#v4').vbarSet();
			$('#v5').vbarSet();
			$('#w1').vbarSet();
			$('#w2').vbarSet();
			$('#w3').vbarSet();
			$('#x1').vbarSet();
			$('#x2').vbarSet();
			$('#x3').vbarSet();
			$('#x4').vbarSet();
			$('#x5').vbarSet();
			$('#y1').vbarSet();
			$('#y2').vbarSet();
			$('#y3').vbarSet();
			$('#z1').hbarSet();
			$('#z2').hbarSet();
			$('#z3').hbarSet();
			$('#z4').hbarSet();
			$('#zero1').vbarSet();
			$('#zero2').hbarSet();
			$('#zero3').hbarSet();
			$('#zero4').vbarSet();
			$('#zero5').hbarSet();
			$('#zero6').hbarSet();
			$('#one1').vbarSet();
			$('#one2').hbarSet();
			$('#one3').hbarSet();
			$('#two1').hbarSet();
			$('#two2').vbarSet();
			$('#two3').hbarSet();
			$('#two4').hbarSet();
			$('#three1').vbarSet();
			$('#three2').vbarSet();
			$('#three3').hbarSet();
			$('#three4').hbarSet();
			$('#three5').hbarSet();
			$('#four1').vbarSet();
			$('#four2').vbarSet();
			$('#four3').hbarSet();
			$('#five1').vbarSet();
			$('#five2').vbarSet();
			$('#five3').hbarSet();
			$('#five4').hbarSet();
			$('#five5').hbarSet();
			$('#six1').vbarAnimate();
			$('#six2').vbarAnimate();
			$('#six3').hbarAnimate();
			$('#six4').hbarAnimate();
			$('#six5').hbarAnimate();
			$('#seven1').hbarSet();
			$('#seven2').hbarSet();
			$('#seven3').hbarSet();
			$('#seven4').vbarSet();
			$('#eight1').vbarSet();
			$('#eight2').vbarSet();
			$('#eight3').vbarSet();
			$('#eight4').vbarSet();
			$('#eight5').hbarSet();
			$('#eight6').hbarSet();
			$('#eight7').hbarSet();
			$('#nine1').vbarSet();
			$('#nine2').vbarSet();
			$('#nine3').hbarSet();
			$('#nine4').hbarSet();
			$('#nine5').hbarSet();
		}
	});






});




