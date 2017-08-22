window.onload = function() {
	setInterval(fnTimer, 1000);
	fnTimer();

	function fnTimer() {
		var oTime = document.getElementById('time');
		var iNow = new Date();
		var myHours = iNow.getHours(); 
		var myMinutes = iNow.getMinutes(); 
		var mySeconds = iNow.getSeconds(); 
		var str = iNow.getFullYear() + '/' + parseInt(iNow.getMonth() + 1) + '/' + iNow.getDate() + ' ' + myHours + ':' + toTwo(myMinutes) + ':' + toTwo(mySeconds);
		oTime.textContent = str;

		function toTwo(n) {
			return n < 10 ? '0' + n : '' + n;
		}
	}
}