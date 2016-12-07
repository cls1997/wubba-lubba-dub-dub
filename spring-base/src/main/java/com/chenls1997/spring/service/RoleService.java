package com.chenls1997.spring.service;


import com.chenls1997.spring.mapper.RoleMapper;
import com.chenls1997.spring.model.Role;
import com.chenls1997.spring.util.UIUtils;
import com.zlzkj.core.mybatis.SqlRunner;
import com.zlzkj.core.sql.Row;
import com.zlzkj.core.sql.SQLBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@Transactional
public class RoleService {
	@Autowired
	private RoleMapper mapper;
	
	@Autowired
	private SqlRunner sqlRunner;
	
	
	public Integer delete(Integer id){
		return mapper.deleteByPrimaryKey(id);
	}
	
	public Integer update(Role entity) throws Exception{
		
		return mapper.updateByPrimaryKey(entity);
	}
	
	public Integer save(Role entity) throws Exception{
		
		return mapper.insert(entity);
	}
	
	
	public Role findById(Integer id){
		return mapper.selectByPrimaryKey(id);
	}
	
	
	public Map<String, Object> getUIGridData(Map<String, Object> where, Map<String, String> pageMap) {
		SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Role.class);
		String sql = sqlBuilder
				.fields("*")   //这里约定前端grid需要显示多少个具体列，也可以全部*
				.where(where)
				.parseUIPageAndOrder(pageMap)
				.order("id", "asc")
				.selectSql();
		List<Row> list = sqlRunner.select(sql);

		String countSql = sqlBuilder.fields("count(*)").where(where).selectSql();
		Integer count = sqlRunner.count(countSql);
		return UIUtils.getGridData(count, list);
	}
	
	public List<Row> getList(Map<String, Object> where) {
		SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Role.class);
		String sql = sqlBuilder
				.fields("id,name as text")   //这里约定前端grid需要显示多少个具体列，也可以全部*
//				.where("type = 0")
				.order("id", "asc")
				.selectSql();
		List<Row> list = sqlRunner.select(sql);
		System.out.println(where);
		return list;
	}
	
	public List<Row> getRoleLists(Map<String, Object> where) {
		SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Role.class);
		String sql = sqlBuilder
				.fields("id,name as text")   //这里约定前端grid需要显示多少个具体列，也可以全部*
//				.where("type > 0")
				.order("id", "asc")
				.selectSql();
		List<Row> list = sqlRunner.select(sql);
		return list;
	}
}
