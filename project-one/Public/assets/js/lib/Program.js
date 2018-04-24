$(window).load(function () {
	$(".btn-primary").eq(0).on("click",function () {
		$("tr").show()
		var str1=$("#title").val()
		var str2=$("#course").val()
		console.log(str1,str2);
		console.log();
		if(str1!=""){
			for (var i = 0; i <$("tbody a") .length; i++) {
				if($("tbody a").eq(i).text().indexOf(str1)==-1){
					$("tbody a").eq(i).parents("tr").hide()
				}
			}
		}
		if(str2!=0){
			if(str2==23){
				str2="PHP"
			}
			if(str2==27){
				str2="JavaEE"
			}
			if(str2==50){
				str2="Python"
			}
			for (var i = 0; i <$("td:nth-of-type(5)") .length; i++) {
				if($("td:nth-of-type(5)").eq(i).text().trim().indexOf(str2)==-1){
					$("td:nth-of-type(5)").eq(i).parents("tr").hide()
				}
			}
		}
		return false
	})
})