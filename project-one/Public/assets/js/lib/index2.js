$(function(){




    $.ajax({
        url:"http://localhost:8888/index",
        type:"POST"
    }).then((res)=>{
        var arr=JSON.parse(res)
       var str=arr[0].School+"  "+arr[0].ProName
        $(".School").text(str)
        $(".IsStudent").text(arr[0].IsStudent)
        $(".Education").text(arr[0].Education)
        $("#avatar").attr("src",arr[0].srcimg1)
    })




    // $("#map").css({
    //     position:"absolute",
    //     left:"200px",
    //     bottom:"20px"
    // })
    // 百度地图API功能
    var map = new BMap.Map("map");
    var point = new BMap.Point(112.97935279,28.21347823);
    map.centerAndZoom(point,12);

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            //  alert('您的位置：'+r.point.lng+','+r.point.lat);
        }
        else {
            alert('failed'+this.getStatus());
        }
    },{enableHighAccuracy: true})
    //关于状态码
    //BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
    //BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
    //BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
    //BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
    //BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
    //BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
    //BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
    //BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
    //BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)
})