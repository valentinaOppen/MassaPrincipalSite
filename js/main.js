$(document).ready(function() {
    $("#divFormulario").on("submit", function(e) {
        e.preventDefault();
        var theBtn = $('#btnEnviar');
        if ( $('#btnEnviar').is('.disabled')) {
            theBtn.removeClass('disabled'); // enable the button?
            lightFill(); //show fill inputs
            lightEmpty(); //show empty inputs
            return false;
        }

        theBtn.addClass('disabled')  
            var data = $("#formulario").serialize();
            $.ajax({
            url: '/api/mail.php',
            type: 'POST',
            data: data,
        }).done(function(data) {
            //some code going here if success 
        }).fail(function() {
            theBut.removeClass('disabled')
        });
    });
});