package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.RoleNodeMapper;
import com.chenls1997.spring.model.RoleNode;
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
public class RoleNodeService {
	@Autowired
	private RoleNodeMapper mapper;
	
	@Autowired
	private SqlRunner sqlRunner;
	
	@Autowired
	private ActionNodeService actionNodeService;
	
	public Integer delete(Integer id){
		return mapper.deleteByPrimaryKey(id);
	}
	
	public Integer update(RoleNode entity) throws Exception{
		
		return mapper.updateByPrimaryKey(entity);
	}
	
	public Integer save(RoleNode entity) throws Exception{
		
		return mapper.insert(entity);
	}
	
	public RoleNode findById(Integer id){
		return mapper.selectByPrimaryKey(id);
	}
	
	
	public Map<String, Object> getUIGridData(Map<String, Object> where, Map<String, String> pageMap) {
		SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(RoleNode.class);
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
	
	public boolean findByRoleId(Integer roleId, Integer nodeId) {
		SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(RoleNode.class);
		String sql = sqlBuilder
				.fields("*")
				.where("role_id="+roleId)
				.where("node_id="+nodeId)
				.selectSql();
		return sqlRunner.select(sql).isEmpty();
	}
	
//	public List<Row> findByRole(Integer roleId){
//		SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(RoleNode.class);
//		String sql = sqlBuilder
//				.fields("*")   //这里约定前端grid需要显示多少个具体列，也可以全部*
//				.where("role_id = "+roleId)
//				.order("id", "asc")
//				.selectSql();
//		List<Row> list = sqlRunner.select(sql);
//		for(Row row : list){
//			ActionNode actionNode = actionNodeService.findById(Integer.valueOf(row.get("nodeId").toString()));
//			row.put("url", actionNode.getUrl());
//		}
//		return list;
//	}
}
