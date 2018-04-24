$(window).load(function () {
	if(sessionStorage.getItem("id_number")) {
		$.ajax({
			url: "http://localhost:8888/pwd",
			type: "post",
			data: {
				id: sessionStorage.getItem("id_number")
			}
		}).then((res) => {
			console.log(res);
			if(res=='错误'){
				location.href="login.html"
			}else {
				$(".dropdown-toggle").eq(0).text(res)
			}
		})
	}else {
		location.href="login.html"
	}
	$(".dropdown-toggle").eq(0).on("click",function () {
		$.ajax({
			url: "http://localhost:8888/pwd/outlogin",
			type: "post",
			data: {
				id: sessionStorage.getItem("id_number")
			}
		}).then((res) => {
			console.log(111, res);
			console.log("退出登录");
			sessionStorage.setItem("id_number","")
			location.href="login.html"
		})
		
		
	})
})