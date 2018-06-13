$(document).ready(function () {

    // Добавляется li

    $('#button-add').on('click', function () {
        let value = $('#input');
        let valueInput = value.val();
        $('#add-list').append(`<li class='item'>${valueInput}<div class='remove'>x</div><div class='modal'>m</div></li>`);
    });

    // Удаляется li

    $(document).on('click', '.remove', function () {
        $(this).parent().remove()
    });

    // Модальная кнопка

    $(document).on('click', '.modal', function () {
        alert('Hello World!')
    });

    // Добавляется зачеркивание

    $(document).on('click', '.item', function () {
        $(this).removeClass('item').addClass('checked')
    });











    //
    // function someFunc() {
    //     let inputVal = document.getElementById("input").value;
    //     let itemVal = document.getElementsByClassName("item").value;
    //     if (inputVal !== itemVal) {
    //         console.log(123)
    //     }
    // }
    //
    // document.getElementById("button-add").onclick = someFunc;
    //
    //








    // Очищается input

    document.getElementById("button-add").onclick = function () {
        document.getElementById("input").value = "";
    };

});





