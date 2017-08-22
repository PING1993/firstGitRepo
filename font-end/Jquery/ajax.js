$(document).ready(function(){
	alert('wait...');
	$('body').load('box.htm',function(e,status,x){
		console.log(status);
		if (status=='error') {
			console.log(status);
		}
	});
	$.getScript('AJAXjs.js').complete(function(){
//		alert('异步执行结束，我被抛出');
        sayHello();
	});
});
