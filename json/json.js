function getjson_imgdao(){
	return {number:5};
}


function getjson_caidan(num){
	var caidan1 = ["动画轮播","表格"];
	var caidanHTML1 = ["html\/boot\/demo_lunbo.html","html\/boot\/demo_table.html"];
	var caidan2 = ["1"];
	var caidanHTML2 = ["mian.html"];
	return num===0?{
		caidan:caidan1,
		caidanHTML:caidanHTML1
	}:{
		caidan:caidan2,
		caidanHTML:caidanHTML2
	};
}
