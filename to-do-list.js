// $(document).ready(function(){
//
//     function abc() {
//         let value = $('#input');
//         let valueInput = value.val();
//         $('#add-list').append(`<li class='item'>${valueInput}</li>`);
//         value.value = '';
//     }
//
//     let qwe = $('#button-add');
//
//     $(qwe).on( 'click', abc() );
//
//     $('#input').keyup(function(){
//         if(event.keyCode === 13)
//         {
//             abc()
//         }
//     });
//
// });


$(document).ready(function () {

// if ($('#input').valueInput =! ''){

    $('#button-add').on('click', function () {
        let value = $('#input');
        let valueInput = value.val();
        $('#add-list').append(`<li class='item'>${valueInput}<div class='remove'>x</div></li>`);
        // $('#input').valueInput = '';
    });

    $('body').on('click','.remove', function () {
        $(this).parent().remove()
    })
// }
    // $('#input').keyup(function(){
    //     if(event.keyCode === 13)
    //     {
    //         let value = $('#input');
    //         let valueInput = value.val();
    //         $('#add-list').append(`<li class='item'>${valueInput}</li>`);
    //         value.value = '';
    //     }
    // });

});
