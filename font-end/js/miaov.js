//Javascript Document
function $(v) {
	if(typeof v == 'function') {
		window.onload = v;
	} else if(typeof v == 'string') {
		return document.getElementById(v);
	} else if(typeof v == 'object') {
		return v;
	}
}

//如下实现函数封装，将可变的量，设为参数，传入函数，充分实现了代码重用
function doMove(obj, attr, dir, target, endFn) {
	//alert(getStyle(obj, attr));
	dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir; //判断正负，正负值的处理
	//alert(dir);
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var speed = parseInt(getStyle(obj, attr)) + dir;
		if(speed < target && dir < 0) { //>  < 未进行判断，出现了瞬间移动
			speed = target;
		}
		if(speed > target && dir > 0) { //>  < 未进行判断，出现了瞬间移动
			speed = target;
		}
		obj.style[attr] = speed + 'px'; //需用中括号，是因为style里没有这么个值（attr），使用[]来获取里边的值
		if(speed == target) {
			clearInterval(obj.timer);
			//alert(speed);
			/*if(endFn){endFn();}*/
			endFn && endFn(); //存在的话执行，即函数可有可无，可传可不传
		}
		//alert(oDiv.style.left);
	}, 20);
}

//使用该函数必须在原style中有定义，否则，取到的为0,默认为0,判断是否支持IE6，7，8如支持执行左面代码，否则执行右面代码
function getStyle(obj, attr) {

	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];

}

function shake(obj, attr, shakeFn) {

	var arr = [];
	var num = 0;
	var timer = null;
	var pos = parseInt(getStyle(obj, attr));
	//alert(pos);
	for(var i = 20; i > 0; i -= 2) {
		arr.push(i, -i);
	}
	//alert(arr);
	clearInterval(timer);
	timer = setInterval(function() {
		obj.style[attr] = pos + arr[num] + 'px';
		//alert(pos);
		//alert(oImg.style.left);
		num++;
		if(num == arr.length) {
			clearInterval(timer);
			shakeFn && shakeFn();
		}
	}, 40);

}
//shake函数的扩展
function fnShake() {
	var _this = this;
	shake(_this, 'left', function() {
		shake(_this, 'top');
	});
	console.log('left: '+parseInt(getStyle(this,'left')));
	console.log('top: '+parseInt(getStyle(this,'top')));
}
