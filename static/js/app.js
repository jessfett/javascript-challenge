// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


//PART 1: Write code to append data into table

// Create a forEach to loop through the data
tableData.forEach((sighting) => {

	// add a row for each sighting
	var row = tbody.append("tr");

	// iterate through the table
	Object.entries(sighting).forEach(([key, value]) => {

		// Use d3 to append one cell per sighting object value (date, city, state, country, shape, duration, and comments)  
		var cell = row.append("td");
		cell.text(value);
	});
});

//PART 2: Write code to sort table data based off of user input


var button = d3.select("#filter-btn");
var form = d3.select("form");

// create events 
button.on("click", runEnter);
form.on("submit", runEnter);

// create the function
function runEnter() {

  d3.event.preventDefault();


  var inputElement = d3.select(".form-control");

  
  var inputValue = inputElement.property("value");

  // Filter by date
	var results = tableData.filter(sighting => sighting.datetime === inputValue);
	
	// Refresh table data
	tbody.html("");

	// If data not found
	if (results.length === 0) {
		tbody.text(`No UFO Sightings Reported on ${inputValue}.`);
	}

	// Handle matching results
	else {
		results.forEach((sighting) => {
			var row = tbody.append("tr");
			Object.entries(sighting).forEach(([key, value]) => {
				var cell = row.append("td");
				cell.text(value);
			});
		});
	};
};