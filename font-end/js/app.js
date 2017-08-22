/*$(document).ready(function(){
	//alert('文档加载完成');
	$('p').click(function(){
		$(this).hide();
	});
});
*/
//$(function(){
//	//alert('文档加载完成');
//	$('p').click(function(){
//		$(this).hide();
//	});
//});
var mycanvas,context;
var CANVAS_WIDTH="500px",CANVAS_HEIGHT="500px";
window.onload=function(){
	createCanvas();
	//drawRect();
	drawImage();
}
function createCanvas(){
	document.body.innerHTML="<canvas id='myCanvas' width='"+CANVAS_WIDTH+"' height='"+CANVAS_HEIGHT+"'></canvas>";
	mycanvas=document.getElementById('myCanvas');
	context=mycanvas.getContext('2d');
}
function drawRect(){
	//必须先于fillRect否则不起作用
	context.fillStyle="#00FFFF";
	//context.rotate(45);//旋转
	//context.translate(200,200);//位移
	context.scale(2,0.5);//缩放倍数
	
	context.fillRect(0,0,200,200);
}
function drawImage(){
	var img=new Image();
	img.onload=function(){
		context.drawImage(img,0,0);
	};
	img.src="../images/3.png";
}