var num=0;
var txt,btn;
window.onload=function(){
	txt=document.getElementById('txt');
	btn=document.getElementById('addbtn');
	if(sessionStorage.num){
		num=sessionStorage.num;
	}
	btn.onclick=function(){
		num++;
		sessionStorage.num=num;
		showNum();
	}
}
function showNum(){
	txt.innerHTML=num;
}
