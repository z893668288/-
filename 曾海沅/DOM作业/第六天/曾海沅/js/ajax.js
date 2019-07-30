function ajax(method, url, data, resolve) {
	// 1.创建xhr对象
	var xhr;
	// 2.捕获异常(处理兼容)
	try {
		xhr = new XMLHttpRequest();
	} catch (e) {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	// 3. 打开连接
	xhr.open(method, url, true); //method url isAsync是否异步

	// 4.设置请求头
	if (method.toUpperCase() == "POST") {
		xhr.setRequestHeader("Content-Type", "Application/x-www-form-urlencoded"); //默认方式
	}

	// 5.发送请求(请求参数写在括号中)
	xhr.send(data);

	// 5.监听响应状态
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) { //响应成功
			var data = xhr.responseText;
			resolve(data);
		}
	}
}
