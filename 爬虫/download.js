var fs = require("fs")
var http = require("http")
var cheerio = require("cheerio")
var request = require('request');

http.get("http://pianke.me/pages/read/read.html", (res) => {
	var data = ""
	res.on("data", (chunk) => {
		data += chunk
	})
	res.on("end", () => {

       /* fs.writeFile("./test.html", data, (err, data) => {
        console.log("下载网页成功")
    })*/


		const $ = cheerio.load(data)
			console.log($("img"))
		$("img").each((index, ele) => {
			//console.log($(ele).attr("srctwo"))
			var imgSrc = $(ele).attr("src")
			if ($(ele).attr("src"))
				download(imgSrc,index)
		})
	})
}).end()

function download(imgSrc, index) {
	request(imgSrc).pipe(fs.createWriteStream(`${index}.jpg`))
}
