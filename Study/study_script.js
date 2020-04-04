statetext = localStorage.getItem("state");
state = JSON.parse(statetext);

programtext = localStorage.getItem("program");
program = JSON.parse(programtext);

calendartext = localStorage.getItem("calendar");
calendar = JSON.parse(calendartext);

var emptyForm = true;

window.addEventListener("load",function() {
	
	if (window.location.href.indexOf("study.html") > -1) {
		$('#button1').css("background-color","white");
		$('#button1').css({ width: '350px', left: '35px' });
	} else if (window.location.href.indexOf("study_pc.html") > -1) {
		$('#button2').css("background-color","white");
		$('#button2').css({ width: '350px', left: '35px' });
	} else if (window.location.href.indexOf("study_blinds.html") > -1) {
		$('#button3').css("background-color","white");
		$('#button3').css({ width: '350px', left: '35px' });
	}
	
	if (state.study.light === true) {
		$("#onoff").css("background-color", "#f0dc3c")
		$('#bulb').prepend('<div id="brightness"></div>');
		b = parseInt((-(2.55*state.study.light_value)+255)).toString(16)
			if (b.length < 2) {
				b = '0' + b;
			}
			hex = "#FFFF" + b;
			$("#brightness").css('background-color', hex);
		$("#slider").roundSlider({disabled: false,tooltipFormat: function(e) {return e.value + "%" ;}});
	} else if (state.study.light === false) {
		$("#onoff").css("background-color", "#acacac")
		$('#bulb').prepend('<div id="brightness"></div>');
		$("#slider").roundSlider({disabled: true,tooltipFormat: function(e) {return e.value + "%" ;}});
	}
	
	$('#onoff').click(function(event) {
		if(state.study.light === true){
			state.study.light = false;
			$("#onoff").css("background-color", "#acacac")
			$("#brightness").remove()
			$('#bulb').prepend('<div id="brightness"></div>');
			$("#slider").roundSlider({disabled: true});
		} else {
			state.study.light = true;
			$("#onoff").css("background-color", "#f0dc3c")
			$("#brightness").remove()
			$('#bulb').prepend('<div id="brightness"></div>');
			b = parseInt((-(2.55*state.study.light_value)+255)).toString(16)
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
        value: state.study.light_value,
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
			state.study.light_value = $("#slider").roundSlider("option", "value");
			stateJSON = JSON.stringify(state);
			localStorage.setItem("state", stateJSON);
			b = parseInt((-(2.55*state.study.light_value)+255)).toString(16)
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
	
	blinds(state.study.blinds);
	
	if (state.study.blinds == 0){
		$('#topButton').toggle();
		$('#upButton').toggle();
	}
	if (state.study.blinds == 4){
		$('#downButton').toggle();
		$('#bottomButton').toggle();
	}
	
	$("#topButton").click(function(event) {
		if (state.study.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		state.study.blinds = 0;
		if (state.study.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		blinds(state.study.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#upButton').click(function(event) {
		if (state.study.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		state.study.blinds = parseInt(state.study.blinds) - 1;
		if (state.study.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		blinds(state.study.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$("#downButton").click(function(event) {
		if (state.study.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		state.study.blinds = parseInt(state.study.blinds) + 1;
		if (state.study.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		blinds(state.study.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$("#bottomButton").click(function(event) {
		if (state.study.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		state.study.blinds = 4;
		if (state.study.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		blinds(state.study.blinds);
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
	
	function pc(num){
		switch (num) {
		case 0:
			$("#channel img:last-child").remove();
			$("#channel").prepend('<img id="imagemPC" src="../images/fcul.jpg" />');
			break;
		case 1:
			$("#channel img:last-child").remove();
			$("#channel").prepend('<img id="imagemPC" src="../images/spotifyPC.png" />');
			break;
		case 2:
			$("#channel img:last-child").remove();
			$("#channel").prepend('<img id="imagemPC" src="../images/atomPC.png" />');
			break;
		case 3:
			$("#channel img:last-child").remove();
			$("#channel").prepend('<img id="imagemPC" src="../images/chromePC.png" />');
			break;
		case 4:
			$("#channel img:last-child").remove();
			$("#channel").prepend('<img id="imagemPC" src="../images/netflixscreen.png" />');
			break;
		case 5:
			$("#channel img:last-child").remove();
			$("#channel").prepend('<img id="imagemPC" src="../images/YouTubePC.jpg" />');
			break;
		}
	}
	
	if (state.study.pc === true) {
		$('.buttonDivPC').show();
		$('#channel').show();
		pc(state.study.pc_channel);
	} else if (state.study.pc === false) {
		$('.buttonDivPC').hide();
		$('#channel').hide();
	}
	
	$('#onoffpc').click(function(event) {
		if (state.study.pc === true) {
			state.study.pc = false;
			$('.buttonDivPC').hide();
			$('#channel').hide();
		} else {
			state.study.pc = true;
			$('.buttonDivPC').show();
			$('#channel').show();
			pc(state.study.pc_channel);
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button1PC').click(function(event) {
		pc(0);
		state.study.pc_channel = 0;
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button2PC').click(function(event) {
		pc(1);
		state.study.pc_channel = 1;
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button3PC').click(function(event) {
		pc(2);
		state.study.pc_channel = 2;
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button4PC').click(function(event) {
		pc(3);
		state.study.pc_channel = 3;
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button5PC').click(function(event) {
		pc(4);
		state.study.pc_channel = 4;
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button6PC').click(function(event) {
		pc(5);
		state.study.pc_channel = 5;
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
		program.study.light.push(datestart);
		program.study.light_value.push($('#light_value').val());
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
		if (year_start == 2018) {
			if (month_start == 12) {
				i = day_start - 11;
				calendar[i].push([datestart, "Study", "Lights", $('#light_value').val()+"%"]);
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
		program.study.blinds.push(datestart);
		program.study.blinds_value.push(s.options[s.selectedIndex].value);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
		if (year_start == 2018) {
			if (month_start == 12) {
				i = day_start - 11;
				calendar[i].push([datestart, "Study", "Blinds", s.options[s.selectedIndex].value]);
				calendarJSON = JSON.stringify(calendar);
				localStorage.setItem("calendar", calendarJSON);
			}
		}
	};
});