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

// each bar expands then contracts when hovered on, length wise
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

// each bar expands then contracts when hovered on, width wise
$(document).ready(function(){

	$('#two7 .hbar').mouseover(function(){
		$(this).animate({
		height: "100%",
		}, 600);
	});

	$('#two7 .hbar').mouseover(function(){
		$(this).animate({
		height: "10%",
		}, 300);
	});

	$('#two7 .vbar').mouseover(function(){
		$(this).animate({
		width: "100%",
		}, 600);
	});

	$('#two7 .vbar').mouseover(function(){
		$(this).animate({
		width: "10%",
		}, 300);
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
		$(this).animate({
		width: "100%",
		height: "100%",
		left: "0",
		top: "0",
		}, 1000);
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
		$(".two").not('#two16').animate({
		opacity:"0",
		}, 2000);
	});
	$('#two16').mouseout(function(){
		$(".two").not('#two16').animate({
		opacity:"1",
		}, 2000);
	});

});


// lengthen each bar that's clicked on
$(document).ready(function(){

	$('#two17 .hbar').click(function(){
		$(this).animate({
		width: "100vw",
		}, 1000);
	});

	$('#two17 .vbar').click(function(){
		$(this).animate({
		height: "100vh",
		}, 200);
	});

});

// lengthen each bar that's clicked on, wide way
$(document).ready(function(){

	$('#two18 .hbar').click(function(){
		$(this).animate({
		height: "100vh",
		}, 1000);
	});

	$('#two18 .vbar').click(function(){
		$(this).animate({
		width: "100vw",
		}, 200);
	});

});

// click any bar to make bolder
$(document).ready(function(){

	$('#two19 .hbar, #two19 .vbar').click(function(){
		$('#two19 .hbar').animate({
		height: "20%",
		}, 200);
		$('#two19 .vbar').animate({
		width: "20%",
		}, 200);
	});

});

// click any bar to make lighter
$(document).ready(function(){

	$('#two20 .hbar, #two20 .vbar').click(function(){
		$('#two20 .hbar').animate({
		height: "2%",
		}, 200);
		$('#two20 .vbar').animate({
		width: "2%",
		}, 200);
	});

});

// make all bold while mouse is held
$(document).ready(function(){

	$('#two21').mousedown(function(){
		$('.hbar').animate({
		height: "20%",
		}, 200);
		$('.vbar').animate({
		width: "20%",
		}, 200);
	});

	$('#two21').mouseup(function(){
		$('.hbar').animate({
		height: "10%",
		}, 200);
		$('.vbar').animate({
		width: "10%",
		}, 200);
	});

});

// make all light while mouse is held
$(document).ready(function(){

	$('#two22').mousedown(function(){
		$('.hbar').animate({
		height: "2%",
		}, 200);
		$('.vbar').animate({
		width: "2%",
		}, 200);
	});

	$('#two22').mouseup(function(){
		$('.hbar').animate({
		height: "10%",
		}, 200);
		$('.vbar').animate({
		width: "10%",
		}, 200);
	});

});






