$(window).load(function() {
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
	
	$("#addstudent").on("click", function() {
		console.log($("textarea").eq(0).val())

		var date = new Date();
		var str = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

		if($("textarea").eq(0).val()) {
			$.ajax({
				type: "post",
				url: "http://localhost:8888/jishu/set",
				data: {
					
					content: $("textarea").eq(0).val(),
					time: str,
					name:$("#StuName").val(),
					card:sessionStorage.getItem("id_number")/121212

				},
				success: (res) => {
					console.log(res);
					window.location.reload()
				}
			});
		}

		return false
	})

	function createEle(res) {
		for(var i = 0; i < res.length; i++) {
			var htmlStr = '';
			htmlStr += '<tr>';
			htmlStr += '<td>' + res[i].t_name+ '</td>';
			htmlStr += '<td>' + res[i].t_content + '</td>';
			htmlStr += '<td>' + res[i].t_time + '</td>';
			htmlStr += '<td>' + "<a>( 0 )</a>" + '</td>';
			htmlStr += '</tr>';
			$("#sample-table-2").append(htmlStr);
		}
	}
	$.ajax({
		type: "post",
		url: "http://localhost:8888/createTab",
		data:{
			card:sessionStorage.getItem("id_number")
		},
		success: (res) => {
			createEle(res)
//console.log(res)
		}
	});

})