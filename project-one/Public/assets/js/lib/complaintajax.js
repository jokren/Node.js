$(window).load(function() {
	console.log(111)
	$("#addstudent").on("click", function() {
		var date = new Date();
		var str = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
		//	var textarea=("#textarea").val()
		console.log($("textarea").eq(0).val())
		if($("textarea").eq(0).val()) {
			$.ajax({
				type: "post",
				url: "http://localhost:8888/addInfos",
				data: {
					c_complain: $("textarea").eq(0).val(),
					timer: str
				},
				success: (res) => {
					console.log(res);
				}
			});
		}

		return false
	})
})