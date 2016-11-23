<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://zlzkj.com/tags" prefix="z" %>

头像 ${admin.headImage } <img src="${admin.headImage }" />

        <form enctype="multipart/form-data" method="post" id="upload_form" action="${z:u('admin/set_head_save') }">
            <p class="select-img">
                <input type="hidden" name="id" value="1">
                <label for="file_data" id="file_data_btn" class="butn small-butn">
                    <i></i>
                    从电脑中选择<input type="file" name="file_data" id="file_data">
                </label>
            </p>
           标题： <input type="text" name="title"/>
          年龄：  <input type="text" name="age"/>
           <input type="submit" value="submit">
        </form>
   