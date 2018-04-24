// 公用数据库端口
var mysql = require('mysql');

function createConnection(sql,callback) {
	//创建连接对象
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: '1000phone'
	});
	//执行连接
	connection.connect();
	//执行sql语句查询
	connection.query(sql, function(error, results, fields) {
		//执行关闭
		if(error) throw error;
		//console.log('The solution is: ', results);
		callback(results)
		connection.end();
	});
	
	return connection
}

module.exports = createConnection