
function addRow(tableID){
	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;
	if(rowCount < 5){
		var row = table.insertRow(rowCount);
		var colCount = table.rows[0].cells.length;
		for(var i = 0; i<colCount; i++){
			var newcell = row.insertCell(i);
			newcell.innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}else{
		alert{"Numero maximo de productos alcanzado"}
	}
}