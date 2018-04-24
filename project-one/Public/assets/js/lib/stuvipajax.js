$(window).load(function() {
	$.ajax({
		type:"post",
		url:"http://localhost:8888/pwd",
		data:{
			id: sessionStorage.getItem("id_number")
		}
	}).then(function(res){
		$("#StuName").val(res)
	})
	
	$("#addstuvip").on("click", function() {
		console.log($("#content").val())

		if($("#content").val()) {
			$.ajax({
				type: "post",
				url: "http://localhost:8888/vip",
				data: {
					reason: $("#content").val(),
					id: sessionStorage.getItem("id_number"),
					name:$("#StuName").val()
				},
				success: (res) => {
					console.log(res);
				}
			});
		}

		return false
	})
})