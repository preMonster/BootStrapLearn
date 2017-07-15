$('#table').bootstrapTable({
	url: '../../json/table.json',
	method: 'get',
	dataType: "json",
	dataField: "data",
	classes:'table',//边框
	undefinedText:'',//当数据为 undefined 时显示的字符
	pagination:true,//启动分页
	paginationLoop:true,
	pageNumber: 1,
	pageSize:5,
	pageList:[ 1, 5, 10, 20 ],
	striped: true,
    showColumns: true,  //显示下拉框勾选要显示的列
    showRefresh: true,  //显示刷新按钮
    showToggle:true,//显示一行是否改成竖着
    showPaginationSwitch:true,//是否显示 下面的分页框
    search: true, //显示搜索框
    detailView:true,
    toolbal:'#toolbar',
    detailFormatter:function(index, row){
    	return JSON.stringify(row);
    },
    columns: [{
        field: 'checkbox',
        title: 'checkbox',
        checkbox:true
    }, {
        field: 'number',
        title: '序号',
        formatter: function(value,row,index){
        	return index+1;
        }
    }, {
        field: 'name',
        title: '名称',
        align: 'center'
    }, {
        field: 'biao',
        title: '标签',
        align: 'center'
    }, {
        field: 'content',
        title: '简介'
    },{
        title: '操作',
        field: 'caozuo',
        align: 'center',
        formatter:function(value,row,index){  
            var e = '<a  style="display: block;" class="btn btn-warning btn-xs" onclick="edit(\''+ index + '\')">'+
             '<i class="glyphicon glyphicon-pencil"></i>编辑</a>';
            var d = '<a  style="display: block;margin-top:5px;" class="btn btn-info btn-xs" onclick="view(\''+ index + '\')">'+
             '<i class="glyphicon glyphicon-list-alt"></i>查看</a>';  
            return e+d;  
        }}]	
});

function add(){
	noReadonly_tanchu();
	$("#title").html("新增");
	$("#modal_body_del").hide();
	$("#modal_body").show();
	$('#myModal').modal({
		keyboard: true
	});
	
	$("#sure").on('click',function(){
		var row = {
		name:$("#name").val(),
		biao:$("#biao").val(),
		content:$("#content").val()
		}
	$("#table").bootstrapTable('prepend',row);
	$('#myModal').modal('hide');
	});
}

function del(){
	var rows = $("#table").bootstrapTable('getSelections');
	console.log(rows);
	if(rows.length == 0){
		alert("请选择！")
	}else{
		$("#title").html("删除");
		$("#modal_body").hide();
		$("#modal_body_del").show();
		
		$('#myModal').modal({
			keyboard: true
		});
		
		var rowsult = [];
		
		for(var i in rows){
			rowsult.push(rows[i].biao);
		}
		
		$("#sure").on('click',function(){
		$("#table").bootstrapTable('remove', {field: 'biao', values: rowsult});
		$('#myModal').modal('hide');
		});
	}
	
}

function edit(index){
	var row = $("#table").bootstrapTable('getOptions').data[index];

	$("#modal_body_del").hide();
	$("#modal_body").show();
	$('#myModal').modal({
		keyboard: true
	});
	noReadonly_tanchu();
	$("#title").html("编辑");
	$("#name").val(row.name);
	$("#biao").val(row.biao);
	$("#content").val(row.content);
	$("#index").html(index);
	
	$("#sure").on('click',function(){
		var row = {
		name:$("#name").val(),
		biao:$("#biao").val(),
		content:$("#content").val()
		}
	$("#table").bootstrapTable('updateRow', {index: $("#index").html(), row: row});
	$('#myModal').modal('hide');
	});
}

function view(index){
	var row = $("#table").bootstrapTable('getOptions').data[index];

	$("#modal_body_del").hide();
	$("#modal_body").show();
	$("#title").html("查看");
	$('#myModal').modal({
		keyboard: true
	});
	
	$("#name").val(row.name);
	$("#biao").val(row.biao);
	$("#content").val(row.content);
	readonly_tanchu();
	
	$("#sure").on('click',function(){
		$('#myModal').modal('hide');
	});
}

function readonly_tanchu(){
	$("#name").attr("readonly",true);
	$("#biao").attr("readonly",true);
	$("#content").attr("readonly",true);
}

function noReadonly_tanchu(){
	$("#name").attr("readonly",false);
	$("#biao").attr("readonly",false);
	$("#content").attr("readonly",false);
}



