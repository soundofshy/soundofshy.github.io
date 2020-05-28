$(document).ready(function () {
    $('#chat-logo').click(function(e) {
        $('#chat, #chat-logo').toggleClass('open');
    });
    $('.close').click(function(e) {
        $('#chat, #chat-logo').toggleClass('open');
    });
});
