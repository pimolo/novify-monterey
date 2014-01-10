$(document).ready(function() {
    $('#artists .artistbox').hide();
    $('#artists #muse').show();
    $('#artists .button').click(function() {
        var artist = $(this).data('toggle');
        $('#artists .artistbox').hide();
        $('#artists #' + artist).show();
    });
});
