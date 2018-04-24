$(window).load(function () {
    //查询名字  渲染
    $.ajax({
        type:"post",
        url:"http://localhost:8888/pwd",
        data:{
            id: sessionStorage.getItem("id_number")
        }
        }).then(function(res){
            $("#StuName").val(res)
    })

    var n = window.sessionStorage.getItem('id_number')/121212;
    $("#actionform").on("submit",function () {
        var date = new Date();
        var sTime= date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

        $.ajax({
            type: "POST",
            url: "http://localhost:8888/soso",
            data: {
                w_name:$("#StuName").val(),
                w_title: $("#title").val(),
                w_content: $("#content").val(),
                w_time:sTime,
            },
            success(data) {
                console.log(data);
                window.location.reload()
            }
        });
        return false;
    })
    function createEle(res) {


        for(var i = 0; i < res.length; i++) {
            var htmlStr = '';
					// htmlStr += '<tbody>';
            htmlStr += '<tr>';
            htmlStr += '<td>' + res[i].w_name + '</td>';
            htmlStr += '<td>' + res[i].w_title + '</td>';
            htmlStr += '<td>' + res[i].w_content + '</td>';
            htmlStr += '<td>' + "<a>( 0 )</a>" + '</td>';
            htmlStr += '<td>' + res[i].w_time + '</td>';
            htmlStr += '</tr>';
					// htmlStr += '</tbody>';
            $("#sample-table-2").append(htmlStr);
        }
    }
    $.ajax({
        type: "get",
        url: "http://localhost:8888/createTab1",
        success: (res) => {
            // console.log(123);
            console.log(res);
            createEle(res)
        }
    });
})
