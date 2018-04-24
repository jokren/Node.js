//防重复提交
function submit ( id )
{
	$('#' + id).attr("disabled", true);
	$('#' + id).text("正在提交....");
}



//jquery验证手机号码
function checkSubmitMobil(val) {
	
	if (!val.match(/^[(86)|0]?(13\d{9})|(15\d{9})|(18\d{9})|(17\d{9})|(14\d{9})|(16\d{9})|(19\d{9})$/)) {
		//alert(12);
		return false;
	}
	return true;
	
}

/**
 * 检查字符串是否为合法QQ号码
 * @param {String} 字符串
 * @return {bool} 是否为合法QQ号码
 */
function isQQ(aQQ) {
	var bValidate = RegExp(/^[1-9][0-9]{4,10}$/).test(aQQ);
	if (bValidate) {
		return true;
	}
	else
		return false;
}

//验证码 6位数字
function checkSubmitCode(val) {
	
	if (!val.match(/^\d{6}$/)) {
		//alert(12);
		return false;
	}
	return true;
	
}

//验证密码 字母，数字 6-18位
function checkSubmitPassword(val) {
	
	//if (!val.match(/^[\\~!@#$%^&*()-_=+|{}\[\],.?\/:;\'\"\d\w]{6,18}$/)) {
	
	if (!val.match(/^[\d\w]{6,18}$/)) {
		return false;
	}
	return true;
	
}

//是否为空验证
function isEmpty(val){
	//alert(val);
	if(val==null||$.trim(val).length==0||val=='null'){
		return true;
	}else{
		return false;
	}
}

//jquery验证邮箱
function checkSubmitEmail(val) {
	//var msg = '';
	
	if (!val.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
		//msg = '邮箱错误，请重新输入!';
		return false;
	}else{
		return true;
	}
}

function VerifyQQ(QQ) {
	var reg = /^[1-9]{1}[0-9]{4,8}$/;
	if( reg.test(QQ) ) { return true;}
	return false;
}

function isBlank( s )//公共函数，是否为空
{
	var len=s.length;
	for( i = 0; i < len; i ++ )
	{
		if( s.charAt(i) != " " )
			return false;
	}
	return true;
}





function IdentityCodeValid(code) {
	var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
	var tip = "";
	var pass= true;
	var code= code.toUpperCase(code);
	// if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
	//     //tip = "身份证号格式错误";
	//     pass = false;
	// }
	if (!code || !/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i.test(code)) {
		//tip = "身份证号格式错误";
		pass = false;
	}
	else if(!city[code.substr(0,2)]){
		//tip = "地址编码错误";
		pass = false;
	}
	else{
		//18位身份证需要验证最后一位校验位
		if(code.length == 18){
			code = code.split('');
			//∑(ai×Wi)(mod 11)
			//加权因子
			var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
			//校验位
			var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
			var sum = 0;
			var ai = 0;
			var wi = 0;
			for (var i = 0; i < 17; i++)
			{
				ai = code[i];
				wi = factor[i];
				sum += ai * wi;
			}
			var last = parity[sum % 11];
			if(parity[sum % 11] != code[17]){
				//tip = "校验位错误";
				pass =false;
			}
		}
	}
	//if(!pass) alert(tip);
	return pass;
}

//判断有没有在数组中存在
function contains(arr, obj) {
	var i = arr.length;
	while (i--) {
		if (arr[i] === obj) {
			return true;
		}
	}
	return false;
}

/*
** randomWord 产生任意长度随机字母数字组合
** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
** xuanfeng 2014-08-28
*/

function randomWord(randomFlag, min, max){
	var str = "",
		range = min,
		arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	
	// 随机产生
	if(randomFlag){
		range = Math.round(Math.random() * (max-min)) + min;
	}
	for(var i=0; i<range; i++){
		pos = Math.round(Math.random() * (arr.length-1));
		str += arr[pos];
	}
	return str;
}




//获取手机号,并记录日志
function getShowTel(sid,mid,type,_this)
{
	var host = window.location.host;
	var http = "http://"+host+"/teacher.php/Api/getShowTel";
	//var http = "http://www.kefu.com/teacher.php/Api/getShowTel";
	$.ajax({
		async:true,
		url: http,
		type: "GET",
		dataType: 'jsonp',
		jsonp: 'callback',
		data: {sid:sid,mid:mid,type:type,from_url:$.base64.encode(window.location.href)},
		timeout: 5000,
		beforeSend: function(){
			$(_this).html("<img src='/Public/images/loading.gif' />");
			layer.msg('操作日志已记录!');
		},
		success: function (json) {
			$(_this).html(json.res);
		},
		complete: function(XMLHttpRequest, textStatus){
		
		},
		error: function(xhr){
			layer.msg('网络出错');
		}
	});
	
}





