// from data.js
var ufoData = data;

// console.log the data
console.log(ufoData);

// Get a reference to the table body location in index.html (<tbody> HERE </tbody>)
// and assign to a variable called tbody
var tbody = d3.select("tbody");

//  build table
// clear out any existing data
tbody.html("");

// Loop through each object (ufo sighting)
// and append a row for ufo sighting
data.forEach(function(ufoData) {
    var row = tbody.append("tr");

    // Loop through each field in ufoData and append 1 cell per ufo sighting value 
    // (datetime, city, state, country, shape, durationMinutes, comments)
    Object.values(ufoData).forEach(function(value) {

        // Append a cell to the row for each value in the ufo sighting object
        var cell = row.append("td");

        // Use d3 to update each cell's text with ufo sightings values
        cell.text(value);
    });
});

// Create an event handler when button is clicked
var button = d3.select("#filter-btn");
// var form = d3.select(".form-group")

// when clicked or submitted run the function runEnter
button.on("click", runEnter);
// form.on("submit", runEnter);

function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element
    var inputElement = d3.select("#datetime");

    // Get the value of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Create a variable to hold filtered data
    var filteredData = ufoData.filter(ufo => ufo.datetime === inputValue);

    // Reset the table
    tbody.html("");

    filteredData.forEach(function(ufoData) {

        var row = tbody.append("tr");

        Object.values(ufoData).forEach(function(value) {

            // append a cell to the row for each ufosighting
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
