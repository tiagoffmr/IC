statetext = localStorage.getItem("state");
state = JSON.parse(statetext);

programtext = localStorage.getItem("program");
program = JSON.parse(programtext);

calendartext = localStorage.getItem("calendar");
calendar = JSON.parse(calendartext);

var emptyForm = true;

window.addEventListener("load",function() {
	
	if (window.location.href.indexOf("eroom.html") > -1) {
		$('#button1').css("background-color","white");
		$('#button1').css({ width: '350px', left: '35px' });
	}  else if (window.location.href.indexOf("eroom_blinds.html") > -1) {
		$('#button2').css("background-color","white");
		$('#button2').css({ width: '350px', left: '35px' });
	}
	
	if (state.foyer.light === true && state.hallway.light === true && state.kitchen.light === true && state.lroom.light === true && state.mroom.light === true && state.room1.light === true && state.room2.light === true && state.study.light === true && state.wc1.light === true && state.wc2.light === true && state.wc3.light === true) {
		$("#onoff").css("background-color", "#f0dc3c")
		$('#bulb').prepend('<div id="brightness"></div>');
		b = parseInt((-(2.55*state.kitchen.light_value)+255)).toString(16)
		if (b.length < 2) {
			b = '0' + b;
		}
		hex = "#FFFF" + b;
		$("#brightness").css('background-color', hex);
		$("#slider").roundSlider({disabled: false,tooltipFormat: function(e) {return e.value + "%" ;}});
	} else {
		$("#onoff").css("background-color", "#acacac")
		$('#bulb').prepend('<div id="brightness"></div>');
		$("#slider").roundSlider({disabled: true,tooltipFormat: function(e) {return e.value + "%" ;}});
	}

	$('#onoff').click(function(event) {
		if (state.foyer.light === true || state.hallway.light === true || state.kitchen.light === true || state.lroom.light === true || state.mroom.light === true || state.room1.light === true || state.room2.light === true || state.study.light === true || state.wc1.light === true || state.wc2.light === true || state.wc3.light === true) {
			state.foyer.light = state.hallway.light = state.kitchen.light = state.lroom.light = state.mroom.light = state.room1.light = state.room2.light = state.study.light = state.wc1.light = state.wc2.light = state.wc3.light = false;
			$("#onoff").css("background-color", "#acacac")
			$("#brightness").remove()
			$('#bulb').prepend('<div id="brightness"></div>');
			$("#slider").roundSlider({disabled: true});
		} else {
			state.foyer.light = state.hallway.light = state.kitchen.light = state.lroom.light = state.mroom.light = state.room1.light = state.room2.light = state.study.light = state.wc1.light = state.wc2.light = state.wc3.light = true;
			$("#onoff").css("background-color", "#f0dc3c")
			$("#brightness").remove();
			$('#bulb').prepend('<div id="brightness"></div>');
			b = parseInt((-(2.55*state.kitchen.light_value)+255)).toString(16)
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
        value: state.kitchen.light_value,
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
			state.foyer.light_value = state.hallway.light_value = state.kitchen.light_value = state.lroom.light_value = state.mroom.light_value = state.room1.light_value = state.room2.light_value = state.study.light_value = state.wc1.light_value = state.wc2.light_value = state.wc3.light_value = $("#slider").roundSlider("option", "value");
			stateJSON = JSON.stringify(state);
			localStorage.setItem("state", stateJSON);
			b = parseInt((-(2.55*state.kitchen.light_value)+255)).toString(16)
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
	
	if (state.foyer.blinds == 0 && state.kitchen.blinds == 0 && state.lroom.blinds == 0 && state.mroom.blinds == 0 && state.room1.blinds == 0 && state.room2.blinds == 0 && state.study.blinds == 0){
	} else if (state.foyer.blinds == 1 && state.kitchen.blinds == 1 && state.lroom.blinds == 1 && state.mroom.blinds == 1 && state.room1.blinds == 1 && state.room2.blinds == 1 && state.study.blinds == 1){
	} else if (state.foyer.blinds == 2 && state.kitchen.blinds == 2 && state.lroom.blinds == 2 && state.mroom.blinds == 2 && state.room1.blinds == 2 && state.room2.blinds == 2 && state.study.blinds == 2){
	} else if (state.foyer.blinds == 3 && state.kitchen.blinds == 3 && state.lroom.blinds == 3 && state.mroom.blinds == 3 && state.room1.blinds == 3 && state.room2.blinds == 3 && state.study.blinds == 3){
	} else if (state.foyer.blinds == 4 && state.kitchen.blinds == 4 && state.lroom.blinds == 4 && state.mroom.blinds == 4 && state.room1.blinds == 4 && state.room2.blinds == 4 && state.study.blinds == 4){
	} else { 
		state.foyer.blinds = state.hallway.blinds = state.kitchen.blinds = state.lroom.blinds = state.mroom.blinds = state.room1.blinds = state.room2.blinds = state.study.blinds = state.wc1.blinds = state.wc2.blinds = state.wc3.blinds = 0;
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	}
	
	blinds(state.kitchen.blinds);
	
	if (state.foyer.blinds == 0 && state.hallway.blinds == 0 && state.kitchen.blinds == 0 && state.lroom.blinds == 0 && state.mroom.blinds == 0 && state.room1.blinds == 0 && state.room2.blinds == 0 && state.study.blinds == 0 && state.wc1.blinds == 0 && state.wc2.blinds == 0 && state.wc3.blinds == 0){
		$('#topButton').toggle();
		$('#upButton').toggle();
	}
	
	if (state.foyer.blinds == 4 && state.kitchen.blinds == 4 && state.lroom.blinds == 4 && state.mroom.blinds == 4 && state.room1.blinds == 4 && state.room2.blinds == 4 && state.study.blinds == 4){
		$('#downButton').toggle();
		$('#bottomButton').toggle();
	}
	
	$("#topButton").click(function(event) {
		if (state.foyer.blinds == 4 && state.kitchen.blinds == 4 && state.lroom.blinds == 4 && state.mroom.blinds == 4 && state.room1.blinds == 4 && state.room2.blinds == 4 && state.study.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		state.foyer.blinds = state.hallway.blinds = state.kitchen.blinds = state.lroom.blinds = state.mroom.blinds = state.room1.blinds = state.room2.blinds = state.study.blinds = state.wc1.blinds = state.wc2.blinds = state.wc3.blinds = 0;
		if (state.foyer.blinds == 0 && state.kitchen.blinds == 0 && state.lroom.blinds == 0 && state.mroom.blinds == 0 && state.room1.blinds == 0 && state.room2.blinds == 0 && state.study.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		blinds(state.kitchen.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#upButton').click(function(event) {
		if (state.foyer.blinds == 4 && state.kitchen.blinds == 4 && state.lroom.blinds == 4 && state.mroom.blinds == 4 && state.room1.blinds == 4 && state.room2.blinds == 4 && state.study.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		state.foyer.blinds = state.kitchen.blinds = state.lroom.blinds = state.mroom.blinds = state.room1.blinds = state.room2.blinds = state.study.blinds = parseInt(state.kitchen.blinds) - 1;
		if (state.foyer.blinds == 0 && state.kitchen.blinds == 0 && state.lroom.blinds == 0 && state.mroom.blinds == 0 && state.room1.blinds == 0 && state.room2.blinds == 0 && state.study.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		blinds(state.kitchen.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$("#downButton").click(function(event) {
		if (state.foyer.blinds == 0 && state.kitchen.blinds == 0 && state.lroom.blinds == 0 && state.mroom.blinds == 0 && state.room1.blinds == 0 && state.room2.blinds == 0 && state.study.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		state.foyer.blinds = state.kitchen.blinds = state.lroom.blinds = state.mroom.blinds = state.room1.blinds = state.room2.blinds = state.study.blinds = parseInt(state.kitchen.blinds) + 1;
		if (state.foyer.blinds == 4 && state.kitchen.blinds == 4 && state.lroom.blinds == 4 && state.mroom.blinds == 4 && state.room1.blinds == 4 && state.room2.blinds == 4 && state.study.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		blinds(state.kitchen.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$("#bottomButton").click(function(event) {
		if (state.foyer.blinds == 0 && state.kitchen.blinds == 0 && state.lroom.blinds == 0 && state.mroom.blinds == 0 && state.room1.blinds == 0 && state.room2.blinds == 0 && state.study.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		state.foyer.blinds = state.kitchen.blinds = state.lroom.blinds = state.mroom.blinds = state.room1.blinds = state.room2.blinds = state.study.blinds = 4;
		if (state.foyer.blinds == 4 && state.kitchen.blinds == 4 && state.lroom.blinds == 4 && state.mroom.blinds == 4 && state.room1.blinds == 4 && state.room2.blinds == 4 && state.study.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		blinds(state.kitchen.blinds);
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
		var [hours_start, minutes_start] = $('#time_start').val().split(":");
		var datestart = new Date(year_start, (month_start-1), day_start, hours_start, minutes_start, 0, 0);
		program.foyer.light.push(datestart);
		program.hallway.light.push(datestart);
		program.kitchen.light.push(datestart);
		program.lroom.light.push(datestart);
		program.mroom.light.push(datestart);
		program.room1.light.push(datestart);
		program.room2.light.push(datestart);
		program.study.light.push(datestart);
		program.wc1.light.push(datestart);
		program.wc2.light.push(datestart);
		program.wc3.light.push(datestart);
		program.foyer.light_value.push($('#light_value').val());
		program.hallway.light_value.push($('#light_value').val());
		program.kitchen.light_value.push($('#light_value').val());
		program.lroom.light_value.push($('#light_value').val());
		program.mroom.light_value.push($('#light_value').val());
		program.room1.light_value.push($('#light_value').val());
		program.room2.light_value.push($('#light_value').val());
		program.study.light_value.push($('#light_value').val());
		program.wc1.light_value.push($('#light_value').val());
		program.wc2.light_value.push($('#light_value').val());
		program.wc3.light_value.push($('#light_value').val());
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
		if (year_start == 2018) {
			if (month_start == 12) {
				i = day_start - 11;
				calendar[i].push([datestart, "Every Room", "Lights", $('#light_value').val()+"%"]);
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
		program.foyer.blinds.push(datestart);
		program.kitchen.blinds.push(datestart);
		program.lroom.blinds.push(datestart);
		program.mroom.blinds.push(datestart);
		program.room1.blinds.push(datestart);
		program.room2.blinds.push(datestart);
		program.study.blinds.push(datestart);
		program.foyer.blinds_value.push(s.options[s.selectedIndex].value);
		program.kitchen.blinds_value.push(s.options[s.selectedIndex].value);
		program.lroom.blinds_value.push(s.options[s.selectedIndex].value);
		program.mroom.blinds_value.push(s.options[s.selectedIndex].value);
		program.room1.blinds_value.push(s.options[s.selectedIndex].value);
		program.room2.blinds_value.push(s.options[s.selectedIndex].value);
		program.study.blinds_value.push(s.options[s.selectedIndex].value);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
		if (year_start == 2018) {
			if (month_start == 12) {
				i = day_start - 11;
				calendar[i].push([datestart, "Every Room", "Blinds", s.options[s.selectedIndex].value]);
				calendarJSON = JSON.stringify(calendar);
				localStorage.setItem("calendar", calendarJSON);
			}
		}
	};
});