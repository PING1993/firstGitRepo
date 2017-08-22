var oDiv;
var msgDiv;
var img1;
var oDiv2;
window.onload = function() {
	oDiv = document.getElementById('box1');
	msgDiv = document.getElementById('msg');
	img1 = document.getElementById('img1');
	oDiv2 = document.getElementById('box2');

	/*oDiv.ondragenter=function(e){
		showObj(e);
	}*/

	oDiv.ondragover = function(e) {
		e.preventDefault();
	}
	//本地资源拖拽
	oDiv.ondrop=function(e){
		e.preventDefault();
		var f=e.dataTransfer.files[0];
		var fileReader=new FileReader();
		fileReader.onload=function(e) {
			showObj(e.target);
			oDiv.innerHTML="<img src=\""+fileReader.result+"\">";
		}
		fileReader.readAsDataURL(f);
	}
	oDiv2.ondragover = function(e) {
		e.preventDefault();
	}
	img1.ondragstart = function(e) {
		e.dataTransfer.setData('imgId', 'img1')
	}
	//当前网页拖拽
	//oDiv.ondrop = dropImgHandler;
	oDiv2.ondrop = dropImgHandler;
}

function dropImgHandler(e) {
	showObj(e.dataTransfer);
	e.preventDefault();
	var img = document.getElementById(e.dataTransfer.getData('imgId'));
	e.target.appendChild(img); //多个区域可被拖放
}

function showObj(obj) {
	var s = '';
	for(var k in obj) {
		s += k + ":" + obj[k] + "<br/>";
	}
	msgDiv.innerHTML = s;
}