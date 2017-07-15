for(var i=0;i<document.getElementsByTagName("img").length;i++){
	document.getElementsByTagName("img")[i].style.zIndex = i;
}//图片初始化赋予状态

var t;//Time
var state = 0;

hover(0);//自动轮播开关

//主方法
function hover(onHover){
	
	clearTimeout(t);//清除Time,防止多次点击引起混乱
	
	document.getElementsByTagName("button")[onHover].style.backgroundColor = "chocolate";//这用来控制按钮颜色改变
	
	var num = document.getElementsByTagName("img").length;
	
	//对每个鼠标悬浮对象的所有其他图片进行left改变
	for(var i=0;i<num;i++){
		var img = document.getElementsByTagName("img")[i];
		if(i>onHover){
				img.style.left = (50/(num-1))*i+50/(num-1)*(num-2)+"%";//这是当我们鼠标经过图片，他右边的图片应该到达右边状态
		}else if(i<=onHover){
				img.style.left = (50/(num-1))*i+"%";//这是当我们鼠标经过图片，他左边的图片应该回到初始状态
		}
		
		if(i!=onHover){
				document.getElementsByTagName("button")[i].style.backgroundColor = "#ffffff";
		}
	}
	
	state = onHover;//保存当前状态
	
	//用来控制自动轮播
	onHover++;
	if(onHover==document.getElementsByTagName("img").length){
		onHover=0;
	}
	
	
	t = setTimeout("hover("+onHover+")",2000);//每隔2s自动下一个
}

//点击下一个上一个
function next_hover(right){
	var onHover = state;
	if(right){
		if(state==document.getElementsByTagName("img").length-1){//进行状态判断，若为最后一个，下一个为第一个
			onHover=0;
		}else{
			onHover++;
		}
	}else{
		if(state==0){//进行状态判断，若为第一个，下一个为最一个
			onHover=document.getElementsByTagName("img").length-1;
		}else{
			onHover--;
		}
	}
	hover(onHover);
}