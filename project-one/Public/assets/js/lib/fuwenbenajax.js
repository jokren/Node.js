$(window).load(function() {
	$.ajax({
				type: "get",
				url: "http://localhost:8888/showhtml",
				async: true,
			}).done((data)=>{
				console.log(data)
				var html = data.results.map(function(item){
					console.log(item.s_content)
					return item.s_content
				}).join("");
				console.log(html)
				$("#fuwenben").append(html)
			})

})