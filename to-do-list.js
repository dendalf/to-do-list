$(document).ready(function(){

    let qwe = $('#button-add');
    $(qwe).on( 'click', function abc() {
        let value = $('#input');
        let valueInput = value.val();
        $('#add-list').append(`<li class='item'>${valueInput}</li>`);
        value.value = '';
    });
    $('#input').keyup(function(){
        if(event.keyCode === 13)
        {
            let value = $('#input');
            let valueInput = value.val();
            $('#add-list').append(`<li class='item'>${valueInput}</li>`);
            value.value = '';
            $('#input').value = '';
        }
    })

});
