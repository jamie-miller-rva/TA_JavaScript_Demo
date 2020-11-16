// Create variable that references the data in data.js
var ufoData = data;

// Review data in console
// console.log(ufoData);

// Get a reference to table location in index.html file
var tbody = d3.select("tbody");

// Build table Use d3 to update each cell's text with
// ufoData values (datetime, city, state, country, shape, durationMinutes, comments)

ufoData.forEach(function(ufoData) {
    // console.log(ufoData);
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
    //   console.log(key, value);
      // Append a cell to the row for each value
      // in the ufoData object
      var cell = row.append("td");
      cell.text(value);
    });
  });



// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create an event handler for filter-btn and the form
button.on("click", runEnter);
form.on("submit",runEnter);

// Run function runEnter when button is clicked
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = ufoData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);

    // Reset table
    tbody.html("");

    // Rebuild the table using filteredData
    filteredData.forEach(function(rebuild) {

        var row = tbody.append("tr");
        Object.values(rebuild).forEach(function(value) {

            // append a cell to the row for each object
            var cell = row.append("td");
            cell.text(value);
        });
    });
}




