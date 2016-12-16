<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://zlzkj.com/tags" prefix="z" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<%@include file="../public/resource.jsp" %>
	<script type="text/javascript" src="${__static__}/js/ux/main/main.js"></script>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>商品管理</title>
	<script type="text/javascript">
		var ZLZ = window.ZLZ = {
			"ROOT"   : "${__root__}",
			"URL"    : "${__url__}",
			"STATIC" : "${__static__}"
		}
	</script>
</head>
<body style="margin: 5px;">
	<table id="dg" title="" class="easyui-datagrid" fitColumns="true"
	 pagination="true" rownumbers="true" url="${z:u('admin/good/list')}" fit="true" toolbar="#tb">
		<thead>
			<tr>
				<!-- "id,good_name,good_type_id,good_type_name,good_sold,good_stock,good_intro" -->
				<th field="id" checkbox="true">ID</th>
				<th field="goodName" width="100" align="center">商品名</th>
				<th field="goodTypeId" width="100" align="center">商品类ID</th>
				<th field="goodTypeName" width="100" align="center">商品类名</th>
				<th field="goodSold" width="100" align="center">出售量</th>
				<th field="goodStock" width="100" align="center">库存量</th>
				<th field="goodIntro" width="100" align="center">商品介绍</th>
			</tr>
		</thead>
	</table>
	
	<div id="tb">
		<div>
			<a id="btn_add" class="easyui-linkbutton" iconCls="icon-add" plain="true">添加</a>
			<a id="btn_edit" class="easyui-linkbutton" iconCls="icon-edit" plain="true">修改</a>
			<a id="btn_delete" class="easyui-linkbutton" iconCls="icon-remove" plain="true">删除</a>
		</div>
	</div>
	<script>
		var url;

		$("#btn_add").click(function(){
			url = "${z:u('admin/good/add')}";

			var x = ("商品添加",url);
		});

		$("#btn_edit").click(function openEditGoodPage() {
			var selectedRows=$("#dg").datagrid('getSelections');
			if(selectedRows.length!=1){
				$.messager.alert("系统提示","请选择一条要编辑的数据！");
				return;
			}
			var row=selectedRows[0];

			url="${z:u('admin/good/edit')}?id="+row.id;

			var x = ("商品修改",url);
		});

		$("#btn_delete").click(function deleteGood(){
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
					$.post("${z:u('admin/good/delete')}",{delIds:ids},function(result){
						if(result.status>0){
							$.messager.alert("系统提示","您已成功删除<font color=red>"+result.data+"</font>条数据！");
							$("#dg").datagrid("reload");
						}else{
							$.messager.alert('系统提示',result.info);
						}
					},"json");
				}
			});
		});

	</script>
</body>
</html>