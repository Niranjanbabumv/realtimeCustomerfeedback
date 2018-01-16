//Fill out the fields in the Save form
function prepareDataForSave(){
	//Get last tone data result
	var tone = toneChart.getValues();
	if (tone) {
		$("#toneTypeToSave").val(toneChart.getType());
		$("#toneLevelToSave").val(toneChart.getLevel());
		$("#toneValueToSave").val(JSON.stringify(toneChart.getValues()[toneChart.getLevel()][toneChart.getType()], null, ' '));
	}

	//Get text
	$("#textToSave").val($("#resultsText").val() + $("#toneValueToSave").val());
}

//Send the data to the API.
function saveData(){
	//Get data from Save form
	var dataToSend = {
		name: $("#nameToSave").val(), //To Address Email
		transcription: $("#textToSave").val(), //Body Part
		toneType: $("#toneTypeToSave").val(),  //Subject
		toneLevel: $("#toneLevelToSave").val(), //Removed
		toneValue: $("#toneValueToSave").val(),  //To combine with body text
	};

	//POST request to API
	$.post( "/api/email", dataToSend ,function( data ) {
	  console.log("Save result:", data );
	}).fail(function() {
    alert( "Error saving data" );
  	});

    //Close the Save window
    $('#myModal').modal('hide');
}
