if(localStorage.state == null){
	stateObj = {"temperature": 20,
				"foyer":{"eco": false, "light": false, "light_value": 50, "door_lock": false, "blinds": 0}, 
				"hallway":{"eco": false, "light": false, "light_value": 50}, 
				"kitchen":{"eco": false, "light": false, "light_value": 50, "blinds": 0, "coffee": false, "laundry": false, "washing": false}, 
				"lroom":{"eco": false, "light": false, "light_value": 50, "blinds": 0, "tv": false, "tv_channel": 0}, 
				"mroom":{"eco": false, "light": false, "light_value": 50, "blinds": 0}, 
				"room1":{"eco": false, "light": false, "light_value": 50, "blinds": 0}, 
				"room2":{"eco": false, "light": false, "light_value": 50, "blinds": 0}, 
				"study":{"eco": false, "light": false, "light_value": 50, "blinds": 0, "pc": false, "pc_channel": 0}, 
				"wc1":{"eco": false, "light": false, "light_value": 50, "water_value": 25}, 
				"wc2":{"eco": false, "light": false, "light_value": 50, "water_value": 25}, 
				"wc3":{"eco": false, "light": false, "light_value": 50, "water_value": 25}
				};
	stateJSON = JSON.stringify(stateObj);
	localStorage.setItem("state", stateJSON);
}
if(localStorage.program == null){
	programObj = {"foyer":{"light": [], "light_value": [], "blinds": [], "blinds_value": []}, 
					"hallway":{"light": [], "light_value": []}, 
					"kitchen":{"light": [], "light_value": [], "blinds": [], "blinds_value": [], "coffee": [], "laundry": [], "washing": []}, 
					"lroom":{"light": [], "light_value": [], "blinds": [], "blinds_value": []}, 
					"mroom":{"light": [], "light_value": [], "blinds": [], "blinds_value": []}, 
					"room1":{"light": [], "light_value": [], "blinds": [], "blinds_value": []}, 
					"room2":{"light": [], "light_value": [], "blinds": [], "blinds_value": []}, 
					"study":{"light": [], "light_value": [], "blinds": [], "blinds_value": []}, 
					"wc1":{"light": [], "light_value": [], "water": [], "water_value": []}, 
					"wc2":{"light": [], "light_value": [], "water": [], "water_value": []}, 
					"wc3":{"light": [], "light_value": [], "water": [], "water_value": []}
					};
	programJSON = JSON.stringify(programObj);
	localStorage.setItem("program", programJSON);
}

if(localStorage.calendar == null){
	calendarObj = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	calendarJSON = JSON.stringify(calendarObj);
	localStorage.setItem("calendar", calendarJSON);
}

calendartext = localStorage.getItem("calendar");
calendar = JSON.parse(calendartext);

for (var i = 0; i < calendar.length; i++){
	for (var j = 0; j < calendar[i].length; j++){
		calendar[i].sort(function(b,a){
			return new Date(b[0]) - new Date(a[0]);
		});
		if (calendar[i][j][3] == "0"){
			calendar[i][j][3] =  "Open"
		} else if (calendar[i][j][3] == "1"){
			calendar[i][j][3] = "Semi Open"
		} else if (calendar[i][j][3] == "2"){
			calendar[i][j][3] = "Half"
		} else if (calendar[i][j][3] == "3"){
			calendar[i][j][3] = "Semi Closed"
		} else if (calendar[i][j][3] == "4"){
			calendar[i][j][3] = "Closed"
		}
	}
}

calendarJSON = JSON.stringify(calendar);
localStorage.setItem("calendar", calendarJSON);

statetext = localStorage.getItem("state");
state = JSON.parse(statetext);

programtext = localStorage.getItem("program");
program = JSON.parse(programtext);

/*foyer*/
if (program.foyer.light.length > 0) {
	for (var i = 0; i < program.foyer.light.length; i++) {
		var date_start = program.foyer.light[i];
		
		if (new Date() > new Date(date_start)) {
			state.foyer.light = true;
			state.foyer.light_value = program.foyer.light_value[i];
			program.foyer.light.splice(i)
			program.foyer.light_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
if (program.foyer.blinds.length > 0) {
	for (var i = 0; i < program.foyer.blinds.length; i++) {
		var date_start = program.foyer.blinds[i];
		var blinds_start = program.foyer.blinds_value[i];
		
		if (new Date() > new Date(date_start)) {
			state.foyer.blinds = parseInt(blinds_start);
			program.foyer.blinds.splice(i)
			program.foyer.blinds_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
/*hallway*/
if (program.hallway.light.length > 0) {
	for (var i = 0; i < program.hallway.light.length; i++) {
		var date_start = program.hallway.light[i];
		
		if (new Date() > new Date(date_start)) {
			state.hallway.light = true;
			state.hallway.light_value = program.hallway.light_value[i];
			program.hallway.light.splice(i)
			program.hallway.light_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
/*kitchen*/
if (program.kitchen.light.length > 0) {
	for (var i = 0; i < program.kitchen.light.length; i++) {
		var date_start = program.kitchen.light[i];
		
		if (new Date() > new Date(date_start)) {
			state.kitchen.light = true;
			state.kitchen.light_value = program.kitchen.light_value[i];
			program.kitchen.light.splice(i)
			program.kitchen.light_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
if (program.kitchen.blinds.length > 0) {
	for (var i = 0; i < program.kitchen.blinds.length; i++) {
		var date_start = program.kitchen.blinds[i];
		var blinds_start = program.kitchen.blinds_value[i];
		
		if (new Date() > new Date(date_start)) {
			state.kitchen.blinds = parseInt(blinds_start);
			program.kitchen.blinds.splice(i)
			program.kitchen.blinds_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
if (program.kitchen.coffee.length > 0) {
	for (var i = 0; i < program.kitchen.coffee.length; i++) {
		var date_start = program.kitchen.coffee[i];
		
		if (new Date() > new Date(date_start)) {
			state.kitchen.coffee = true;
			program.kitchen.coffee.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
if (program.kitchen.laundry.length > 0) {
	for (var i = 0; i < program.kitchen.laundry.length; i++) {
		var date_start = program.kitchen.laundry[i];
		
		if (new Date() > new Date(date_start)) {
			state.kitchen.laundry = true;
			program.kitchen.laundry.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
if (program.kitchen.washing.length > 0) {
	for (var i = 0; i < program.kitchen.washing.length; i++) {
		var date_start = program.kitchen.washing[i];
		
		if (new Date() > new Date(date_start)) {
			state.kitchen.washing = true;
			program.kitchen.washing.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
/*lroom*/
if (program.lroom.light.length > 0) {
	for (var i = 0; i < program.lroom.light.length; i++) {
		var date_start = program.lroom.light[i];
		
		if (new Date() > new Date(date_start)) {
			state.lroom.light = true;
			state.lroom.light_value = program.lroom.light_value[i];
			program.lroom.light.splice(i)
			program.lroom.light_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
if (program.lroom.blinds.length > 0) {
	for (var i = 0; i < program.lroom.blinds.length; i++) {
		var date_start = program.lroom.blinds[i];
		var blinds_start = program.lroom.blinds_value[i];
		
		if (new Date() > new Date(date_start)) {
			state.lroom.blinds = parseInt(blinds_start);
			program.lroom.blinds.splice(i)
			program.lroom.blinds_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
/*mroom*/
if (program.mroom.light.length > 0) {
	for (var i = 0; i < program.mroom.light.length; i++) {
		var date_start = program.mroom.light[i];
		
		if (new Date() > new Date(date_start)) {
			state.mroom.light = true;
			state.mroom.light_value = program.mroom.light_value[i];
			program.mroom.light.splice(i)
			program.mroom.light_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
if (program.mroom.blinds.length > 0) {
	for (var i = 0; i < program.mroom.blinds.length; i++) {
		var date_start = program.mroom.blinds[i];
		var blinds_start = program.mroom.blinds_value[i];
		
		if (new Date() > new Date(date_start)) {
			state.mroom.blinds = parseInt(blinds_start);
			program.mroom.blinds.splice(i)
			program.mroom.blinds_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
/*room1*/
if (program.room1.light.length > 0) {
	for (var i = 0; i < program.room1.light.length; i++) {
		var date_start = program.room1.light[i];
		
		if (new Date() > new Date(date_start)) {
			state.room1.light = true;
			state.room1.light_value = program.room1.light_value[i];
			program.room1.light.splice(i)
			program.room1.light_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
if (program.room1.blinds.length > 0) {
	for (var i = 0; i < program.room1.blinds.length; i++) {
		var date_start = program.room1.blinds[i];
		var blinds_start = program.room1.blinds_value[i];
		
		if (new Date() > new Date(date_start)) {
			state.room1.blinds = parseInt(blinds_start);
			program.room1.blinds.splice(i)
			program.room1.blinds_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
/*room2*/
if (program.room2.light.length > 0) {
	for (var i = 0; i < program.room2.light.length; i++) {
		var date_start = program.room2.light[i];
		
		if (new Date() > new Date(date_start)) {
			state.room2.light = true;
			state.room2.light_value = program.room2.light_value[i];
			program.room2.light.splice(i)
			program.room2.light_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
if (program.room2.blinds.length > 0) {
	for (var i = 0; i < program.room2.blinds.length; i++) {
		var date_start = program.room2.blinds[i];
		var blinds_start = program.room2.blinds_value[i];
		
		if (new Date() > new Date(date_start)) {
			state.room2.blinds = parseInt(blinds_start);
			program.room2.blinds.splice(i)
			program.room2.blinds_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
/*study*/
if (program.study.light.length > 0) {
	for (var i = 0; i < program.study.light.length; i++) {
		var date_start = program.study.light[i];
		
		if (new Date() > new Date(date_start)) {
			state.study.light = true;
			state.study.light_value = program.study.light_value[i];
			program.study.light.splice(i)
			program.study.light_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
if (program.study.blinds.length > 0) {
	for (var i = 0; i < program.study.blinds.length; i++) {
		var date_start = program.study.blinds[i];
		var blinds_start = program.study.blinds_value[i];
		
		if (new Date() > new Date(date_start)) {
			state.study.blinds = parseInt(blinds_start);
			program.study.blinds.splice(i)
			program.study.blinds_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
/*wc1*/
if (program.wc1.light.length > 0) {
	for (var i = 0; i < program.wc1.light.length; i++) {
		var date_start = program.wc1.light[i];
		
		if (new Date() > new Date(date_start)) {
			state.wc1.light = true;
			state.wc1.light_value = program.wc1.light_value[i];
			program.wc1.light.splice(i)
			program.wc1.light_value.splice(i)
		} 
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
if (program.wc1.water.length > 0) {
	for (var i = 0; i < program.wc1.water.length; i++) {
		var date_start = program.wc1.water[i];
		
		if (new Date() > new Date(date_start)) {
			state.wc1.water_value = program.wc1.water_value[i];
			program.wc1.water.splice(i)
			program.wc1.water_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
/*wc2*/
if (program.wc2.light.length > 0) {
	for (var i = 0; i < program.wc2.light.length; i++) {
		var date_start = program.wc2.light[i];
		
		if (new Date() > new Date(date_start)) {
			state.wc2.light = true;
			state.wc2.light_value = program.wc2.light_value[i];
			program.wc2.light.splice(i)
			program.wc2.light_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
if (program.wc2.water.length > 0) {
	for (var i = 0; i < program.wc2.water.length; i++) {
		var date_start = program.wc2.water[i];
		
		if (new Date() > new Date(date_start)) {
			state.wc2.water_value = program.wc2.water_value[i];
			program.wc2.water.splice(i)
			program.wc2.water_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
/*wc3*/
if (program.wc3.light.length > 0) {
	for (var i = 0; i < program.wc3.light.length; i++) {
		var date_start = program.wc3.light[i];
		
		if (new Date() > new Date(date_start)) {
			state.wc3.light = true;
			state.wc3.light_value = program.wc3.light_value[i];
			program.wc3.light.splice(i)
			program.wc3.light_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}
if (program.wc3.water.length > 0) {
	for (var i = 0; i < program.wc3.water.length; i++) {
		var date_start = program.wc3.water[i];
		
		if (new Date() > new Date(date_start)) {
			state.wc3.water_value = program.wc3.water_value[i];
			program.wc3.water.splice(i)
			program.wc3.water_value.splice(i)
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
		programJSON = JSON.stringify(program);
		localStorage.setItem("program", programJSON);
	}
}

statetext = localStorage.getItem("state");
state = JSON.parse(statetext);

if (state.kitchen.eco === true) {
	state.kitchen.light = false;
	state.kitchen.coffee = false;
	state.kitchen.laundry = false;
	state.kitchen.washing = false;
}
if (state.foyer.eco === true) {
	state.foyer.light = false;
}
if (state.lroom.eco === true) {
	state.lroom.light = false;
	state.lroom.tv = false;
}
if (state.mroom.eco === true) {
	state.mroom.light = false;
}
if (state.wc1.eco === true) {
	state.wc1.light = false;
}
if (state.hallway.eco === true) {
	state.hallway.light = false;
}
if (state.wc3.eco === true) {
	state.wc3.light = false;
}
if (state.study.eco === true) {
	state.study.light = false;
	state.study.pc = false;
}
if (state.room1.eco === true) {
	state.room1.light = false;
}
if (state.wc2.eco === true) {
	state.wc2.light = false;
}
if (state.room2.eco === true) {
	state.room2.light = false;
}

stateJSON = JSON.stringify(state);
localStorage.setItem("state", stateJSON);

window.onload = function() {
	function clock() {
	var time = new Date(),
		
		hours = time.getHours(),
		minutes = time.getMinutes(),
		seconds = time.getSeconds();

		document.querySelectorAll('.clock')[0].innerHTML = timenow(hours) + ":" + timenow(minutes) + ":" + timenow(seconds);
	  
	  function timenow(standIn) {
		if (standIn < 10) {
		  standIn = '0' + standIn
		}
		return standIn;
	  }
	}
    clock();
	setInterval(clock, 1000);
	
	document.querySelectorAll('.temp')[0].innerHTML = state.temperature + "ºC" ;
	
	if (state.temperature == 30){
		$('.plus').toggle();
	}
	if (state.temperature == 10){
		$('.minus').toggle();
	}
	
	$('.minus').click(function(event) {
		if (state.temperature == 30){
			$('.plus').toggle();
		}
		state.temperature = parseInt(state.temperature) - 1
		document.querySelectorAll('.temp')[0].innerHTML = state.temperature + "ºC" ;
		if (state.temperature == 10){
			$('.minus').toggle();
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	$('.plus').click(function(event) {
		if (state.temperature == 10){
			$('.minus').toggle();
		}
		state.temperature = parseInt(state.temperature) + 1
		document.querySelectorAll('.temp')[0].innerHTML = state.temperature + "ºC" ;
		if (state.temperature == 30){
			$('.plus').toggle();
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	});
	
	// Get the modal
	var modal = document.getElementById('helpModal');

	// Get the button that opens the modal
	var btn = document.getElementById("help");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("closeHelp")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	
	var today = new Date();
	var dd = today.getDate();
	
	for (var i = 0; i < calendar.length; i++) {
		if (calendar[i].length > 0) {
			for (var j = 0; j < calendar[i].length; j++) {
				time = calendar[i][j];
				hm = time[0].split(":00")[0];
				hm = hm.split("T");
				if (window.location.href.indexOf("foyer.html") > -1 && (time[1] == "Foyer" || time[1] == "Every Room")) {
					$("#events").append("<tr id='prog'><td>"+hm[0]+" "+hm[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+i+"."+j+">"+"X"+"</td></tr>");
				} else if (window.location.href.indexOf("hallway.html") > -1 && (time[1] == "Hallway" || (time[1] == "Every Room" && time[2] == "Lights"))) {
					$("#events").append("<tr id='prog'><td>"+hm[0]+" "+hm[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+i+"."+j+">"+"X"+"</td></tr>");
				} else if (window.location.href.indexOf("kitchen.html") > -1 && (time[1] == "Kitchen" || time[1] == "Every Room")) {
					$("#events").append("<tr id='prog'><td>"+hm[0]+" "+hm[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+i+"."+j+">"+"X"+"</td></tr>");
				} else if (window.location.href.indexOf("livingroom.html") > -1 && (time[1] == "Living Room" || time[1] == "Every Room")) {
					$("#events").append("<tr id='prog'><td>"+hm[0]+" "+hm[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+i+"."+j+">"+"X"+"</td></tr>");
				} else if (window.location.href.indexOf("masterroom.html") > -1 && (time[1] == "Master Room" || time[1] == "Every Room")) {
					$("#events").append("<tr id='prog'><td>"+hm[0]+" "+hm[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+i+"."+j+">"+"X"+"</td></tr>");
				} else if (window.location.href.indexOf("room1.html") > -1 && (time[1] == "Room 1" || time[1] == "Every Room")) {
					$("#events").append("<tr id='prog'><td>"+hm[0]+" "+hm[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+i+"."+j+">"+"X"+"</td></tr>");
				} else if (window.location.href.indexOf("room2.html") > -1 && (time[1] == "Room 2" || time[1] == "Every Room")) {
					$("#events").append("<tr id='prog'><td>"+hm[0]+" "+hm[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+i+"."+j+">"+"X"+"</td></tr>");
				} else if (window.location.href.indexOf("study.html") > -1 && (time[1] == "Study" || time[1] == "Every Room")) {
					$("#events").append("<tr id='prog'><td>"+hm[0]+" "+hm[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+i+"."+j+">"+"X"+"</td></tr>");
				} else if (window.location.href.indexOf("wc1.html") > -1 && (time[1] == "WC 1" || (time[1] == "Every Room" && time[2] == "Lights"))) {
					$("#events").append("<tr id='prog'><td>"+hm[0]+" "+hm[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+i+"."+j+">"+"X"+"</td></tr>");
				} else if (window.location.href.indexOf("wc2.html") > -1 && (time[1] == "WC 2" || (time[1] == "Every Room" && time[2] == "Lights"))) {
					$("#events").append("<tr id='prog'><td>"+hm[0]+" "+hm[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+i+"."+j+">"+"X"+"</td></tr>");
				} else if (window.location.href.indexOf("wc3.html") > -1 && (time[1] == "WC 3" || (time[1] == "Every Room" && time[2] == "Lights"))) {
					$("#events").append("<tr id='prog'><td>"+hm[0]+" "+hm[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+i+"."+j+">"+"X"+"</td></tr>");
				} else if (window.location.href.indexOf("study.html") > -1 && (time[1] == "Study" || time[1] == "Every Room")) {
					$("#events").append("<tr id='prog'><td>"+hm[0]+" "+hm[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+i+"."+j+">"+"X"+"</td></tr>");
				} else if (window.location.href.indexOf("eroom.html") > -1 && (time[1] == "Every Room" || time[1] == "Every Room")) {
					$("#events").append("<tr id='prog'><td>"+hm[0]+" "+hm[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+i+"."+j+">"+"X"+"</td></tr>");
				}
			}
		}
	}
	
	$(".del").click(function(){
		$(this).closest('tr').remove();
		id = $(this).attr('id');
		id = id.split('.');
		calendar[id[0]].splice(id[1],1);
		calendarJSON = JSON.stringify(calendar);
		localStorage.setItem("calendar", calendarJSON);
	});
	
};