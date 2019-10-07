// Call the dataTables jQuery plugin
$(document).ready(function() {

 $('#dataTable').DataTable( {
	"order": [[ 0, "DESC" ]],
	processing: true,
	responsive: true,
	language:{
	zeroRecords: "Carregando informações da Blockchain...",
	sProcessing: "<div id='loader'>asdsadsa</div>"
	}
	//oLanguage: {sProcessing: "<div id='loader'>asdsadsa</div>"}
 });

 $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/dados-medico-list',
        contentType: "text/plain",
        dataType: 'json',
	
        success: function (data) {

 	$.each(data, function (index, value) {
        	console.log(value.doenca);
		 $('#dataTable').dataTable().fnAddData( [
		value.id,
		value.doenca,
		value.dataNotificacao,
		value.localidade,
		value.idade,
		value.sexo
	      ]);        

	    });
	},
        error: function (e) {
          console.log("There was an error with your request...");
          console.log("error: " + JSON.stringify(e));
        }
      });




});
