console.log("hello");


// hover over bar of first 2 makes first 2 disappear
$(document).ready(function(){

	$('#two1 .hbar, #two1 .vbar').mouseover(function(){
		$("#two1").animate({opacity:"0",}, 200);
	});

	$('#two1 .hbar, #two1 .vbar').mouseout(function(){	
		$("#two1").animate({opacity:"1",}, 200);
	});

});

// hover over any bar of any 2 makes second 2 disappear
$(document).ready(function(){

	$('.hbar, .vbar').mouseover(function(){
		$("#two2").animate({opacity:"0",}, 0);
	});

	$('.hbar, .vbar').mouseout(function(){	
		$("#two2").animate({opacity:"1",}, 0);
	});

});

// each bar disappears when clicked
$(document).ready(function(){

	$('#two3 .hbar, #two3 .vbar').click(function(){
		$(this).animate({opacity:"0",}, 1000);
	});

});

// expands in width when clicked
$(document).ready(function(){

	$('#two4 .hbar, #two4 .vbar').click(function(){
		$("#two4").animate({width: "100%",}, 1000);
	});

});

// each bar expands then contracts when hovered on
$(document).ready(function(){

	$('#two5 .hbar, #two5 .vbar').mouseover(function(){
		$(this).animate({width: "100%",}, 1000);
	});

	$('#two5 .hbar, #two5 .vbar').mouseover(function(){
		$(this).animate({width: "0",}, 200);
	});

});

// each bar expands then contracts when hovered on, length wise
$(document).ready(function(){

	$('#two6 .hbar').mouseover(function(){
		$(this).animate({width: "100%",}, 600);
	});

	$('#two6 .hbar').mouseover(function(){
		$(this).animate({width: "10%",}, 300);
	});

	$('#two6 .vbar').mouseover(function(){
		$(this).animate({height: "100%",}, 600);
	});

	$('#two6 .vbar').mouseover(function(){
		$(this).animate({height: "10%",}, 300);
	});

});

// each bar expands then contracts when hovered on, width wise
$(document).ready(function(){

	$('#two7 .hbar').mouseover(function(){
		$(this).animate({height: "100%",}, 600);
	});

	$('#two7 .hbar').mouseover(function(){
		$(this).animate({height: "10%",}, 300);
	});

	$('#two7 .vbar').mouseover(function(){
		$(this).animate({width: "100%",}, 600);
	});

	$('#two7 .vbar').mouseover(function(){
		$(this).animate({width: "10%",}, 300);
	});

});

// turns red when click any bar
$(document).ready(function(){

	$('#two8 .hbar, #two8 .vbar').click(function(){
		$('#two8 .hbar, #two8 .vbar').css("background-color", "red");
	});

});

// click #9 toggles show and hide of #8
$(document).ready(function(){
    $("#two9").click(function(){
        $("#two8").toggle(800);
    });
});


//color change on hover and disappear when clicked
$(document).ready(function(){
    $("#two10").click(function(){
        $("#two10").toggle(800);
    });
    $('#two10').mouseover(function(){
		$('#two10 .hbar, #two10 .vbar').css("background-color", "red");
	});
	$('#two10').mouseout(function(){
		$('#two10 .hbar, #two10 .vbar').css("background-color", "blue");
	});
});

// click one bar makes another go away
$(document).ready(function(){
    $("#two11 div:nth-child(1)").click(function(){
        $("#two11 div:nth-child(2)").toggle(0);
    });

     $("#two11 div:nth-child(2)").click(function(){
        $("#two11 div:nth-child(3)").toggle(0);
    });

     $("#two11 div:nth-child(3)").click(function(){
        $("#two11 div:nth-child(4)").toggle(0);
    });

     $("#two11 div:nth-child(4)").click(function(){
        $("#two11 div:nth-child(1)").toggle(0);
    });
});

// click #12 toggles show and hide of all others
$(document).ready(function(){
    $("#two12").click(function(){
        $(".two").not("#two12").toggle(800);
    });
});

// any bar changes to fill box
$(document).ready(function(){
	$('#two13 .hbar, #two13 .vbar').click(function(){
		$(this).animate({width: "100%", height: "100%", left: "0", top: "0",}, 1000);
	});
});

// click to invert
$(document).ready(function(){
	 $('#two14 .hbar, #two14 .vbar').click(function(){
        $('#two14').css("background-color", "black");
        $('#two14 .hbar, #two14 .vbar').css("background-color", "white");
    });
});

// hover to invert
$(document).ready(function(){
	 $('#two15').mouseover(function(){
        $('body').css("background-color", "black");
        $('.hbar, .vbar').css("background-color", "white");
    });

	$('#two15').mouseout(function(){
        $('body').css("background-color", "white");
        $('.hbar, .vbar').css("background-color", "black");
    });
});

// hover make all others transparent
$(document).ready(function(){
	$('#two16').mouseover(function(){
		$(".two").not('#two16').animate({opacity:"0",}, 2000);
	});
	$('#two16').mouseout(function(){
		$(".two").not('#two16').animate({opacity:"1",}, 2000);
	});

});


// lengthen each bar that's clicked on
$(document).ready(function(){

	$('#two17 .hbar').click(function(){
		$(this).animate({width: "100vw",}, 1000);
	});

	$('#two17 .vbar').click(function(){
		$(this).animate({height: "100vh",}, 200);
	});

});

// lengthen each bar that's clicked on, wide way
$(document).ready(function(){

	$('#two18 .hbar').click(function(){
		$(this).animate({height: "100vh",}, 1000);
	});

	$('#two18 .vbar').click(function(){
		$(this).animate({width: "100vw",}, 200);
	});

});

// click any bar to make bolder
$(document).ready(function(){

	$('#two19 .hbar, #two19 .vbar').click(function(){
		$('#two19 .hbar').animate({height: "20%",}, 200);
		$('#two19 .vbar').animate({width: "20%",}, 200);
	});

});

// click any bar to make lighter
$(document).ready(function(){

	$('#two20 .hbar, #two20 .vbar').click(function(){
		$('#two20 .hbar').animate({height: "2%",}, 200);
		$('#two20 .vbar').animate({width: "2%",}, 200);
	});

});

// make all bold while mouse is held
$(document).ready(function(){

	$('#two21').mousedown(function(){
		$('.hbar').animate({height: "20%",}, 200);
		$('.vbar').animate({width: "20%",}, 200);
	});

	$('#two21').mouseup(function(){
		$('.hbar').animate({height: "10%",}, 200);
		$('.vbar').animate({width: "10%",}, 200);
	});

});

// make all light while mouse is held
$(document).ready(function(){

	$('#two22').mousedown(function(){
		$('.hbar').animate({height: "2%",}, 200);
		$('.vbar').animate({width: "2%",}, 200);
	});

	$('#two22').mouseup(function(){
		$('.hbar').animate({height: "10%",}, 200);
		$('.vbar').animate({width: "10%",}, 200);
	});

});

// click to give red border
$(document).ready(function(){
	 $('#two23').click(function(){
	 	$('#two23 .hbar, #two23 .vbar').css("border-style", "solid");
	 	$('#two23 .hbar, #two23 .vbar').css("border-width", "3px");
        $('#two23 .hbar, #two23 .vbar').css("border-color", "red");
    });
});


// click to make red with black border
$(document).ready(function(){
	 $('#two24').click(function(){
	 	$('#two24 .hbar, #two24 .vbar').css("background-color", "red");
	 	$('#two24 .hbar, #two24 .vbar').css("border-style", "solid");
	 	$('#two24 .hbar, #two24 .vbar').css("border-width", "3px");
        $('#two24 .hbar, #two24 .vbar').css("border-color", "black");
    });
});

// click to make white with dotted border
$(document).ready(function(){
	 $('#two25').click(function(){
	 	$('#two25 .hbar, #two25 .vbar').css("background-color", "white");
	 	$('#two25 .hbar, #two25 .vbar').css("border-style", "dotted");
	 	$('#two25 .hbar, #two25 .vbar').css("border-width", "3px");
        $('#two25 .hbar, #two25 .vbar').css("border-color", "black");
    });
});

// // click to make white with dotted border
// $(document).ready(function(){
// 	 $('#two26').click(function(){
// 	 	$('#two26 .hbar, #two26 .vbar').css('transform', 'rotate('90')');
//     });
// });


// click to make move and come back
$(document).ready(function(){

	$('#two26').click('click touchstart', function(){
		$(this).animate({left: "1000",}, 1000);
		$(this).animate({left: "0",}, 400);
	});

});


// click to make move around and come back
$(document).ready(function(){

	$('#two27').click('click touchstart', function(){
		$(this).animate({right: "1000",}, 400);
		$(this).animate({right: "200", top: "-500"}, 400);
		$(this).animate({right: "500", top: "500"}, 400);
		$(this).animate({right: "0", top: "0"}, 400);
	});

});


//clicked one flashes
$(document).ready(function(){

	$('#two28').click(function(){
		$(this).animate({opacity:"0",}, 200);
		$(this).animate({opacity:"1",}, 200);
		$(this).animate({opacity:"0",}, 200);
		$(this).animate({opacity:"1",}, 200);
		$(this).animate({opacity:"0",}, 200);
		$(this).animate({opacity:"1",}, 200);
		$(this).animate({opacity:"0",}, 200);
		$(this).animate({opacity:"1",}, 200);
		$(this).animate({opacity:"0",}, 200);
		$(this).animate({opacity:"1",}, 200);
		$(this).animate({opacity:"0",}, 200);
		$(this).animate({opacity:"1",}, 200);
	});

});

//click to condense up
$(document).ready(function() {
	$('#two29').click(function() {
		$(this).animate({height: '0px'}, 500);
		$(this).animate({height: '600px'}, 800);
		$(this).animate({height: '300px'}, 500);

	});

});


//click to move each bar to the left
$(document).ready(function() {
	$('#two30 .hbar, #two30 .vbar').click(function() {
		$(this).animate({left: '0'}, 1000);
	});

});


//click to move each bar to the left then disappear
$(document).ready(function() {
	$('#two31 .hbar, #two31 .vbar').click(function() {
		$(this).animate({left: '0'}, 1000);
		$(this).animate({opacity: '0'}, 500);
	});

});

//click to stretch both ways
$(document).ready(function() {
	$('#two32').click(function() {
		$(this).animate({height: '800px'}, 800);
		$(this).animate({width: '1000px'}, 500);
		$(this).animate({height: '300px'}, 500);
		$(this).animate({width: '300px'}, 500);

	});
});

//click to make squares and send away
$(document).ready(function() {
	$('#two33 .hbar, #two33 .vbar').click(function() {
		$('#two33 .hbar').animate({width: '10%'}, 400);
		$('#two33 .vbar').animate({height: '10%'}, 400);
		$('#two33 .hbar, #two33 .vbar').animate({top: '-500px', left: '-800px'}, 800);

	});
});

//click to enlarge
$(document).ready(function() {
	$('#two34').click(function() {
		$('#two34').animate({width: '600px', height: '600px'}, 400);
	});
});

//click to shrink
$(document).ready(function() {
	$('#two35').click(function() {
		$('#two35').animate({width: '100px', height: '100px'}, 400);
	});
});

//click to toggle change color
$(document).ready(function() {
	$('#two36').click(function() {
		$('#two36 .hbar, #two36 .vbar').toggleClass("red");
	});
});

//click to toggle 90deg rotation of bars
$(document).ready(function() {
	$('#two37').click(function() {
		$('#two37 .hbar, #two37 .vbar').toggleClass("rotate90");
	});
});

//click to toggle 90deg rotation of form
$(document).ready(function() {
	$('#two38').click(function() {
		$(this).toggleClass("rotate90");
	});
});

//click to toggle 90deg rotation of every form
$(document).ready(function() {
	$('#two39').click(function() {
		$('.two').toggleClass("rotate90");
	});
});

//click to spin form
$(document).ready(function() {
	$('#two40').click(function() {
		$(this).toggleClass("spinning");
	});
});

//hover over each to spin each bar
$(document).ready(function() {
	$('#two41 .hbar, #two41 .vbar').mouseover(function(event) {
		$(this).toggleClass("spinning");
	});
});


