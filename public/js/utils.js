
function sendForm() {
    var form = document.getElementById('#uploadForm');
	var formData = new FormData(form);
	var xhr = new XMLHttpRequest();
// Add any event handlers here...
	if ($("#mean").is(':checked')) {
		xhr.open('POST', '/api/calculate/mean', true);
	}
	else{
		xhr.open('POST', '/api/calculate/median', true);	
	}
	console.log(formData)
	xhr.send(formData);
	$("#output").innerHtml =  "hi" + xhr.responseText; 
	$("#output").show();
    // }});
    
}
