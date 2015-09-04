function sendForm() {
	var xmlHttp;
	if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlHttp=new XMLHttpRequest();
		}
    else {
        alert('Please use a modern browser');
        
    }
    
}


$(document).ready(function () {

    $('#myform').validate({ // initialize the plugin
        rules: {
            testSite: {
                required: true,
            },
            network: {
                required: true,

            }
        }
    });

});
