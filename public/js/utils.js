function sendForm() {
    var data = $('#myform').serialize();
	 $.post({url: "/Calculate", data, success: function(result){
        $("#output").html(result);
        $("#output").show();
    }});
    
}


// $(document).ready(function () {

//     $('#myform').validate({ // initialize the plugin
//         rules: {
//             testSite: {
//                 required: true,
//             },
//             network: {
//                 required: true,

//             }
//         }
//     });

// });
