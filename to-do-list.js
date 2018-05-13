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














$(document).ready(function(){

// if ($('#input').valueInput =! ''){

    $('#button-add').on( 'click',  function () {
        let value = $('#input');
        let valueInput = value.val();
        $('#add-list').append(`<li class='item'>${valueInput}</li>`);
        $('#input').valueInput = '';
    });

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
