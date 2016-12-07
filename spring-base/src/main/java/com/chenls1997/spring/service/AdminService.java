package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.AdminMapper;
import com.chenls1997.spring.model.Admin;
import com.chenls1997.spring.util.StringUtil;
import com.chenls1997.spring.util.UIUtils;
import com.zlzkj.core.mybatis.SqlRunner;
import com.zlzkj.core.sql.Row;
import com.zlzkj.core.sql.SQLBuilder;
import com.zlzkj.core.util.Fn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class AdminService {

	@Autowired
	private AdminMapper mapper;
	@Autowired
	private RoleService roleService;
	
	@Autowired
	private SqlRunner sqlRunner;
	
	public Integer delete(Integer id){
		return mapper.deleteByPrimaryKey(id);
	}
	
	public Integer update(Admin entity){
		return mapper.updateByPrimaryKey(entity);
	}
	
	
	public Integer update(String sql){
		return sqlRunner.update(sql);
	}
	
	public Integer save(Admin entity){ 
		mapper.insert(entity);
		return  (Integer)entity.getId();
	}
	
	
	public Admin findById(Integer id){
		return mapper.selectByPrimaryKey(id);
	}


	public Map<String, Object> getUIGridData(Map<String, Object> where, Map<String, String> pageMap) {
		SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Admin.class);
		String sql = sqlBuilder
				.fields("id,account,password,role_id as roleId")   //这里约定前端grid需要显示多少个具体列，也可以全部*
				.where(where)
				.parseUIPageAndOrder(pageMap)
				.order("id", "asc")
				.selectSql();
		List<Row> list = sqlRunner.select(sql);
		for (Row row : list) {
			if(row.getInt("roleId")!=0){
				row.put("roleName", roleService.findById(row.getInt("roleId")).getName());
			}
		}
		String countSql = sqlBuilder.fields("count(*)").where(where).selectSql();
		Integer count = sqlRunner.count(countSql);
		return UIUtils.getGridData(count, list);
	}
	
	/**
	 * 登陆获取对象
	 */
	public Admin LoginGetObj(String account, String password) {
		HashMap<String, Object> where = new HashMap<String, Object>();
		where.put("account", account);
		where.put("password", password);
		SQLBuilder sb = SQLBuilder.getSQLBuilder(Admin.class);
		String sql = sb.fields("*").where(where).selectSql();
		List<Row> lst = sqlRunner.select(sql);
		if (lst.size() > 0)
			return this.findById(lst.get(0).getInt("id"));
		else
			return null;
	}
	
	public Integer find(String account){
		SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Admin.class);
		String sql = sqlBuilder
				.fields("*")   //这里约定前端grid需要显示多少个具体列，也可以全部*
				.where("account ='"+account+"'")
				.order("id", "asc")
				.selectSql();
		List<Row> list = sqlRunner.select(sql);
		Integer id = 0;
		for (Row row : list){
			id = row.getInt("id");
		}
		return id;
	}
	
	/**
	 * detail
	 * 查看详情
	 */
	public Map<String, Object> getDetailUIGridData(Integer id){
		SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Admin.class);
		HashMap<String, Object> where = new HashMap<String, Object>();
		where.put("id", id);
		String sql = sqlBuilder
				.fields("*")   
				.where(where)
				.selectSql();
		List<Row> list = sqlRunner.select(sql);
		for (Row row : list) {
			row.put("addTime", Fn.date(row.getInt("addTime")));
			row.put("roleName", roleService.findById(row.getInt("roleId")).getName());
		}
		String[] nameArray = {"账号","姓名","添加时间","手机号码","角色名称","所属停车场","是否启用"};
		String[] valueArray = {"account","name","addTime","Phone","roleName","parkName","isActive"};
		List<Map<String, Object>> list2 = new ArrayList<Map<String,Object>>();
		for(int i = 0; i < valueArray.length; i++){
			Row map = new Row();
			map.put("name", nameArray[i]);
			if(!StringUtil.isEmpty(list.get(0).get(valueArray[i]))){
				map.put("value", list.get(0).get(valueArray[i]));
			}else{
				map.put("value", "无");
			}
			list2.add(map);
		}
		return UIUtils.getGridData(list2.size(),list2);
	}
	/**
	 * 通过账号获取管理员
	 */
	public Admin getObjByAccount(String account){
		SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Admin.class);
		String sql = sqlBuilder
				.fields("*")   //这里约定前端grid需要显示多少个具体列，也可以全部*
				.where("account = '"+account+"'")
				.selectSql();
		List<Row> list = sqlRunner.select(sql);
		Admin admin = this.findById(list.get(0).getInt("id"));
		return admin;
	}
}

