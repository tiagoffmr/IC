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

$(document).ready(function(){

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	var i;

	if(dd<10) {
		dd = '0'+dd
	}

	if(mm<10) {
		mm = '0'+mm
	}

	today = dd + '/' + mm + '/' + yyyy;
	var outdia =  yyyy + '-' + mm + '-' + dd;	
	$('#data').val(outdia);

	for ( i=0; i < 32; i = i + 1) {
		if ( $('#dia'+i).text() == dd){
			$("#dia"+i).addClass("active");
			$("#dia" + i).addClass("Selected");
			$("#todo").replaceWith( "<h2 id='todo'> Events - " + dd + " December 2018</h2>" );
		}
	}
	
	var dtd = dd-11;
	if (calendar[dtd].length > 0) {
		for (var i = 0; i < calendar[dtd].length; i++) {
			time = calendar[dtd][i];
			hm = time[0].split("T")[1];
			hm = hm.split(":00")[0];
			$("#events").append("<tr class='prog'><td>"+hm+"</td><td>"+time[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+dtd+"."+i+">"+"X"+"</tr>");
		}
	}
	
	$(".dd").click(function(){
		var select = $(this).text();
		$("tr.prog").remove();
		$('.dd').removeClass('Selected')
		$('#dia'+select).addClass('Selected');
		$("#todo").replaceWith( "<h2 id='todo'> Events - " + select + " December 2018</h2>" );
		var days = select-11;
		if (calendar[days].length > 0) {
			for (var i = 0; i < calendar[days].length; i++) {
				time = calendar[days][i];
				hm = time[0].split("T")[1];
				hm = hm.split(":00")[0];
				$("#events").append("<tr class='prog'><td>"+hm+"</td><td>"+time[1]+"</td><td>"+time[2]+"</td><td>"+time[3]+"</td><td class='del' id="+days+"."+i+">"+"X"+"</td></tr>");
			}
		}
		$(".del").click(function(){
			$(this).closest('tr').remove();
			id = $(this).attr('id');
			console.log(id);
			id = id.split('.');
			console.log(id);
			console.log(calendar[id[0]][id[1]]);
			calendar[id[0]].splice(id[1],1);
			calendarJSON = JSON.stringify(calendar);
			localStorage.setItem("calendar", calendarJSON);
		});
	});
	
	$(".del").click(function(){
		$(this).closest('tr').remove();
		id = $(this).attr('id');
		id = id.split('.');
		calendar[id[0]].splice(id[1],1);
		calendarJSON = JSON.stringify(calendar);
		localStorage.setItem("calendar", calendarJSON);
	});
	
});
