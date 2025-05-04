function getResult() {
    let rows = prompt("ENTER NUMBER OF ROWS");
    let cols = prompt("ENTER NUMBER OF COLUMNS");

    if (!isNaN(rows) && !isNaN(cols) && rows > 0 && cols > 0) {
      const tableContainer = document.getElementById('table');
      let tableHTML = '<table>';
  
      // Generate table
      for (let i = 1; i <= rows; i++) {
        tableHTML += '<tr>';
        for (let j = 1; j <= cols; j++) {
          tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += '</tr>';
      }
  
      tableHTML += '</table>';
      tableContainer.innerHTML = tableHTML;
    } else {
      alert("Invalid input. Please enter positive integers.");
    }
}

//1km=100k