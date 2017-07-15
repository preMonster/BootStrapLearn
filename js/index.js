function changeFrameHeight(){
    var ifm= document.getElementById("main"); 
    ifm.height=document.documentElement.clientHeight;
}
window.onresize=function(){  
     changeFrameHeight();  
} 

changeCaidan(0);
$().alert('close');

function changeCaidan(num){
	document.getElementById("caidan_ul").innerHTML = "";
	var result = getjson_caidan(num);
	
	changeIframeSRC(result.caidanHTML[0]);
	var lis = "";
	
	for(let i in result.caidan){
		lis += "<li role='presentation'>"+
		"<a class='daohanga1' onclick=changeIframeSRC('"+result.caidanHTML[i]+"')>"+result.caidan[i]+"</a></li>"
	}
	
	$("#caidan_ul").append(lis);
}

function changeIframeSRC(src){
	$("#main").attr("src",src+"");
}
