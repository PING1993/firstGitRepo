window.onload=function() {
	var oUser = $('#userName');
	var oProfile = $('#profile');
	var oArrowDown = document.getElementById('arrowDown');
	var oPwd = document.getElementById('pwd');
	var oLock = document.getElementById('lock');
	var oEye = document.getElementById('eye');
	var oBtn = document.getElementById('submit');
	oEye.onOff = true;
	oEye.title = "显示密码";
	
	
	oArrowDown.onmouseenter = function() {
		oArrowDown.title = "您可以在点击它来快速获取您的账号";
	}
	oArrowDown.onclick = function() {
		alert(1);
	}
	oEye.onclick = function() {
		if(oEye.onOff) {
			oEye.title = "隐藏密码";
			oEye.className = "glyphicon glyphicon-eye-open";
			oEye.onOff = false;
		} else {
			oEye.title = "显示密码";
			oEye.className = "glyphicon glyphicon-eye-close";
			oEye.onOff = true;
		}

	}
}