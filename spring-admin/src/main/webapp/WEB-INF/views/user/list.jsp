<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://zlzkj.com/tags" prefix="z" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%@include file="../public/resource.jsp" %>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>操作员管理</title>
	<script type="text/javascript">
		var ZLZ = window.ZLZ = {
			"ROOT"   : "${__root__}",
			"URL"    : "${__url__}",
			"STATIC" : "${__static__}"
		}
	</script>
<script>
	var url;

	function edit(){
		var selectedRows=$("#dg").datagrid('getSelections');
		if(selectedRows.length!=1){
			$.messager.alert("系统提示","请选择一条要编辑的数据！");
			return;
		}
		var row=selectedRows[0];
		$("#dlg").dialog("open").dialog("setTitle","编辑该角色");
		$("#fm").form("load",row);
		url="${z:u('admin/edit')}?id="+row.id;

	}
	function deleteUser(){
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
				$.post("${z:u('admin/delete')}",{delIds:ids},function(result){
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
	 pagination="true" rownumbers="true" url="${z:u('admin/list')}" fit="true" toolbar="#tb">
		<thead>
			<tr>
				<th field="id" checkbox="true">ID</th>
				<th field="username" width="100" align="center">用户名</th>
				<th field="password" width="100" align="center">密码</th>
				<th field="email" width="100" align="center">电邮</th>
				<th field="phone" width="100" align="center">电话</th>
				<th field="question" width="100" align="center">安全问题</th>
				<th field="result" width="100" align="center">安全问题答案</th>
				<th field="address" width="100" align="center">地址</th>
				<th field="regTime" width="100" align="center">注册时间</th>
			</tr>
		</thead>
	</table>
	
	<div id="tb">
		<div>
			<a href="javascript()" class="easyui-linkbutton" iconCls="icon-add" plain="true">添加</a>
			<a href="javascript()" class="easyui-linkbutton" iconCls="icon-edit" plain="true">修改</a>
			<a href="javascript:deleteUser()" class="easyui-linkbutton" iconCls="icon-remove" plain="true">删除</a>
		</div>
	</div>
	
	<div id="dlg" class="easyui-dialog" style="width: 570px;height: 300px;padding: 10px 20px"
		closed="true" buttons="#dlg-buttons">
		<form id="fm" method="post">
		    <!-- <input type="hidden" id="id1" name="id" value="??">  -->
			<table cellspacing="5px;">
				<tr>
					<td valign="top">账号：</td>
					<td><input type="text" name="account" id="account" class="easyui-validatebox" required="true"/></td>
				</tr>
				<tr>
					<td valign="top">密码：</td>
					<td><input type="text" name="password" id="password" class="easyui-validatebox" required="true"/></td>
				</tr>
				<tr>
					<td valign="top">角色：</td>
					<td><input type="text" name="roleId" id="roleId" class="easyui-validatebox" required="true"/></td>
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