$(function(){

    $("#addstudent").on("click", function(evt){
        //获取sessionStorage
        var idcard = window.sessionStorage.getItem("id_number") / 121212


        var e = evt || window.event
        var leavetime = ""
        leavetime += $("#setBtimeD").val() + " " + $("#setBtimeH").val() + ": " + $("#setBtimeM").val()
        leavetime += "~" + $("#setEtimeD").val() + "  " + $("#setEtimeH").val() + ": " + $("#setEtimeM").val()

        var date = new Date()
        var createtime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ": " + date.getMinutes() + ": " + date.getSeconds()


        $.ajax({
            url : "http://localhost:8888/leave",
            type : "POST",
            data : {
                name : $("#StuName").val(),
                excuse : $("#content").val(),
                leavetime : leavetime,
                createtime : createtime,
                id_number : idcard
            }
        }).then((res) =>{
            console.log(res);
        })


       // event.preventDefault()
        //  return false
    })


    //获取sessionStorage
    var $idcard = window.sessionStorage.getItem("id_number") / 121212

    $.ajax({
        url : "http://localhost:8888/leave1",
        type : "POST"
    }).then((res) =>{
        //console.log(res);
        var arr = JSON.parse(res)
        for(var i = 0; i < arr.length; i++){
            if(arr[i].id_number == $idcard){
                var str = ""
                str += `<tr>`
                str += `<td>${arr[i].name}</td>`
                str += `<td>${arr[i].excuse}</td>`
                str += `<td>${arr[i].examine}</td>`
                str += `<td>${arr[i].approve}</td>`
                str += `<td>${arr[i].leavetime}</td>`
                str += `<td>${arr[i].createtime}</td>`
                str += `</tr>`
                $(str).appendTo($(".table"))
            }
        }
    })


    $.ajax({
        url : "http://localhost:8888/leave2",
        type : "POST"
    }).then((res) =>{
        //console.log(res);
        var arr = JSON.parse(res)
        for(var i = 0; i < arr.length; i++){
            if(arr[i].id_number == $idcard){
                $("#StuName").val(arr[i].name)
            }
        }
    })


})