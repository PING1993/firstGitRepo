window.onload = function() {
	var oUsername = document.getElementById('username');
	var oPwd = document.getElementById('pwd');
	var oBtn = document.getElementById('login_btn');
	var oForm = document.getElementById('login-form');
	oPwd.addEventListener('blur', blurEvent);

	function blurEvent() {
		oPwd.style.background="red";
	}

}