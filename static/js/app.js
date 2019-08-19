// Assign the data to ufos
var ufos = data


var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var date_selected = d3.select("#datetime").property("value");
    // console.log(date_selected);
//     console.log(ufos);

  
var filteredufos = ufos.filter(ufo => ufo.datetime === date_selected);

console.log(filteredufos);

var ufo_arr = [];
for (var key in filteredufos) {
    if (filteredufos.hasOwnProperty(key)) {
        ufo_arr.push( [key,filteredufos[key]]);
        
    }
}

// Use D3 to select the table
var table = d3.select("#ufo-table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Append one table row `tr` to the table body
var row = tbody.append("tr");

row.append("td").text(ufo_arr[0]);

// for (let [key, value] of Object.entries(filteredufos[0])) {

//     console.log(`${key}: ${value}`);
// }

// filteredufos.forEach(function(element){
//     console.log(element);
//     row.append("td").text(element);
// })

})