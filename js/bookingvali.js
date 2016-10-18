$.validator.setDefaults({
submitHandler: function (form) {
    $.ajax({
        type: 'POST',
        url: 'sendBooking.php',
        data: $(form).serialize(),
	success: function(){
            window.location.href = 'http://localhost/events/index.html';
	}
    });
}
});

$().ready(function() {
	// validate the form when it is submitted
	var validator = $("#bookform").validate({
		errorPlacement: function(error, element) {
			// Append error within linked label
			$( element )
				.closest( "form" )
					.find( "label[for='" + element.attr( "id" ) + "']" )
						.append( error );
		},
		errorElement: "span",
		messages: {
			firstname: {
				required: " (required)",
				minlength: " (must be at least 3 characters)"
			},
			surname: {
				required: " (required)",
				minlength: " (must be at least 3 characters)"
			},
			phoneNumber: {
				required: " (required)",
				minlength: " (must be 10 numbers in length)",
				maxlength: " (must be 10 numbers in length)",
				number: "(this field must be a number)"
			},
			email: {
				required: " (required)",
				email: "(provide a correct email address",
				minlength: " (must be 5 numbers in length)"
			},
			pack: {
				required: " (required)"
			},
			eventdate: {
				required: " (required)"
			},
			NumOfGuests: {
				required: " (required)",
				number: "(this field must be a number)"
			},
			addressL1: {
				required: " (required)",
				minlength: " (must be 5 numbers in length)"
			},
			addressL2: {
				required: " (required)",
				minlength: " (must be 5 numbers in length)"
			},
			postalcode: {
				required: " (required)",
				number: "(this field must be a number)"
			}
		}
	});

	$(".cancel").click(function() {
		validator.resetForm();
	});
});
