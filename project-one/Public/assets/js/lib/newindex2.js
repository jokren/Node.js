$(function(){


    $.ajax({
        url : "http://localhost:8888/newindex2",
        type : "POST"
    }).then((res) =>{
        var arr = JSON.parse(res)

        console.log(arr);
        var $idcard=window.sessionStorage.getItem("id_number")/121212

        for(var i = 0; i < arr.length; i++){
            if(arr[i].id_number==$idcard ){
                console.log(22);
                $("#Tel").val(arr[i].tel)
                $("#QQ").val(arr[i].qq)
                $("#StuName").val(arr[i].name)
                $("#IDcard").val(arr[i].id_number)
            }
        }
    })



    $.ajax({
        url : "http://localhost:8888/newindex1",
        type : "POST"
    }).then((res) =>{
        var $idcard=window.sessionStorage.getItem("id_number")/121212
        var arr = JSON.parse(res)
        for(var i = 0; i < arr.length; i++){
            if(arr[i].IDcard ==$idcard){
                $("#Sex").val(arr[i].Sex)
                $("#Tel").val(arr[i].Tel)
                $("#QQ").val(arr[i].QQ)
                $("#StuName").val(arr[i].StuName)
                $("#ProvinceId").val(arr[i].ProvinceId)
                $("#School").val(arr[i].School)
                $("#ProName").val(arr[i].ProName)
                $("#IsStudent").val(arr[i].IsStudent)
                $("#Education").val(arr[i].Education)
                $("#ProName2").val(arr[i].ProName2)
                $("#is_computer").val(arr[i].is_computer)
                $("#is_develop").val(arr[i].is_develop)
                $("#pc").val(arr[i].pc)
                $("#CityId").val(arr[i].CityId)
                $("#StucityId").val(arr[i].StucityId)
                $("#AreaId").val(arr[i].AreaId)
                $("#contact_person").val(arr[i].contact_person)
                $("#contact_rel").val(arr[i].contact_rel)
                $("#contact_tel").val(arr[i].contact_tel)
                $("#view-0").children("label").children("img").attr("src",arr[i].srcimg1)
                $("#view-1").children("label").children("img").attr("src",arr[i].srcimg2)
                $("#view-2").children("label").children("img").attr("src",arr[i].srcimg3)
                $("#view-4").children("label").children("img").attr("src",arr[i].srcimg5)
            }
        }
    })


    $("#addstudent").on("click", function(){
        var str1 = $("#view-0").children("img").attr("src")
        var str2 = $("#view-1").children("img").attr("src")
        var str3 = $("#view-2").children("img").attr("src")
        var str4 = $("#view-3").children("img").attr("src")
        var str5 = $("#view-4").children("img").attr("src")

        var $idcard=window.sessionStorage.getItem("id_number")/121212
        $.ajax({
            url : "http://localhost:8888/newindex",
            type : "POST",
            data : {
                StuName : $("#StuName").val(),
                Sex : $("#Sex").val(),
                Tel : $("#Tel").val(),
                QQ : $("#QQ").val(),
                IDcard : $idcard,
                ProvinceId : $("#ProvinceId").val(),
                School : $("#School").val(),
                ProName : $("#ProName").val(),
                IsStudent : $("#IsStudent").val(),
                Education : $("#Education").val(),
                ProName2 : $("#ProName2").val(),
                is_computer : $("#is_computer").val(),
                is_develop : $("#is_develop").val(),
                pc : $("#pc").val(),
                CityId : $("#CityId").val(),
                StucityId : $("#StucityId").val(),
                AreaId : $("#AreaId").val(),
                contact_person : $("#contact_person").val(),
                contact_rel : $("#contact_rel").val(),
                contact_tel : $("#contact_tel").val(),
                srcimg1 : str1,
                srcimg2 : str2,
                srcimg3 : str3,
                srcimg4 : str4,
                srcimg5 : str5
            }
        }).then((res) =>{
            console.log(res);
        })
        return false
    })
})