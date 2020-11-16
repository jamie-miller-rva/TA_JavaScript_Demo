// Create variable that references the data in data.js
var ufoData = data;

// Review data in console
// console.log(ufoData);

// Get a reference to table location in index.html file
var tbody = d3.select("tbody");

// Crete a buildTable function
function buildTable(tableData) {
  // Clear out current table data
  tbody.html("");

  // Append a table row (tr) for each object in the data
  tableData.forEach((tableRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Append a table data (td) for each value in the object
    Object.values(tableRow).forEach((value) => {
      var cell = row.append("td");
      // add each value as a table cell
      cell.text(value);
    });
  });
}


// Select the button to filter
var button = d3.select("#filter-btn");

// Create a handleClick function for when a datetime is entered
function handleClick() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  dateEntered = d3.select("#datetime").property("value");
  
  var filteredData = ufoData;

  // Check to see if a date was entered
  if (dateEntered) {
    // Apply filter to the tableData
    filteredData = filteredData.filter(row => row.datetime === dateEntered);
  }
  // If no dateEntered then filterData = ufoData and original table is built
  // Rebuild the table using filteredData
  buildTable(filteredData);
}

// Create an event handler for filter-btn and the form
button.on("click", handleClick);

// Build the table using the buildTable function when the page loads 
// with the entire ufoData
buildTable(ufoData);
