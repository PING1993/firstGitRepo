var oDiv;
var work=null;
window.onload=function(){
	oDiv=document.getElementById('numDiv');
	
	document.getElementById('start').onclick=startWorker;
	document.getElementById('stop').onclick=function(){
		if(work){
			work.terminate();
			work=null;
		}
	};
}
function startWorker(){
	if(work){
		return;
	}
	work=new Worker("js/count.js");
	work.onmessage=function(e){
		oDiv.innerHTML=e.data;
	}
}
