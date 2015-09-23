function sendForm() {
    var form = document.getElementById('#uploadForm');
	var formData = new FormData(form);
	var xhr = new XMLHttpRequest();
// Add any event handlers here...
	xhr.open('POST', '/Calculate', true);
	
	xhr.send(formData);
	$("#output").innerHtml =  "hi" + xhr.responseText; 
	//  $.post({url: "/Calculate", formData, success: function(result){
	// 	 $("#output").innerHtml = result; 
	$("#output").show();
    // }});
    
}
