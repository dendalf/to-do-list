$(document).ready(function(){

    var qwe = $('#button-add');
    $(qwe).on( 'click', function () {
        var value = $('#input');
        var valueInput = value.val();
        // console.log(valueInput);
        $('#add-list').append("<li class='item'> + valueInput + </li>");

    });

});
