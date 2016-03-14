$(document).ready(function () {
    var addItem = $('#addItem');
    var removeItem = $('#removeItem');
    addItem.click(function () {
        var toAdd = $('input#text').val();
        $('#list').append('<li><input type="checkbox"/>' + toAdd + '</li>');
    });
    removeItem.click(function () {
        var toRemove = $('input#text').val();
        $('li:checked').remove();
    });
});