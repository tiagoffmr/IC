statetext = localStorage.getItem("state");
state = JSON.parse(statetext);

programtext = localStorage.getItem("program");
program = JSON.parse(programtext);

calendartext = localStorage.getItem("calendar");
calendar = JSON.parse(calendartext);

var emptyForm = true;

window.addEventListener("load",function() {
	
	if (window.location.href.indexOf("kitchen.html") > -1) {
		$('#button1').css("background-color","white");
		$('#button1').css({ width: '350px', left: '35px' });
	} else if (window.location.href.indexOf("kitchen_appliances.html") > -1) {
		$('#button2').css("background-color","white");
		$('#button2').css({ width: '350px', left: '35px' });
		$('#button1App').css("background-color","white");
		$('#button1App').css({ width: '350px', left: '895px' });
	} else if (window.location.href.indexOf("appliance_dishwasher.html") > -1) {
		$('#button2').css("background-color","white");
		$('#button2').css({ width: '350px', left: '35px' });
		$('#button2App').css("background-color","white");
		$('#button2App').css({ width: '350px', left: '895px' });
	} else if (window.location.href.indexOf("appliance_laundry.html") > -1) {
		$('#button2').css("background-color","white");
		$('#button2').css({ width: '350px', left: '35px' });
		$('#button3App').css("background-color","white");
		$('#button3App').css({ width: '350px', left: '895px' });
	} else if (window.location.href.indexOf("kitchen_blinds.html") > -1) {
		$('#button3').css("background-color","white");
		$('#button3').css({ width: '350px', left: '35px' });
	}
	
	if (state.kitchen.light === true) {
		$("#onoff").css("background-color", "#f0dc3c")
		$('#bulb').prepend('<div id="brightness"></div>');
		b = parseInt((-(2.55*state.kitchen.light_value)+255)).toString(16)
		if (b.length < 2) {
			b = '0' + b;
		}
		hex = "#FFFF" + b;
		$("#brightness").css('background-color', hex);
		$("#slider").roundSlider({disabled: false,tooltipFormat: function(e) {return e.value + "%" ;}});
	} else if (state.kitchen.light === false) {
		$("#onoff").css("background-color", "#acacac")
		$('#bulb').prepend('<div id="brightness"></div>');
		$("#slider").roundSlider({disabled: true,tooltipFormat: function(e) {return e.value + "%" ;}});
	}

	$('#onoff').click(function(event) {
		if (state.kitchen.light === true) {
			state.kitchen.light = false;
			$("#onoff").css("background-color", "#acacac")
			$("#brightness").remove()
			$('#bulb').prepend('<div id="brightness"></div>');
			$("#slider").roundSlider({disabled: true});
		} else {
			state.kitchen.light = true;
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
			state.kitchen.light_value = $("#slider").roundSlider("option", "value");
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
	
	blinds(state.kitchen.blinds);
	
	if (state.kitchen.blinds == 0){
		$('#topButton').toggle();
		$('#upButton').toggle();
	}
	if (state.kitchen.blinds == 4){
		$('#downButton').toggle();
		$('#bottomButton').toggle();
	}
	
	$("#topButton").click(function(event) {
		if (state.kitchen.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		state.kitchen.blinds = 0;
		if (state.kitchen.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		blinds(state.kitchen.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#upButton').click(function(event) {
		if (state.kitchen.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		state.kitchen.blinds = parseInt(state.kitchen.blinds) - 1;
		if (state.kitchen.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		blinds(state.kitchen.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$("#downButton").click(function(event) {
		if (state.kitchen.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		state.kitchen.blinds = parseInt(state.kitchen.blinds) + 1;
		if (state.kitchen.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		blinds(state.kitchen.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$("#bottomButton").click(function(event) {
		if (state.kitchen.blinds == 0){
			$('#topButton').toggle();
			$('#upButton').toggle();
		}
		state.kitchen.blinds = 4;
		if (state.kitchen.blinds == 4){
			$('#downButton').toggle();
			$('#bottomButton').toggle();
		}
		blinds(state.kitchen.blinds);
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	function unlock(){
		$('.buttonDivC').attr("disabled", false);
		$('#onoffC').attr("disabled", false);
		$('.buttonDivW').attr("disabled", false);
		$('#onoffW').attr("disabled", false);
		$('.buttonDivD').attr("disabled", false);
		$('#onoffD').attr("disabled", false);
		$('#progressBar').hide();
	}
	
	if (state.kitchen.coffee === true) {
		$('.buttonDivC').show();
	} else if (state.kitchen.coffee === false) {
		$('.buttonDivC').hide();
	}
	
	$('#onoffC').click(function(event) {
		if (state.kitchen.coffee === true) {
			state.kitchen.coffee = false;
			$('.buttonDivC').hide();
		} else {
			state.kitchen.coffee = true;
			$('.buttonDivC').show();
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button1C').click(function(event) {
		$('.buttonDivC').attr("disabled", true);
		$('#onoffC').attr("disabled", true);
		$('#progressBar').show();
		var timeleft = 10;
		var downloadTimer = setInterval(function(){
		document.getElementById("progressBar").value = 10 - --timeleft;
		if(timeleft <= 0)
			clearInterval(downloadTimer);
		},1000);
		setTimeout(unlock, 10000)
	});
	
	$('#button2C').click(function(event) {
		$('.buttonDivC').attr("disabled", true);
		$('#onoffC').attr("disabled", true);
		$('#progressBar').show();
		var timeleft = 10;
		var downloadTimer = setInterval(function(){
		document.getElementById("progressBar").value = 10 - --timeleft;
		if(timeleft <= 0)
			clearInterval(downloadTimer);
		},1000);
		setTimeout(unlock, 10000)
	});
	
	$('#button3C').click(function(event) {
		$('.buttonDivC').attr("disabled", true);
		$('#onoffC').attr("disabled", true);
		$('#progressBar').show();
		var timeleft = 10;
		var downloadTimer = setInterval(function(){
		document.getElementById("progressBar").value = 10 - --timeleft;
		if(timeleft <= 0)
			clearInterval(downloadTimer);
		},1000);
		setTimeout(unlock, 10000)
	});
	
	if (state.kitchen.laundry === true) {
		$('.buttonDivW').show();
	} else if (state.kitchen.laundry === false) {
		$('.buttonDivW').hide();
	}
	
	$('#onoffW').click(function(event) {
		if (state.kitchen.laundry === true) {
			state.kitchen.laundry = false;
			$('.buttonDivW').hide();
		} else {
			state.kitchen.laundry = true;
			$('.buttonDivW').show();
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button1W').click(function(event) {
		$('.buttonDivW').attr("disabled", true);
		$('#onoffW').attr("disabled", true);
		$('#progressBar').show();
		var timeleft = 10;
		var downloadTimer = setInterval(function(){
		document.getElementById("progressBar").value = 10 - --timeleft;
		if(timeleft <= 0)
			clearInterval(downloadTimer);
		},1000);
		setTimeout(unlock, 10000)
	});
	
	$('#button2W').click(function(event) {
		$('.buttonDivW').attr("disabled", true);
		$('#onoffW').attr("disabled", true);
		$('#progressBar').show();
		var timeleft = 10;
		var downloadTimer = setInterval(function(){
		document.getElementById("progressBar").value = 10 - --timeleft;
		if(timeleft <= 0)
			clearInterval(downloadTimer);
		},1000);
		setTimeout(unlock, 10000)
	});
	
	$('#button3W').click(function(event) {
		$('.buttonDivW').attr("disabled", true);
		$('#onoffW').attr("disabled", true);
		$('#progressBar').show();
		var timeleft = 10;
		var downloadTimer = setInterval(function(){
		document.getElementById("progressBar").value = 10 - --timeleft;
		if(timeleft <= 0)
			clearInterval(downloadTimer);
		},1000);
		setTimeout(unlock, 10000)
	});
	
	if (state.kitchen.washing === true) {
		$('.buttonDivD').show();
	} else if (state.kitchen.washing === false) {
		$('.buttonDivD').hide();
	}
	
	$('#onoffD').click(function(event) {
		if (state.kitchen.washing === true) {
			state.kitchen.washing = false;
			$('.buttonDivD').hide();
		} else {
			state.kitchen.washing = true;
			$('.buttonDivD').show();
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('#button1D').click(function(event) {
		$('.buttonDivD').attr("disabled", true);
		$('#onoffD').attr("disabled", true);
		$('#progressBar').show();
		var timeleft = 10;
		var downloadTimer = setInterval(function(){
		document.getElementById("progressBar").value = 10 - --timeleft;
		if(timeleft <= 0)
			clearInterval(downloadTimer);
		},1000);
		setTimeout(unlock, 10000)
	});
	
	$('#button2D').click(function(event) {
		$('.buttonDivD').attr("disabled", true);
		$('#onoffD').attr("disabled", true);
		$('#progressBar').show();
		var timeleft = 10;
		var downloadTimer = setInterval(function(){
		document.getElementById("progressBar").value = 10 - --timeleft;
		if(timeleft <= 0)
			clearInterval(downloadTimer);
		},1000);
		setTimeout(unlock, 10000)
	});
	
	$('#button3D').click(function(event) {
		$('.buttonDivD').attr("disabled", true);
		$('#onoffW').attr("disabled", true);
		$('#progressBar').show();
		var timeleft = 10;
		var downloadTimer = setInterval(function(){
		document.getElementById("progressBar").value = 10 - --timeleft;
		if(timeleft <= 0)
			clearInterval(downloadTimer);
		},1000);
		setTimeout(unlock, 10000)
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
		program.kitchen.light.push(datestart);
		program.kitchen.light_value.push($('#light_value').val());
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
		if (year_start == 2018) {
			if (month_start == 12) {
				i = day_start - 11;
				calendar[i].push([datestart, "Kitchen", "Lights", $('#light_value').val()+"%"]);
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

	$('#add').click(function(event) {
	formProg = "#programcoffee input";
	submitProg = "#okcoffee";
	if (emptyForm == true) {
		$(submitProg).attr("disabled", "disabled").css("display","none");
	} else {
		$(submitProg).removeAttr("disabled").css("display","block");
	}
	check_input(emptyForm, formProg, submitProg);
	});

	$('#add').click(function(event) {
	formProg = "#programlaundry input";
	submitProg = "#oklaundry";
	if (emptyForm == true) {
		$(submitProg).attr("disabled", "disabled").css("display","none");
	} else {
		$(submitProg).removeAttr("disabled").css("display","block");
	}
	check_input(emptyForm, formProg, submitProg);
	});

	$('#add').click(function(event) {
	formProg = "#programdishwasher input";
	submitProg = "#okdishwasher";
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
		program.kitchen.blinds.push(datestart);
		program.kitchen.blinds_value.push(s.options[s.selectedIndex].value);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
		if (year_start == 2018) {
			if (month_start == 12) {
				i = day_start - 11;
				calendar[i].push([datestart, "Kitchen", "Blinds", s.options[s.selectedIndex].value]);
				calendarJSON = JSON.stringify(calendar);
				localStorage.setItem("calendar", calendarJSON);
			}
		}
	};
	
	$('#programcoffee').on('submit', addProgramCoffee);
	function addProgramCoffee(e) {
		var [year_start, month_start, day_start] = $('#date_start').val().split("-");
		var [hours_start, minutes_start] = $('#time_start').val().split(":");
		var datestart = new Date(year_start, (month_start-1), day_start, hours_start, minutes_start, 0, 0);
		var s = document.getElementById("coffee_start");
		program.kitchen.coffee.push(datestart);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
		if (year_start == 2018) {
			if (month_start == 12) {
				i = day_start - 11;
				calendar[i].push([datestart, "Kitchen", "Coffee", s.options[s.selectedIndex].value]);
				calendarJSON = JSON.stringify(calendar);
				localStorage.setItem("calendar", calendarJSON);
			}
		}
	};
	
	$('#programlaundry').on('submit', addProgramlaundry);
	function addProgramlaundry(e) {
		var [year_start, month_start, day_start] = $('#date_start').val().split("-");
		var [hours_start, minutes_start] = $('#time_start').val().split(":");
		var datestart = new Date(year_start, (month_start-1), day_start, hours_start, minutes_start, 0, 0);
		var s = document.getElementById("laundry_start");
		program.kitchen.laundry.push(datestart);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
		if (year_start == 2018) {
			if (month_start == 12) {
				i = day_start - 11;
				calendar[i].push([datestart, "Kitchen", "Laundry", s.options[s.selectedIndex].value]);
				calendarJSON = JSON.stringify(calendar);
				localStorage.setItem("calendar", calendarJSON);
			}
		}
	};
	
	$('#programdishwasher').on('submit', addProgramdishwasher);
	function addProgramdishwasher(e) {
		var [year_start, month_start, day_start] = $('#date_start').val().split("-");
		var [hours_start, minutes_start] = $('#time_start').val().split(":");
		var datestart = new Date(year_start, (month_start-1), day_start, hours_start, minutes_start, 0, 0);
		var s = document.getElementById("dishwasher_start");
		program.kitchen.dishwasher.push(datestart);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
		if (year_start == 2018) {
			if (month_start == 12) {
				i = day_start - 11;
				calendar[i].push([datestart, "Kitchen", "Dishwasher", s.options[s.selectedIndex].value]);
				calendarJSON = JSON.stringify(calendar);
				localStorage.setItem("calendar", calendarJSON);
			}
		}
	};
});