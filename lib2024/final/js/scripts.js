$(document).ready(function(){
	createTableFromJSON();
	$('#container').hide(0).delay(500).fadeIn(1500);
});

function createTableFromJSON() { 

	var schedule = [
	{
		"TIME": "09:00-11:00",
		"MONDAY": "Communications",
		"TUESDAY": "Client Services",
		"WEDNESDAY": "Special Collections",
		"THURSDAY": "Directed Research Seminar",
		"FRIDAY": "Client Services",
	},
	{
		"TIME": "11:00-12:30",
		"MONDAY": "Reference",
		"TUESDAY": "Internet App",
		"WEDNESDAY": "Library Software",
		"THURSDAY": "French",
		"FRIDAY": "Reference",
	},
	{
		"TIME": "14:00-15:00",
		"MONDAY": "Acquisitions",
		"TUESDAY": "General Elective",
		"WEDNESDAY": "Marketing",
		"THURSDAY": "Emerging Library Tech",
		"FRIDAY": "Library Software",
	},
	{
		"TIME": "15:30-17:30",
		"MONDAY": "French",
		"TUESDAY": "French",
		"WEDNESDAY": "Acquisitions",
		"THURSDAY": "Subject Analysis",
		"FRIDAY": "Internet App",
	}
	];


	var col = [];
	for (var i = 0; i < schedule.length; i++) {
		for (var key in schedule[i]) {
			if (col.indexOf(key) === -1) {
				col.push(key);
			}
		}
	}

	var table = document.createElement("table");



	var tr = table.insertRow(-1);                   

	for (var i = 0; i < col.length; i++) {
		var th = document.createElement("th");      
		th.innerHTML = col[i];
		tr.appendChild(th);
	}

	for (var i = 0; i < schedule.length; i++) {
		tr = table.insertRow(-1);

		for (var j = 0; j < col.length; j++) {
			var tabCell = tr.insertCell(-1);
			tabCell.innerHTML = schedule[i][col[j]];
		}
	}



    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("json_table");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
} 

$('#form').submit(function (e) {
	// e.preventDefualt to avoid the form being submitted to page specified in action attribute 
	e.preventDefault();
	// passing the current form (this) to variable form 
	var form = this;
	showformValues(form);
});

function showformValues(form) {
	console.log('showformValues', form);
	var nameValue = $('#name').val();
	console.log(nameValue);
	$('#profile-name').text(nameValue);

	var emailValue = $('#email').val();
	$('#profile-email').text(emailValue);

	var addressValue = $('#address').val();
	$('#profile-address').text(addressValue);

	var cityValue = $('#city').val();
	$('#profile-city').text(cityValue);

	var provinceValue = $('#province').val();
	$('#profile-province').text(provinceValue);

	var pcValue = $('#pc').val();
	$('#profile-pc').text(pcValue);
}


