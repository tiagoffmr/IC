statetext = localStorage.getItem("state");
state = JSON.parse(statetext);

programtext = localStorage.getItem("program");
program = JSON.parse(programtext);

calendartext = localStorage.getItem("calendar");
calendar = JSON.parse(calendartext);

var emptyForm = true;

window.addEventListener("load",function() {
	
	if (window.location.href.indexOf("livingroom.html") > -1) {
		$('#button1').css("background-color","white");
		$('#button1').css({ width: '350px', left: '35px' });
	} else if (window.location.href.indexOf("livingroom_tv.html") > -1) {
		$('#button2').css("background-color","white");
		$('#button2').css({ width: '350px', left: '35px' });
	} else if (window.location.href.indexOf("livingroom_blinds.html") > -1) {
		$('#button3').css("background-color","white");
		$('#button3').css({ width: '350px', left: '35px' });
	}
	
	if (state.lroom.light === true) {
		$("#onoff").css("background-color", "#f0dc3c")
		$('#bulb').prepend('<div id="brightness"></div>');
		b = parseInt((-(2.55*state.lroom.light_value)+255)).toString(16)
			if (b.length < 2) {
				b = '0' + b;
			}
			hex = "#FFFF" + b;
			$("#brightness").css('background-color', hex);
		$("#slider").roundSlider({disabled: false,tooltipFormat: function(e) {return e.value + "%" ;}});
	} else if (state.lroom.light === false) {
		$("#onoff").css("background-color", "#acacac")
		$('#bulb').prepend('<div id="brightness"></div>');
		$("#slider").roundSlider({disabled: true,tooltipFormat: function(e) {return e.value + "%" ;}});
	}
	
	$('#onoff').click(function(event) {
		if (state.lroom.light === true) {
			state.lroom.light = false;
			$("#onoff").css("background-color", "#acacac")
			$("#brightness").remove()
			$('#bulb').prepend('<div id="brightness"></div>');
			$("#slider").roundSlider({disabled: true});
		} else {
			state.lroom.light = true;
			$("#onoff").css("background-color", "#f0dc3c")
			$("#brightness").remove()
			$('#bulb').prepend('<div id="brightness"></div>');
			b = parseInt((-(2.55*state.lroom.light_value)+255)).toString(16)
			if (b.length < 2) {
				b = '0' + b;
			}
			hex = "#FFFF" + b;
			$("#brightness").css('background-color', hex);
			$("#slider").roundSlider({disabled: false});
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#slider').roundSlider({
        radius: 80,
        circleShape: "pie",
        sliderType: "min-range",
        showTooltip: true,
		min: 1,
        value: state.lroom.light_value,
        startAngle: 315,
		mouseScrollAction: true,
		width: 5,
		handleSize: "+15",
		editableTooltip: false,
		keyboardAction: false,
		
		tooltipFormat: function(e) {
			return e.value + "%" ;
		},
		
		change: function() {
			state.lroom.light_value = $("#slider").roundSlider("option", "value");
			stateJSON = JSON.stringify(state);
			localStorage.setItem("state", stateJSON);
			b = parseInt((-(2.55*state.lroom.light_value)+255)).toString(16)
			if (b.length < 2) {
				b = '0' + b;
			}
			hex = "#FFFF" + b;
			$("#brightness").css('background-color', hex);
		}
    });
	
	function blinds(num){
		switch (num) {
		case 0:
			$(" #window img:last-child").remove();
			$(" #window").prepend('<img id="imagemCentral2" src="../images/window1.png" />');
			break;
		case 1:
			$(" #window img:last-child").remove();
			$(" #window").prepend('<img id="imagemCentral2" src="../images/window2.png" />');
			break;
		case 2:
			$(" #window img:last-child").remove();
			$(" #window").prepend('<img id="imagemCentral2" src="../images/window3.png" />');			
			break;
		case 3:
			$(" #window img:last-child").remove();
			$(" #window").prepend('<img id="imagemCentral2" src="../images/window4.png" />');			
			break;
		case 4:
			$(" #window img:last-child").remove();
			$(" #window").prepend('<img id="imagemCentral2" src="../images/window5.png" />');			
			break;
		}
	}
	
	blinds(state.lroom.blinds);
	
	if (state.lroom.blinds == 0){
		$('#topButton').toggle();
		$('#upButton').toggle();
	}
	if (state.lroom.blinds == 4){
		$('#downButton').toggle();
		$('#bottomButton').toggle();
	}
	
	$("#topButton").click(function(event) {
		if (state.lroom.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		state.lroom.blinds = 0;
		if (state.lroom.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		blinds(state.lroom.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#upButton').click(function(event) {
		if (state.lroom.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		state.lroom.blinds = parseInt(state.lroom.blinds) - 1;
		if (state.lroom.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		blinds(state.lroom.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$("#downButton").click(function(event) {
		if (state.lroom.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		state.lroom.blinds = parseInt(state.lroom.blinds) + 1;
		if (state.lroom.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		blinds(state.lroom.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$("#bottomButton").click(function(event) {
		if (state.lroom.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		state.lroom.blinds = 4;
		if (state.lroom.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		blinds(state.lroom.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#add').click(function(event) {
		formProg = "#programlight input";
		submitProg = "#oklight";
		if (emptyForm == true) {
			$(submitProg).attr("disabled", "disabled").css("display","none");
		} else {
			$(submitProg).removeAttr("disabled").css("display","block");
		}
		check_input(emptyForm, formProg, submitProg);
	});
	
	function tv(num){
		switch (num) {
		case 0:
			$("#channel img:last-child").remove();
			$("#channel").prepend('<img id="imagemTV" src="../images/rtp.jpg" />');
			break;
		case 1:
			$("#channel img:last-child").remove();
			$("#channel").prepend('<img id="imagemTV" src="../images/rtp2.jpg" />');
			break;
		case 2:
			$("#channel img:last-child").remove();
			$("#channel").prepend('<img id="imagemTV" src="../images/sic.jpg" />');
			break;
		case 3:
			$("#channel img:last-child").remove();
			$("#channel").prepend('<img id="imagemTV" src="../images/tvi.jpg" />');
			break;
		case 4:
			$("#channel img:last-child").remove();
			$("#channel").prepend('<img id="imagemTV" src="../images/netflixscreen.png" />');
			break;
		case 5:
			$("#channel img:last-child").remove();
			$("#channel").prepend('<img id="imagemTV" src="../images/youtube.jpg" />');
			break;
		}
	}
	
	if (state.lroom.tv === true) {
		$('.buttonDivTV').show();
		$('#channel').show();
		tv(state.lroom.tv_channel);
	} else if (state.lroom.tv === false) {
		$('.buttonDivTV').hide();
		$('#channel').hide();
	}
	
	$('#onofftv').click(function(event) {
		if (state.lroom.tv === true) {
			state.lroom.tv = false;
			$('.buttonDivTV').hide();
			$('#channel').hide();
		} else {
			state.lroom.tv = true;
			$('.buttonDivTV').show();
			$('#channel').show();
			tv(state.lroom.tv_channel);
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button1TV').click(function(event) {
		tv(0);
		state.lroom.tv_channel = 0;
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button2TV').click(function(event) {
		tv(1);
		state.lroom.tv_channel = 1;
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button3TV').click(function(event) {
		tv(2);
		state.lroom.tv_channel = 2;
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button4TV').click(function(event) {
		tv(3);
		state.lroom.tv_channel = 3;
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button5TV').click(function(event) {
		tv(4);
		state.lroom.tv_channel = 4;
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button6TV').click(function(event) {
		tv(5);
		state.lroom.tv_channel = 5;
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	function check_input(v, f, b) {
		$(f).keyup(function() {
			v = false;
			$(f).each(function() {
				if ($(this).val() == "" && $(this).prop("required")) {
					v = true;
					campo_vazio_res = true;
				}
			});
			if (v == true) {
				$(b).attr("disabled", "disabled").css("display","none"); 
			}else {
				$(b).removeAttr("disabled").css("display","block");
				campo_vazio_res = false;
			}
		});
	}
	
	function checkDateStart() {
		var [year_start, month_start, day_start] = $('#date_start').val().split("-");
		var [hours_start, minutes_start] = $('#time_start').val().split(":");
		var datestart = new Date(year_start, (month_start-1), day_start, hours_start, minutes_start, 0, 0);
		var now = new Date();
		if (datestart < now) {
			alert("Date must be in the future");
		}
	}
	
	$("#time_start").on("change", checkDateStart);
	
	$('#programlight').on('submit', addProgramLight);
	function addProgramLight(e) {
		var [year_start, month_start, day_start] = $('#date_start').val().split("-");
		var [hours_start, minutes_start] = $('#time_start').val().split(":")
		var datestart = new Date(year_start, (month_start-1), day_start, hours_start, minutes_start, 0, 0);
		program.lroom.light.push(datestart);
		program.lroom.light_value.push($('#light_value').val());
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
		if (year_start == 2018) {
			if (month_start == 12) {
				i = day_start - 11;
				calendar[i].push([datestart, "Living Room", "Lights", $('#light_value').val()+"%"]);
				calendarJSON = JSON.stringify(calendar);
				localStorage.setItem("calendar", calendarJSON);
			}
		}
	};
	
	$('#add').click(function(event) {
		formProg = "#programblinds input";
		submitProg = "#okblinds";
		if (emptyForm == true) {
			$(submitProg).attr("disabled", "disabled").css("display","none");
		} else {
			$(submitProg).removeAttr("disabled").css("display","block");
		}
		check_input(emptyForm, formProg, submitProg);
	});
	
	$('#programblinds').on('submit', addProgramBlinds);
	function addProgramBlinds(e) {
		var [year_start, month_start, day_start] = $('#date_start').val().split("-");
		var [hours_start, minutes_start] = $('#time_start').val().split(":");
		var datestart = new Date(year_start, (month_start-1), day_start, hours_start, minutes_start, 0, 0);
		var s = document.getElementById("blinds_start");
		program.lroom.blinds.push(datestart);
		program.lroom.blinds_value.push(s.options[s.selectedIndex].value);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
		if (year_start == 2018) {
			if (month_start == 12) {
				i = day_start - 11;
				calendar[i].push([datestart, "Living Room", "Blinds", s.options[s.selectedIndex].value]);
				calendarJSON = JSON.stringify(calendar);
				localStorage.setItem("calendar", calendarJSON);
			}
		}
	};
});