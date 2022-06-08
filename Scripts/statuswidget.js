function UpdateStatusBox() {
    //Set box position
    var topPosition = (window.innerHeight - 50 - 200) + $(this).scrollTop();
    $(".status").css("top", topPosition);

    // Update status values
    $("#scrollTop").text($(this).scrollTop());
    $("#innerWidth").text($(this).innerWidth());
    $("#innerHeight").text($(this).innerHeight());

    $("#outerWidth").text(window.outerWidth);
}
function DrawStatusBox() {
    $(".status").append('<table><tr><td>innerWidth:</td><td id="innerWidth"></td></tr><tr><td>innerHeight:</td><td id="innerHeight"></td></tr><tr><td>scrollTop:</td><td id="scrollTop"></td></tr> <tr><td>outerWidth:</td><td id="outerWidth"></td></tr></table>');
    UpdateStatusBox();
}

$(document).ready(function () {
    UpdateStatusBox();
    DrawStatusBox();
})
$(window).resize(function () {
    UpdateStatusBox();
})
$(document).scroll(function () {
    UpdateStatusBox()
})