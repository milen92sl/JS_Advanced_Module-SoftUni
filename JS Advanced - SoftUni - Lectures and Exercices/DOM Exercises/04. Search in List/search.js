function search() {
   let userInputWord = document.getElementById('searchText').value;
   let townsElement = Array.from(document.querySelectorAll('#towns li'));
   let match = document.getElementById('result');
   let count = 0;

   for (let town of townsElement) {
      if (town.textContent.includes(userInputWord) && userInputWord !== '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         count++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   match.textContent = `${count} matches found`;
}

function ppoReportOnLoadComplete(data, EnablePoReportAfterApproval) {
	let userKeyWord = '.+\/[A-z]+\/PO\/\d+\/\d+';
	for (var i = 0; i < data.rows.length; i++) {
		var row = data.rows[i];
		var rowData = $("#jqGridTable").jqGrid("getRowData", row.id);
		if (EnablePoReportAfterApproval) {
			if (rowData.PurchaseOrderStatus.toLowerCase() === "new po") {
				if (rowData.Code.toLowerCase().match(userKeyWord)) {
					$("#" + row.id + " #idReport").attr("href", "#").css("visibility", "hidden");
				}
			}
		}
	}
}

