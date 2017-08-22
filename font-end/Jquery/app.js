$(document).ready(function(){
	//遍历的过滤
//	$('div p').first().css({background:"cyan"});
//	$('div p').last().css({background:"red"});
//	$('div p').eq(1).css({background:"green"});
//	$('div p').filter('p').css({background:"green"});
	$('div p').not('.p').css({background:"green"});
	
//	alert('加载完毕');

//基本的一些事件的使用
//  $('p').click(function(){
//  	$(this).hide();
//  });

//  $('button').click(function(){
//  	$('.p').text('p元素class被修改了');
////  	$('p').text('p元素被修改了');//该选择存在时class选择器不起作用
//  	$('#p').text('p元素id被修改了');
//  });

//事件的绑定与取消绑定
//  $('button').bind('click',eventHandle1);
//  $('button').bind('dblclick',eventHandle2);
//  $('button').unbind('click');//全取消click绑定
//  $('button').unbind('click',eventHandle1);//取消某一click绑定
//  $('button').on('click',eventHandle1);
//  $('button').off('dblclick',eventHandle2);

//自定义事件的使用
    var btnClick=$('#btn');
//  btnClick.click(function(){
//  	var e=jQuery.Event('myEvent');
//  	btnClick.trigger(e);
//  });
//  btnClick.bind('myEvent',myEventHandle);

//HTML捕获、设置
//  btnClick.click(function(){
//  	alert('text:'+$('#p').text());
//  	alert('text:'+$('#p').html());
//      alert($('#aid').attr('href'));
//HTML设置
//      $('#p').text(function(index,oldValue){
//      	return 'oldValue:'+oldValue+',index:'+index;
//      });

//  });
    
//元素和内容的添加
      $('#btn').on('click',appendText);
});
//绑定事件的方法定义
//function eventHandle1(){
//	console.log('handle1');
//}
//function eventHandle2(){
//	console.log('handle2');
//}
//自定义事件的使用
//function conlog(e){
//	console.log(e);
//}
//function myEventHandle(e){
//	conlog(e);
//}
//元素和内容的添加
function appendText(){
	var t1='<p>hello</p>';
	var t2=$('<p></p>').text('world');
	var t3=document.createElement('p');
	t3.innerHTML='dom';
	$('body').append(t2,t1,t3);
}
