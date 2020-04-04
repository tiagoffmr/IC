window.onload = function(){

	function updateTime () {
		now = new Date ();

		document.getElementById("hour-hand").style.webkitTransform = "rotate(" + (now.getHours() * 30 + now.getMinutes() / 2) + "deg)";
	  
		document.getElementById("min-hand").style.webkitTransform = "rotate(" + (now.getMinutes() * 6 + now.getSeconds() / 10) + "deg)";
	  
		document.getElementById("sec-hand").style.webkitTransform = "rotate(" + now.getSeconds() * 6 + "deg)";
	  
		setTimeout(function () {updateTime();}, 1000);
	}

	updateTime();
	const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

	const date = new Date()

	$('#monthDay').append(`${months[date.getMonth()]} ${date.getDate()}`);

	$('#year').append(`${date.getFullYear()}`);

	var timer = null;

	function getEditor(){

		var elems = document.getElementsByTagName("textarea")
		if (elems.length <= 0)
			return null;

		return elems[0];
	}

	function save(){

		var editor = getEditor(); 
                if (editor) {
		    localStorage.setItem("Notes", editor.value);
                }

	}

	function restore(){

		var saved = localStorage.getItem("Notes");
		var editor = getEditor();
		if (saved && editor){

			editor.value = saved; 
		}
	}
	
	function AutoSave(){

		var editor = getEditor(); 

	 
		if (editor.value.length <= 0){
			restore();
		}
		if (timer != null){
			clearInterval(timer);
			timer = null;
		}

		timer = setInterval(save, 1000);


	}
	
	AutoSave();
	
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
};