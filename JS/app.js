//11.5.3
// import the data from data.js
const tableData = data;

//reference the html table using d3
var tbody=d3.select("tbody");

function buildTable(data) {
    // first clear out any existing data
    tbody.html("");

    //next loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tbody.append("tr");

        //loop through each field in the dataRow and add
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
            }
        );
    });
};

// filter the table by date
function handleClick() {
    //grab the datetime value from the filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    // check the date and filter the data using that date
    if (date) {
        //apply 'filter' to the data to only keep the rows that match the filter
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using the filtered data. 
    // if no date was entered then filteredData will just be the original table
    buildTable(filteredData);
};

d3.selectAll('#filter-btn').on('click', handleClick);

buildTable(tableData);