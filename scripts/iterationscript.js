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
			$('#a1').vbarAnimate();
			$('#a2').vbarAnimate();
			$('#a3').vbarAnimate();
			$('#a4').vbarAnimate();
			$('#a5').vbarAnimate();
			$('#a6').hbarAnimate();
	});
	$('#a').click(function(){
			$('#a1').vbarSet();
			$('#a2').vbarSet();
			$('#a3').vbarSet();
			$('#a4').vbarSet();
			$('#a5').vbarSet();
			$('#a6').hbarSet();
	});



	$('#b').mouseenter(function(){
			$('#b1').vbarAnimate();
			$('#b2').vbarAnimate();
			$('#b3').vbarAnimate();
			$('#b4').hbarAnimate();
			$('#b5').hbarAnimate();
			$('#b6').hbarAnimate();
	});
	$('#b').click(function(){
			$('#b1').vbarSet();
			$('#b2').vbarSet();
			$('#b3').vbarSet();
			$('#b4').hbarSet();
			$('#b5').hbarSet();
			$('#b6').hbarSet();
	});



	$('#c').mouseenter(function(){
			$('#c1').vbarAnimate();
			$('#c2').hbarAnimate();
			$('#c3').hbarAnimate();
	});
	$('#c').click(function(){
			$('#c1').vbarSet();
			$('#c2').hbarSet();
			$('#c3').hbarSet();
	});



	$('#d').mouseenter(function(){
			$('#d1').vbarAnimate();
			$('#d2').vbarAnimate();
			$('#d3').hbarAnimate();
			$('#d4').hbarAnimate();
	});
	$('#d').click(function(){
			$('#d1').vbarSet();
			$('#d2').vbarSet();
			$('#d3').hbarSet();
			$('#d4').hbarSet();
	});


	$('#e').mouseenter(function(){
			$('#e1').vbarAnimate();
			$('#e2').hbarAnimate();
			$('#e3').hbarAnimate();
			$('#e4').hbarAnimate();
	});
	$('#e').click(function(){
			$('#e1').vbarSet();
			$('#e2').hbarSet();
			$('#e3').hbarSet();
			$('#e4').hbarSet();
	});


	$('#f').mouseenter(function(){
			$('#f1').vbarAnimate();
			$('#f2').hbarAnimate();
			$('#f3').hbarAnimate();
	});
	$('#f').click(function(){
			$('#f1').vbarSet();
			$('#f2').hbarSet();
			$('#f3').hbarSet();
	});



	$('#g').mouseenter(function(){
			$('#g1').vbarAnimate();
			$('#g2').hbarAnimate();
			$('#g3').hbarAnimate();
			$('#g4').hbarAnimate();
			$('#g5').hbarAnimate();
	});
	$('#g').click(function(){
			$('#g1').vbarSet();
			$('#g2').hbarSet();
			$('#g3').hbarSet();
			$('#g4').hbarSet();
			$('#g5').hbarSet();
	});



	$('#h').mouseenter(function(){
			$('#h1').vbarAnimate();
			$('#h2').vbarAnimate();
			$('#h3').hbarAnimate();
	});
	$('#h').click(function(){
			$('#h1').vbarSet();
			$('#h2').vbarSet();
			$('#h3').hbarSet();
	});



	$('#i').mouseenter(function(){
			$('#i1').vbarAnimate();
			$('#i2').hbarAnimate();
			$('#i3').hbarAnimate();
	});
	$('#i').click(function(){
			$('#i1').vbarSet();
			$('#i2').hbarSet();
			$('#i3').hbarSet();
	});



	$('#j').mouseenter(function(){
			$('#j1').vbarAnimate();
			$('#j2').hbarAnimate();
			$('#j3').hbarAnimate();
			$('#j4').hbarAnimate();
	});
	$('#j').click(function(){
			$('#j1').vbarSet();
			$('#j2').hbarSet();
			$('#j3').hbarSet();
			$('#j4').hbarSet();
	});


	$('#k').mouseenter(function(){
			$('#k1').vbarAnimate();
			$('#k2').vbarAnimate();
			$('#k3').vbarAnimate();
			$('#k4').vbarAnimate();
	});
	$('#k').click(function(){
			$('#k1').vbarSet();
			$('#k2').vbarSet();
			$('#k3').vbarSet();
			$('#k4').vbarSet();
	});



	$('#l').mouseenter(function(){
			$('#l1').vbarAnimate();
			$('#l2').hbarAnimate();
	});
	$('#l').click(function(){
			$('#l1').vbarSet();
			$('#l2').hbarSet();
	});



	$('#m').mouseenter(function(){
			$('#m1').vbarAnimate();
			$('#m2').vbarAnimate();
			$('#m3').vbarAnimate();
	});
	$('#m').click(function(){
			$('#m1').vbarSet();
			$('#m2').vbarSet();
			$('#m3').vbarSet();
	});



	$('#n').mouseenter(function(){
			$('#n1').vbarAnimate();
			$('#n2').vbarAnimate();
			$('#n3').vbarAnimate();
			$('#n4').vbarAnimate();
	});
	$('#n').click(function(){
			$('#n1').vbarSet();
			$('#n2').vbarSet();
			$('#n3').vbarSet();
			$('#n4').vbarSet();
	});



	$('#o').mouseenter(function(){
			$('#o1').vbarAnimate();
			$('#o2').hbarAnimate();
			$('#o3').hbarAnimate();
			$('#o4').vbarAnimate();
	});
	$('#o').click(function(){
			$('#o1').vbarSet();
			$('#o2').hbarSet();
			$('#o3').hbarSet();
			$('#o4').vbarSet();
	});



	$('#p').mouseenter(function(){
			$('#p1').vbarAnimate();
			$('#p2').vbarAnimate();
			$('#p3').hbarAnimate();
			$('#p4').hbarAnimate();
	});
	$('#p').click(function(){
			$('#p1').vbarSet();
			$('#p2').vbarSet();
			$('#p3').hbarSet();
			$('#p4').hbarSet();
	});



	$('#q').mouseenter(function(){
			$('#q1').vbarAnimate();
			$('#q2').hbarAnimate();
			$('#q3').hbarAnimate();
			$('#q4').vbarAnimate();
			$('#q5').hbarAnimate();
	});
	$('#q').click(function(){
			$('#q1').vbarSet();
			$('#q2').hbarSet();
			$('#q3').hbarSet();
			$('#q4').vbarSet();
			$('#q5').hbarSet();
	});



	$('#r').mouseenter(function(){
			$('#r1').vbarAnimate();
			$('#r2').vbarAnimate();
			$('#r3').vbarAnimate();
			$('#r4').hbarAnimate();
			$('#r5').hbarAnimate();
	});
	$('#r').click(function(){
			$('#r1').vbarSet();
			$('#r2').vbarSet();
			$('#r3').vbarSet();
			$('#r4').hbarSet();
			$('#r5').hbarSet();
	});




	$('#s').mouseenter(function(){
			$('#s1').hbarAnimate();
			$('#s2').vbarAnimate();
			$('#s3').vbarAnimate();
			$('#s4').vbarAnimate();
			$('#s5').hbarAnimate();
	});
	$('#s').click(function(){
			$('#s1').hbarSet();
			$('#s2').vbarSet();
			$('#s3').vbarSet();
			$('#s4').vbarSet();
			$('#s5').hbarSet();
	});



	$('#t').mouseenter(function(){
			$('#t1').vbarAnimate();
			$('#t2').hbarAnimate();
			$('#t3').hbarAnimate();
	});
	$('#t').click(function(){
			$('#t1').vbarSet();
			$('#t2').hbarSet();
			$('#t3').hbarSet();
	});




	$('#u').mouseenter(function(){
			$('#u1').vbarAnimate();
			$('#u2').vbarAnimate();
			$('#u3').hbarAnimate();
	});
	$('#u').click(function(){
			$('#u1').vbarSet();
			$('#u2').vbarSet();
			$('#u3').hbarSet();
	});



	$('#v').mouseenter(function(){
			$('#v1').vbarAnimate();
			$('#v2').vbarAnimate();
			$('#v3').vbarAnimate();
			$('#v4').vbarAnimate();
			$('#v5').vbarAnimate();
	});
	$('#v').click(function(){
			$('#v1').vbarSet();
			$('#v2').vbarSet();
			$('#v3').vbarSet();
			$('#v4').vbarSet();
			$('#v5').vbarSet();
	});



	$('#w').mouseenter(function(){
			$('#w1').vbarAnimate();
			$('#w2').vbarAnimate();
			$('#w3').vbarAnimate();
	});
	$('#w').click(function(){
			$('#w1').vbarSet();
			$('#w2').vbarSet();
			$('#w3').vbarSet();
	});



	$('#x').mouseenter(function(){
			$('#x1').vbarAnimate();
			$('#x2').vbarAnimate();
			$('#x3').vbarAnimate();
			$('#x4').vbarAnimate();
			$('#x5').vbarAnimate();
	});
	$('#x').click(function(){
			$('#x1').vbarSet();
			$('#x2').vbarSet();
			$('#x3').vbarSet();
			$('#x4').vbarSet();
			$('#x5').vbarSet();
	});



	$('#y').mouseenter(function(){
			$('#y1').vbarAnimate();
			$('#y2').vbarAnimate();
			$('#y3').vbarAnimate();
	});
	$('#y').click(function(){
			$('#y1').vbarSet();
			$('#y2').vbarSet();
			$('#y3').vbarSet();
	});




	$('#z').mouseenter(function(){
			$('#z1').hbarAnimate();
			$('#z2').hbarAnimate();
			$('#z3').hbarAnimate();
			$('#z4').hbarAnimate();
	});
	$('#z').click(function(){
			$('#z1').hbarSet();
			$('#z2').hbarSet();
			$('#z3').hbarSet();
			$('#z4').hbarSet();
	});



	$('#zero').mouseenter(function(){
			$('#zero1').vbarAnimate();
			$('#zero2').hbarAnimate();
			$('#zero3').hbarAnimate();
			$('#zero4').vbarAnimate();
			$('#zero5').hbarAnimate();
			$('#zero6').hbarAnimate();
	});
	$('#zero').click(function(){
			$('#zero1').vbarSet();
			$('#zero2').hbarSet();
			$('#zero3').hbarSet();
			$('#zero4').vbarSet();
			$('#zero5').hbarSet();
			$('#zero6').hbarSet();
	});



	$('#one').mouseenter(function(){
			$('#one1').vbarAnimate();
			$('#one2').hbarAnimate();
			$('#one3').hbarAnimate();
	});
	$('#one').click(function(){
			$('#one1').vbarSet();
			$('#one2').hbarSet();
			$('#one3').hbarSet();
	});



	$('#two').mouseenter(function(){
			$('#two1').hbarAnimate();
			$('#two2').vbarAnimate();
			$('#two3').hbarAnimate();
			$('#two4').hbarAnimate();
	});
	$('#two').click(function(){
			$('#two1').hbarSet();
			$('#two2').vbarSet();
			$('#two3').hbarSet();
			$('#two4').hbarSet();
	});



	$('#three').mouseenter(function(){
			$('#three1').vbarAnimate();
			$('#three2').vbarAnimate();
			$('#three3').hbarAnimate();
			$('#three4').hbarAnimate();
			$('#three5').hbarAnimate();
	});
	$('#three').click(function(){
			$('#three1').vbarSet();
			$('#three2').vbarSet();
			$('#three3').hbarSet();
			$('#three4').hbarSet();
			$('#three5').hbarSet();
	});



	$('#four').mouseenter(function(){
			$('#four1').vbarAnimate();
			$('#four2').vbarAnimate();
			$('#four3').hbarAnimate();
	});
	$('#four').click(function(){
			$('#four1').vbarSet();
			$('#four2').vbarSet();
			$('#four3').hbarSet();
	});



	$('#five').mouseenter(function(){
			$('#five1').vbarAnimate();
			$('#five2').vbarAnimate();
			$('#five3').hbarAnimate();
			$('#five4').hbarAnimate();
			$('#five5').hbarAnimate();
	});
	$('#five').click(function(){
			$('#five1').vbarSet();
			$('#five2').vbarSet();
			$('#five3').hbarSet();
			$('#five4').hbarSet();
			$('#five5').hbarSet();
	});



	$('#six').mouseenter(function(){
			$('#six1').vbarAnimate();
			$('#six2').vbarAnimate();
			$('#six3').hbarAnimate();
			$('#six4').hbarAnimate();
			$('#six5').hbarAnimate();
	});
	$('#six').click(function(){
			$('#six1').vbarSet();
			$('#six2').vbarSet();
			$('#six3').hbarSet();
			$('#six4').hbarSet();
			$('#six5').hbarSet();
	});



	$('#seven').mouseenter(function(){
			$('#seven1').hbarAnimate();
			$('#seven2').hbarAnimate();
			$('#seven3').hbarAnimate();
			$('#seven4').vbarAnimate();
	});
	$('#seven').click(function(){
			$('#seven1').hbarSet();
			$('#seven2').hbarSet();
			$('#seven3').hbarSet();
			$('#seven4').vbarSet();
	});



	$('#eight').mouseenter(function(){
			$('#eight1').vbarAnimate();
			$('#eight2').vbarAnimate();
			$('#eight3').vbarAnimate();
			$('#eight4').vbarAnimate();
			$('#eight5').hbarAnimate();
			$('#eight6').hbarAnimate();
			$('#eight7').hbarAnimate();
	});
	$('#eight').click(function(){
			$('#eight1').vbarSet();
			$('#eight2').vbarSet();
			$('#eight3').vbarSet();
			$('#eight4').vbarSet();
			$('#eight5').hbarSet();
			$('#eight6').hbarSet();
			$('#eight7').hbarSet();
	});



	$('#nine').mouseenter(function(){
			$('#nine1').vbarAnimate();
			$('#nine2').vbarAnimate();
			$('#nine3').hbarAnimate();
			$('#nine4').hbarAnimate();
			$('#nine5').hbarAnimate();
	});
	$('#nine').click(function(){
			$('#nine1').vbarSet();
			$('#nine2').vbarSet();
			$('#nine3').hbarSet();
			$('#nine4').hbarSet();
			$('#nine5').hbarSet();
	});


	// TITLE SEQUENCE !!!!!
	$('#mTitle1').mouseenter(function(){
			$('#m1Title1').vbarAnimate();
			$('#m2Title1').vbarAnimate();
			$('#m3Title1').vbarAnimate();
	});
	$('#mTitle1').click(function(){
			$('#m1Title1').vbarSet();
			$('#m2Title1').vbarSet();
			$('#m3Title1').vbarSet();
	});

	$('#eTitle').mouseenter(function(){
			$('#e1Title').vbarAnimate();
			$('#e2Title').hbarAnimate();
			$('#e3Title').hbarAnimate();
			$('#e4Title').hbarAnimate();
	});
	$('#eTitle').click(function(){
			$('#e1Title').vbarSet();
			$('#e2Title').hbarSet();
			$('#e3Title').hbarSet();
			$('#e4Title').hbarSet();
	});

	$('#tTitle').mouseenter(function(){
			$('#t1Title').vbarAnimate();
			$('#t2Title').hbarAnimate();
			$('#t3Title').hbarAnimate();
	});
	$('#tTitle').click(function(){
			$('#t1Title').vbarSet();
			$('#t2Title').hbarSet();
			$('#t3Title').hbarSet();
	});

	$('#aTitle').mouseenter(function(){
			$('#a1Title').vbarAnimate();
			$('#a2Title').vbarAnimate();
			$('#a3Title').vbarAnimate();
			$('#a4Title').vbarAnimate();
			$('#a5Title').vbarAnimate();
			$('#a6Title').hbarAnimate();
	});
	$('#aTitle').click(function(){
			$('#a1Title').vbarSet();
			$('#a2Title').vbarSet();
			$('#a3Title').vbarSet();
			$('#a4Title').vbarSet();
			$('#a5Title').vbarSet();
			$('#a6Title').hbarSet();
	});

	$('#mTitle2').mouseenter(function(){
			$('#m1Title2').vbarAnimate();
			$('#m2Title2').vbarAnimate();
			$('#m3Title2').vbarAnimate();
	});
	$('#mTitle2').click(function(){
			$('#m1Title2').vbarSet();
			$('#m2Title2').vbarSet();
			$('#m3Title2').vbarSet();
	});

	$('#oTitle').mouseenter(function(){
			$('#o1Title').vbarAnimate();
			$('#o2Title').hbarAnimate();
			$('#o3Title').hbarAnimate();
			$('#o4Title').vbarAnimate();
	});
	$('#oTitle').click(function(){
			$('#o1Title').vbarSet();
			$('#o2Title').hbarSet();
			$('#o3Title').hbarSet();
			$('#o4Title').vbarSet();
	});

	$('#rTitle').mouseenter(function(){
			$('#r1Title').vbarAnimate();
			$('#r2Title').vbarAnimate();
			$('#r3Title').vbarAnimate();
			$('#r4Title').hbarAnimate();
			$('#r5Title').hbarAnimate();
	});
	$('#rTitle').click(function(){
			$('#r1Title').vbarSet();
			$('#r2Title').vbarSet();
			$('#r3Title').vbarSet();
			$('#r4Title').hbarSet();
			$('#r5Title').hbarSet();
	});

	$('#pTitle').mouseenter(function(){
			$('#p1Title').vbarAnimate();
			$('#p2Title').vbarAnimate();
			$('#p3Title').hbarAnimate();
			$('#p4Title').hbarAnimate();
	});
	$('#pTitle').click(function(){
			$('#p1Title').vbarSet();
			$('#p2Title').vbarSet();
			$('#p3Title').hbarSet();
			$('#p4Title').hbarSet();
	});

	$('#hTitle').mouseenter(function(){
			$('#h1Title').vbarAnimate();
			$('#h2Title').vbarAnimate();
			$('#h3Title').hbarAnimate();
	});
	$('#hTitle').click(function(){
			$('#h1Title').vbarSet();
			$('#h2Title').vbarSet();
			$('#h3Title').hbarSet();
	});

	// //click to turn page into starry sky
	// $('body').dblclick(function() {
	// 	$('.vbar, .hbar').toggleClass("barsToStars");
	// 	$('body').toggleClass('nightskyBody');
	// 	// nightTime = true;
	// });
	// //end

		// //make stars shoot away
		// $('.letter .hbar').mouseover(function(){
		// 	if ($('body').hasClass('nightskyBody')) {
		// 		// $(this).animate({width: '150%',}, 200);
		// 		var goLeft = Math.floor(Math.random() * 300) + 500; 
		// 		var goUp = (Math.floor(Math.random() * 300) + 500) * (-1);
		// 		var time1 = Math.floor(Math.random() * 300) + 200;
		// 		$(this).animate({left: goLeft, top: goUp,}, time1).animate({opacity: 0,}, 300);
		// 	}
		// });

		// $('.letter .vbar').mouseover(function(){
		// 	if ($('body').hasClass('nightskyBody')) {
		// 		var goRight = (Math.floor(Math.random() * 300) + 500) * (-1); 
		// 		var goDown = (Math.floor(Math.random() * 300) + 500);
		// 		var time2 = Math.floor(Math.random() * 300) + 200;
		// 		$(this).animate({left: goRight, top: goDown,}, time2).animate({opacity: 0,}, 300);
		// 	}
		// });
	//end -- shoots in night mode correctly, but has delay on toggle and on shooting

		// $('#a').click(function(){
		// 	if ($('body').hasClass('nightskyBody')) {
		// 		$('#a .hbar, #a .vbar').toggleClass(".twinkle");
		// 	}
		// });


	// $.fn.fade = function() {
	// 	var fadeVal = Math.floor(Math.random()); 
	// 	var time = Math.floor(Math.random() * 500) + 500;
	// 	$(this).animate({opacity: fadeVal}, time).animate({opacity: 1,}, time);
	// }

	// 	$('#a').mouseenter(function(){
	// 		if ($('body').hasClass('nightskyBody')) {
	// 			$('#a1').fade();
	// 			$('#a2').fade();
	// 			$('#a3').fade();
	// 			$('#a4').fade();
	// 			$('#a5').fade();
	// 			$('#a6').fade();
	// 		}
	// 	});



	$('body').dblclick(function(){
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
			$('#q5').hbarSet();
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
			$('#six1').vbarSet();
			$('#six2').vbarSet();
			$('#six3').hbarSet();
			$('#six4').hbarSet();
			$('#six5').hbarSet();
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

			$('#m1Title1').vbarSet();
			$('#m2Title1').vbarSet();
			$('#m3Title1').vbarSet();
			$('#e1Title').vbarSet();
			$('#e2Title').hbarSet();
			$('#e3Title').hbarSet();
			$('#e4Title').hbarSet();
			$('#t1Title').vbarSet();
			$('#t2Title').hbarSet();
			$('#t3Title').hbarSet();
			$('#a1Title').vbarSet();
			$('#a2Title').vbarSet();
			$('#a3Title').vbarSet();
			$('#a4Title').vbarSet();
			$('#a5Title').vbarSet();
			$('#a6Title').hbarSet();
			$('#m1Title2').vbarSet();
			$('#m2Title2').vbarSet();
			$('#m3Title2').vbarSet();
			$('#o1Title').vbarSet();
			$('#o2Title').hbarSet();
			$('#o3Title').hbarSet();
			$('#o4Title').vbarSet();
			$('#r1Title').vbarSet();
			$('#r2Title').vbarSet();
			$('#r3Title').vbarSet();
			$('#r4Title').hbarSet();
			$('#r5Title').hbarSet();
			$('#p1Title').vbarSet();
			$('#p2Title').vbarSet();
			$('#p3Title').hbarSet();
			$('#p4Title').hbarSet();
			$('#h1Title').vbarSet();
			$('#h2Title').vbarSet();
			$('#h3Title').hbarSet();








	});



	$.fn.vbarLoad = function() {
		var randomW = Math.floor(Math.random() * 35) + 10+ '%'; 
		$(this).animate({width: randomW,}, 0);
	}

	$.fn.hbarLoad = function() {
		var randomH = Math.floor(Math.random() * 35) + 10+ '%'; 
		$(this).animate({height: randomH,}, 0);
	}

	// $(function(){
	// 		$('#a1').vbarLoad();
	// 		$('#a2').vbarLoad();
	// 		$('#a3').vbarLoad();
	// 		$('#a4').vbarLoad();
	// 		$('#a5').vbarLoad();
	// 		$('#a6').hbarLoad();
	// 		$('#b1').vbarLoad();
	// 		$('#b2').vbarLoad();
	// 		$('#b3').vbarLoad();
	// 		$('#b4').hbarLoad();
	// 		$('#b5').hbarLoad();
	// 		$('#b6').hbarLoad();
	// 		$('#c1').vbarLoad();
	// 		$('#c2').hbarLoad();
	// 		$('#c3').hbarLoad();
	// 		$('#d1').vbarLoad();
	// 		$('#d2').vbarLoad();
	// 		$('#d3').hbarLoad();
	// 		$('#d4').hbarLoad();
	// 		$('#e1').vbarLoad();
	// 		$('#e2').hbarLoad();
	// 		$('#e3').hbarLoad();
	// 		$('#e4').hbarLoad();
	// 		$('#f1').vbarLoad();
	// 		$('#f2').hbarLoad();
	// 		$('#f3').hbarLoad();
	// 		$('#g1').vbarLoad();
	// 		$('#g2').hbarLoad();
	// 		$('#g3').hbarLoad();
	// 		$('#g4').hbarLoad();
	// 		$('#g5').hbarLoad();
	// 		$('#h1').vbarLoad();
	// 		$('#h2').vbarLoad();
	// 		$('#h3').hbarLoad();
	// 		$('#i1').vbarLoad();
	// 		$('#i2').hbarLoad();
	// 		$('#i3').hbarLoad();
	// 		$('#j1').vbarLoad();
	// 		$('#j2').hbarLoad();
	// 		$('#j3').hbarLoad();
	// 		$('#j4').hbarLoad();
	// 		$('#k1').vbarLoad();
	// 		$('#k2').vbarLoad();
	// 		$('#k3').vbarLoad();
	// 		$('#k4').vbarLoad();
	// 		$('#l1').vbarLoad();
	// 		$('#l2').hbarLoad();
	// 		$('#m1').vbarLoad();
	// 		$('#m2').vbarLoad();
	// 		$('#m3').vbarLoad();
	// 		$('#n1').vbarLoad();
	// 		$('#n2').vbarLoad();
	// 		$('#n3').vbarLoad();
	// 		$('#n4').vbarLoad();
	// 		$('#o1').vbarLoad();
	// 		$('#o2').hbarLoad();
	// 		$('#o3').hbarLoad();
	// 		$('#o4').vbarLoad();
	// 		$('#p1').vbarLoad();
	// 		$('#p2').vbarLoad();
	// 		$('#p3').hbarLoad();
	// 		$('#p4').hbarLoad();
	// 		$('#q1').vbarLoad();
	// 		$('#q2').hbarLoad();
	// 		$('#q3').hbarLoad();
	// 		$('#q4').vbarLoad();
	// 		$('#q5').hbarLoad();
	// 		$('#r1').vbarLoad();
	// 		$('#r2').vbarLoad();
	// 		$('#r3').vbarLoad();
	// 		$('#r4').hbarLoad();
	// 		$('#r5').hbarLoad();
	// 		$('#s1').hbarLoad();
	// 		$('#s2').vbarLoad();
	// 		$('#s3').vbarLoad();
	// 		$('#s4').vbarLoad();
	// 		$('#s5').hbarLoad();
	// 		$('#t1').vbarLoad();
	// 		$('#t2').hbarLoad();
	// 		$('#t3').hbarLoad();
	// 		$('#u1').vbarLoad();
	// 		$('#u2').vbarLoad();
	// 		$('#u3').hbarLoad();
	// 		$('#v1').vbarLoad();
	// 		$('#v2').vbarLoad();
	// 		$('#v3').vbarLoad();
	// 		$('#v4').vbarLoad();
	// 		$('#v5').vbarLoad();
	// 		$('#w1').vbarLoad();
	// 		$('#w2').vbarLoad();
	// 		$('#w3').vbarLoad();
	// 		$('#x1').vbarLoad();
	// 		$('#x2').vbarLoad();
	// 		$('#x3').vbarLoad();
	// 		$('#x4').vbarLoad();
	// 		$('#x5').vbarLoad();
	// 		$('#y1').vbarLoad();
	// 		$('#y2').vbarLoad();
	// 		$('#y3').vbarLoad();
	// 		$('#z1').hbarLoad();
	// 		$('#z2').hbarLoad();
	// 		$('#z3').hbarLoad();
	// 		$('#z4').hbarLoad();
	// 		$('#zero1').vbarLoad();
	// 		$('#zero2').hbarLoad();
	// 		$('#zero3').hbarLoad();
	// 		$('#zero4').vbarLoad();
	// 		$('#zero5').hbarLoad();
	// 		$('#zero6').hbarLoad();
	// 		$('#one1').vbarLoad();
	// 		$('#one2').hbarLoad();
	// 		$('#one3').hbarLoad();
	// 		$('#two1').hbarLoad();
	// 		$('#two2').vbarLoad();
	// 		$('#two3').hbarLoad();
	// 		$('#two4').hbarLoad();
	// 		$('#three1').vbarLoad();
	// 		$('#three2').vbarLoad();
	// 		$('#three3').hbarLoad();
	// 		$('#three4').hbarLoad();
	// 		$('#three5').hbarLoad();
	// 		$('#four1').vbarLoad();
	// 		$('#four2').vbarLoad();
	// 		$('#four3').hbarLoad();
	// 		$('#five1').vbarLoad();
	// 		$('#five2').vbarLoad();
	// 		$('#five3').hbarLoad();
	// 		$('#five4').hbarLoad();
	// 		$('#five5').hbarLoad();
	// 		$('#six1').vbarLoad();
	// 		$('#six2').vbarLoad();
	// 		$('#six3').hbarLoad();
	// 		$('#six4').hbarLoad();
	// 		$('#six5').hbarLoad();
	// 		$('#seven1').hbarLoad();
	// 		$('#seven2').hbarLoad();
	// 		$('#seven3').hbarLoad();
	// 		$('#seven4').vbarLoad();
	// 		$('#eight1').vbarLoad();
	// 		$('#eight2').vbarLoad();
	// 		$('#eight3').vbarLoad();
	// 		$('#eight4').vbarLoad();
	// 		$('#eight5').hbarLoad();
	// 		$('#eight6').hbarLoad();
	// 		$('#eight7').hbarLoad();
	// 		$('#nine1').vbarLoad();
	// 		$('#nine2').vbarLoad();
	// 		$('#nine3').hbarLoad();
	// 		$('#nine4').hbarLoad();
	// 		$('#nine5').hbarLoad();

	// 		$('#m1Title1').vbarLoad();
	// 		$('#m2Title1').vbarLoad();
	// 		$('#m3Title1').vbarLoad();
	// 		$('#e1Title').vbarLoad();
	// 		$('#e2Title').hbarLoad();
	// 		$('#e3Title').hbarLoad();
	// 		$('#e4Title').hbarLoad();
	// 		$('#t1Title').vbarLoad();
	// 		$('#t2Title').hbarLoad();
	// 		$('#t3Title').hbarLoad();
	// 		$('#a1Title').vbarLoad();
	// 		$('#a2Title').vbarLoad();
	// 		$('#a3Title').vbarLoad();
	// 		$('#a4Title').vbarLoad();
	// 		$('#a5Title').vbarLoad();
	// 		$('#a6Title').hbarLoad();
	// 		$('#m1Title2').vbarLoad();
	// 		$('#m2Title2').vbarLoad();
	// 		$('#m3Title2').vbarLoad();
	// 		$('#o1Title').vbarLoad();
	// 		$('#o2Title').hbarLoad();
	// 		$('#o3Title').hbarLoad();
	// 		$('#o4Title').vbarLoad();
	// 		$('#r1Title').vbarLoad();
	// 		$('#r2Title').vbarLoad();
	// 		$('#r3Title').vbarLoad();
	// 		$('#r4Title').hbarLoad();
	// 		$('#r5Title').hbarLoad();
	// 		$('#p1Title').vbarLoad();
	// 		$('#p2Title').vbarLoad();
	// 		$('#p3Title').hbarLoad();
	// 		$('#p4Title').hbarLoad();
	// 		$('#h1Title').vbarLoad();
	// 		$('#h2Title').vbarLoad();
	// 		$('#h3Title').hbarLoad();
	// });


	// $.fn.fade = function() {
	// 	var fadeVal = Math.floor(Math.random()); 
	// 	var time = Math.floor(Math.random() * 500) + 500;
	// 	$(this).animate({opacity: fadeVal}, time).animate({opacity: 1,}, time);
	// }

	// 	$('.letter').mouseenter(function(){
	// 		$(this).fade();
	// 	});



});




