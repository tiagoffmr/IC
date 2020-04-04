statetext = localStorage.getItem("state");
state = JSON.parse(statetext);

$(document).ready(function() {
	
	if (state.kitchen.eco === true) {
		document.getElementById('EcoImage1').src = "../images/organic2.svg";
	} else {
		document.getElementById('EcoImage1').src = "../images/organic.svg"
	}
	if (state.foyer.eco === true) {
		document.getElementById('EcoImage2').src = "../images/organic2.svg";
	} else {
		document.getElementById('EcoImage2').src = "../images/organic.svg"
	}
	if (state.lroom.eco === true) {
		document.getElementById('EcoImage3').src = "../images/organic2.svg";
	} else {
		document.getElementById('EcoImage3').src = "../images/organic.svg"
	}
	if (state.mroom.eco === true) {
		document.getElementById('EcoImage4').src = "../images/organic2.svg";
	} else {
		document.getElementById('EcoImage4').src = "../images/organic.svg"
	}
	if (state.wc1.eco === true) {
		document.getElementById('EcoImage5').src = "../images/organic2.svg";
	} else {
		document.getElementById('EcoImage5').src = "../images/organic.svg"
	}
	if (state.hallway.eco === true) {
		document.getElementById('EcoImage6').src = "../images/organic2.svg";
	} else {
		document.getElementById('EcoImage6').src = "../images/organic.svg"
	}
	if (state.wc3.eco === true) {
		document.getElementById('EcoImage7').src = "../images/organic2.svg";
	} else {
		document.getElementById('EcoImage7').src = "../images/organic.svg"
	}
	if (state.study.eco === true) {
		document.getElementById('EcoImage8').src = "../images/organic2.svg";
	} else {
		document.getElementById('EcoImage8').src = "../images/organic.svg"
	}
	if (state.room1.eco === true) {
		document.getElementById('EcoImage9').src = "../images/organic2.svg";
	} else {
		document.getElementById('EcoImage9').src = "../images/organic.svg"
	}
	if (state.wc2.eco === true) {
		document.getElementById('EcoImage10').src = "../images/organic2.svg";
	} else {
		document.getElementById('EcoImage10').src = "../images/organic.svg"
	}
	if (state.room2.eco === true) {
		document.getElementById('EcoImage11').src = "../images/organic2.svg";
	} else {
		document.getElementById('EcoImage11').src = "../images/organic.svg"
	}
	if (state.kitchen.eco === true && state.foyer.eco === true && state.lroom.eco === true && state.mroom.eco === true && state.wc1.eco === true && state.hallway.eco === true && state.wc3.eco === true && state.study.eco === true && state.room1.eco === true && state.wc2.eco === true && state.room2.eco === true) {
		document.getElementById('Modo_Eco').src = "../images/organic2.svg";
	} else {
		document.getElementById('Modo_Eco').src = "../images/organic.svg";
	}
	
	function eco(num){
		switch (num) {
		case 0:
			if (state.kitchen.eco === true) {
				state.kitchen.eco = false;
				document.getElementById('EcoImage1').src = "../images/organic.svg";
			} else {
				state.kitchen.eco = true;
				document.getElementById('EcoImage1').src = "../images/organic2.svg"
			}
			break;
		case 1:
			if (state.foyer.eco == true) {
				state.foyer.eco = false;
				document.getElementById('EcoImage2').src = "../images/organic.svg";
			} else {
				state.foyer.eco = true;
				document.getElementById('EcoImage2').src = "../images/organic2.svg"
			}
			break;
		case 2:
			if (state.lroom.eco === true) {
				state.lroom.eco = false;
				document.getElementById('EcoImage3').src = "../images/organic.svg";
			} else {
				state.lroom.eco = true;
				document.getElementById('EcoImage3').src = "../images/organic2.svg"
			}
			break;
		case 3:
			if (state.mroom.eco === true) {
				state.mroom.eco = false;
				document.getElementById('EcoImage4').src = "../images/organic.svg";
			} else {
				state.mroom.eco = true;
				document.getElementById('EcoImage4').src = "../images/organic2.svg"
			}
			break;
		case 4:
			if (state.wc1.eco === true) {
				state.wc1.eco = false;
				document.getElementById('EcoImage5').src = "../images/organic.svg";
			} else {
				state.wc1.eco = true;
				document.getElementById('EcoImage5').src = "../images/organic2.svg"
			}
			break;
		case 5:
			if (state.hallway.eco === true) {
				state.hallway.eco = false;
				document.getElementById('EcoImage6').src = "../images/organic.svg";
			} else {
				state.hallway.eco = true;
				document.getElementById('EcoImage6').src = "../images/organic2.svg"
			}
			break;
		case 6:
			if (state.wc3.eco === true) {
				state.wc3.eco = false;
				document.getElementById('EcoImage7').src = "../images/organic.svg";
			} else {
				state.wc3.eco = true;
				document.getElementById('EcoImage7').src = "../images/organic2.svg"
			}
			break;
		case 7:
			if (state.study.eco === true) {
				state.study.eco = false;
				document.getElementById('EcoImage8').src = "../images/organic.svg";
			} else {
				state.study.eco = true;
				document.getElementById('EcoImage8').src = "../images/organic2.svg"
			}
			break;
		case 8:
			if (state.room1.eco === true) {
				state.room1.eco = false;
				document.getElementById('EcoImage9').src = "../images/organic.svg";
			} else {
				state.room1.eco = true;
				document.getElementById('EcoImage9').src = "../images/organic2.svg"
			}
			break;
		case 9:
			if (state.wc2.eco === true) {
				state.wc2.eco = false;
				document.getElementById('EcoImage10').src = "../images/organic.svg";
			} else {
				state.wc2.eco = true;
				document.getElementById('EcoImage10').src = "../images/organic2.svg"
			}
			break;
		case 10:
			if (state.room2.eco === true) {
				state.room2.eco = false;
				document.getElementById('EcoImage11').src = "../images/organic.svg";
			} else {
				state.room2.eco = true;
				document.getElementById('EcoImage11').src = "../images/organic2.svg"
			}
			break;
		case 11:
			if (state.kitchen.eco === true && state.foyer.eco === true && state.lroom.eco === true && state.mroom.eco === true && state.wc1.eco === true && state.hallway.eco === true && state.wc3.eco === true && state.study.eco === true && state.room1.eco === true && state.wc2.eco === true && state.room2.eco === true) {
				state.kitchen.eco = state.foyer.eco = state.lroom.eco = state.mroom.eco = state.wc1.eco = state.hallway.eco = state.wc3.eco = state.study.eco = state.room1.eco = state.wc2.eco = state.room2.eco = false;
				document.getElementById('EcoImage1').src = "../images/organic.svg";
				document.getElementById('EcoImage2').src = "../images/organic.svg";
				document.getElementById('EcoImage3').src = "../images/organic.svg";
				document.getElementById('EcoImage4').src = "../images/organic.svg";
				document.getElementById('EcoImage5').src = "../images/organic.svg";
				document.getElementById('EcoImage6').src = "../images/organic.svg";
				document.getElementById('EcoImage7').src = "../images/organic.svg";
				document.getElementById('EcoImage8').src = "../images/organic.svg";
				document.getElementById('EcoImage9').src = "../images/organic.svg";
				document.getElementById('EcoImage10').src = "../images/organic.svg";
				document.getElementById('EcoImage11').src = "../images/organic.svg";
				document.getElementById('Modo_Eco').src = "../images/organic.svg";
			} else {
				state.kitchen.eco = state.foyer.eco = state.lroom.eco = state.mroom.eco = state.wc1.eco = state.hallway.eco = state.wc3.eco = state.study.eco = state.room1.eco = state.wc2.eco = state.room2.eco = true;
				document.getElementById('EcoImage1').src = "../images/organic2.svg";
				document.getElementById('EcoImage2').src = "../images/organic2.svg";
				document.getElementById('EcoImage3').src = "../images/organic2.svg";
				document.getElementById('EcoImage4').src = "../images/organic2.svg";
				document.getElementById('EcoImage5').src = "../images/organic2.svg";
				document.getElementById('EcoImage6').src = "../images/organic2.svg";
				document.getElementById('EcoImage7').src = "../images/organic2.svg";
				document.getElementById('EcoImage8').src = "../images/organic2.svg";
				document.getElementById('EcoImage9').src = "../images/organic2.svg";
				document.getElementById('EcoImage10').src = "../images/organic2.svg";
				document.getElementById('EcoImage11').src = "../images/organic2.svg";
				document.getElementById('Modo_Eco').src = "../images/organic2.svg";
			}
			break;
		}
		stateJSON = JSON.stringify(state);
		localStorage.setItem("state", stateJSON);
	}
	
	$('#EcoButton').click(function(event) {
		eco(11);
	});
	
	$('#kitchen').click(function(event) {
		eco(0);
	});
	
	$('#foyer').click(function(event) {
		eco(1);
	});
	
	$('#living_room').click(function(event) {
		eco(2);
	});
	
	$('#master_room').click(function(event) {
		eco(3);
	});
	
	$('#WC1').click(function(event) {
		eco(4);
	});
	
	$('#hallway').click(function(event) {
		eco(5);
	});
	
	$('#WC3').click(function(event) {
		eco(6);
	});
	
	$('#study').click(function(event) {
		eco(7);
	});
	
	$('#room1').click(function(event) {
		eco(8);
	});
	
	$('#WC2').click(function(event) {
		eco(9);
	});
	
	$('#room2').click(function(event) {
		eco(10);
	});
});