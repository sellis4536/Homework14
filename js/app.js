// from data.js
var tableData = data;

// YOUR CODE HERE!
  // Create vars for tableData above, step 1 date search element and eventual multiple criteria
var inputElement = d3.select("#resultsTable");
var inputElement = d3.select("#selectDate");
var inputElement = d3.select("#selectCity");
var inputElement = d3.select("#selectState");
var inputElement = d3.select("#SelectCountry");
var inputElement = d3.select("#selectShape");
var inputElement = d3.select("#selectDuration");
var inputElement = d3.select("#selectComments");
// define additional global variables -- necessary to pass btw functions; an acceptable compromise?
var filteredData = [""]
var fdLength = 0
//var resultsTable = [""]

  // Select the step 1 filter button, e.g. folder 3, activity 8
var filter = d3.select("#filter");
 // take input and act on click in these 3 lines
filter.on("click", function() {
    // Prevent default page refresh
    d3.event.preventDefault();
    // Select input element and get raw HTML node
    var inputElement = d3.select("#selectDate");
    //Get the value property of the date input element
    var inputValue = inputElement.property("value");
    // return inputVal, full table array to console
    console.log(inputValue);
    console.log(tableData);

    // Apply date filter to results and return to console
    //var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
    filteredData = tableData.filter(sightings => sightings.datetime === inputValue);

    console.log(filteredData)
    // store filteredData array length 
    fdLength = (filteredData.length)

  })

  function insertTable() {
    resultsTable.innerHTML = ' '
    for (let i = 0; i <= fdLength; i++) {
        // assign vars to iterated [i] row attrs
        let filteredTr = filteredData[i];
        let filteredTd = Object.keys(filteredTr);
        // insert open row to tbody
        let newTr = resultsTable.insertRow(i);
        // assign vars to tr keys and populate (td)
        for (let d = 0; d < filteredTd.length; d++) {
            let newTd = filteredTd[d];
            let newTdD = newTr.insertCell(d);
            newTdD.innerText = filteredTr[newTd]
        }  
    }
}
insertTable();
