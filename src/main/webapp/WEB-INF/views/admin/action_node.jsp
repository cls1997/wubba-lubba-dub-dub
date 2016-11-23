<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://zlzkj.com/tags" prefix="z" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%@include file="../public/resource.jsp" %>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>节点管理</title>
	<script type="text/javascript">
		var ZLZ = window.ZLZ = {
			"ROOT"   : "${__root__}",
			"URL"    : "${__url__}",
			"STATIC" : "${__static__}"
		}
	</script>
<script>
	var url;
	function openBookSortAddDialog(){
		$("#dlg").dialog("open").dialog("setTitle","添加节点");
		url="${z:u('admin/action_node_add')}";
	}
	function openBookSortDialog(){
		var selectedRows=$("#dg").datagrid('getSelections');
		if(selectedRows.length!=1){
			$.messager.alert("系统提示","请选择一条要编辑的数据！");
			return;
		}
		var row=selectedRows[0];
		$("#dlg").dialog("open").dialog("setTitle","编辑该节点");
		$("#fm").form("load",row);
		url="${z:u('admin/action_node_edit')}";
	}
	function deleteBookSort(){
		var selectedRows=$("#dg").datagrid('getSelections');
		if(selectedRows.length==0){
			$.messager.alert("系统提示","请选择要删除的数据！");
			return;
		}
		var strIds=[];
		for(var i=0;i<selectedRows.length;i++){
			strIds.push(selectedRows[i].id);
		}
		var ids=strIds.join(",");
		$.messager.confirm("系统提示","您确认要删掉这<font color=red>"+selectedRows.length+"</font>条数据吗？",function(r){
			if(r){
				$.post("${z:u('admin/action_node_delete')}",{delIds:ids},function(result){
					if(result.status>0){
						$.messager.alert("系统提示","您已成功删除<font color=red>"+result.data+"</font>条数据！");
						$("#dg").datagrid("reload");
					}else{
						$.messager.alert('系统提示',result.info);
					}
				},"json");
			}
		});
	}
	function saveBookSort(){
		$("#fm").form("submit",{
			url:url,
			success:function(result){
				var json = (new Function("return " + result))();
				if(json.status==-1){
					$.messager.alert("系统提示",json.info);
					return;
				}else if(json.status==1){
					$.messager.alert("系统提示","保存成功");
					closeBookDialog();
					$("#dg").datagrid("reload");
				}else{
					$.messager.alert("系统提示","保存失败");
					closeBookDialog();
					$("#dg").datagrid("reload");
				}
			}
		});
	}
	
	function resetValue(){
		$("#name").val("");
		$("#note").val("");
	}
	function closeBookDialog(){
		$("#dlg").dialog("close");
		resetValue();
	}
</script>
</head>
<body style="margin: 5px;">
	<table id="dg" title="" class="easyui-datagrid" fitColumns="true"
	 pagination="true" rownumbers="true" url="${z:u('admin/action_node')}" fit="true" toolbar="#tb">
		<thead>
			<tr>
				<th field="id" checkbox="true">ID</th>
				<th field="sId" width="50" align="center">ID</th>
				<th field="name" width="50" align="center">名称</th>
				<th field="pid" width="50" align="center">父节点ID</th>
				<th field="url" width="100" align="center">URL</th>
				<th field="level" width="100" align="center">级别</th>
				<th field="sortId" width="100" align="center">排序值</th>
			</tr>
		</thead>
	</table>
	
	<div id="tb">
		<div>
			<a href="javascript:openBookSortAddDialog()" class="easyui-linkbutton" iconCls="icon-add" plain="true">添加</a>
			<a href="javascript:openBookSortDialog()" class="easyui-linkbutton" iconCls="icon-edit" plain="true">修改</a>
			<a href="javascript:deleteBookSort()" class="easyui-linkbutton" iconCls="icon-remove" plain="true">删除</a>
		</div>
	</div>
	
	<div id="dlg" class="easyui-dialog" style="width: 570px;height: 300px;padding: 10px 20px"
		closed="true" buttons="#dlg-buttons">
		<form id="fm" method="post">
			<table cellspacing="5px;">
				<tr>
					<td valign="top">名称：</td>
					<td><input type="text" name="name" id="name" class="easyui-validatebox" required="true"/></td>
				</tr>
				<tr>
					<td valign="top">父节点ID：</td>
					<td><input type="text" name="pid" id="pid" class="easyui-validatebox" required="true"/></td>
				</tr>
				<tr>
					<td valign="top">URL：</td>
					<td><input type="text" name="url" id="url" class="easyui-validatebox" required="true"/></td>
				</tr>
				<tr>
					<td valign="top">排序值：</td>
					<td><input type="text" name="level" id="level" class="easyui-validatebox" required="true"/></td>
				</tr>
			</table>
		</form>
	</div>
	
	<div id="dlg-buttons">
		<a href="javascript:saveBookSort()" class="easyui-linkbutton" iconCls="icon-ok">保存</a>
		<a href="javascript:closeBookDialog()" class="easyui-linkbutton" iconCls="icon-cancel">关闭</a>
	</div>
	
</body>
</html>