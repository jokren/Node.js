$(function () {
    var uid = window.sessionStorage.getItem('id_number');
    console.log(uid);
    // console.log(1);
    $('#addstudent').on("click",function () {
        console.log(1);
        $.ajax({
            url: 'http://localhost:8888/upFiles',
            type: 'POST',
            cache: false, //不必须
            data: new FormData($('#actionform')[0]),
            processData: false,
            contentType: false,
            success: function(data) {
                console.log(data);
                $.ajax({
                    url: 'http://localhost:8888/upFiles_i',
                    type: 'POST',
                    data: {
                        u_id:uid
                    }
                })
            }
        });
        return false;
    })
})