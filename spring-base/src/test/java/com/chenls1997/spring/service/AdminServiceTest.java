package com.chenls1997.spring.service;

import com.chenls1997.spring.model.Admin;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSON;
import com.chenls1997.spring.util.CustomerException;
import com.zlzkj.core.base.BaseSpringTest;
import com.zlzkj.core.mybatis.SqlRunner;
import com.zlzkj.core.sql.Row;
import com.zlzkj.core.sql.SQLBuilder;

import java.util.List;


public class AdminServiceTest extends BaseSpringTest{

	protected Log logger = LogFactory.getLog(AdminServiceTest.class);
	
	@Autowired
	private AdminService adminService;
	@Autowired
	private RoleService roleService;
	
	@Autowired
	private SqlRunner sqlRunner;

	
	@Before
	public void init(){}
	
	
	//测试：增加对象
	@Test
	public void testAddAdmin() throws Exception {
		try{
			
			Admin admin = new Admin();
			admin.setAccount("a123456");

			try {
				adminService.save(admin);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				System.out.println(e.getLocalizedMessage());
			}
			int newId = admin.getId();
			logger.info("@crud.add >>>> new insert id:"+newId);
//			Assert.assertTrue(newId>0);
		}catch (CustomerException e)
		{
			System.out.println(e.getMessage());
		}
	}

	
	//测试：更新对象
	@Test
	public void testUpdateAdmin() throws Exception {
		try{
			Admin admin = adminService.findById(105);
			
	
			 int temp = adminService.update(admin);
			
			admin = adminService.findById(admin.getId());
			Assert.assertTrue(1==temp);
		}catch (CustomerException e)
		{
			System.out.println(e.getMessage());
		}
	}

	
	//测试：按id删除对象
	@Test
	public void testDeleteAdmin() throws Exception {
		try{
			//删除
			Integer id = 105;
			int affected = adminService.delete(id);
			Assert.assertTrue(affected==1);
		}catch (CustomerException e)
		{
			System.out.println(e.getMessage());
		}
	}

	
	//测试：按id获取对象
	@Test
	public void testGetAdminByKey() throws Exception {
		try{
			//查找
			Integer id = 104;
			Admin admin = adminService.findById(id);
			logger.info("@crud.find >>>> "+JSON.toJSONString(admin));
			Assert.assertTrue(id==admin.getId());
		}catch (CustomerException e)
		{
			System.out.println(e.getMessage());
		}
	}

	
	/**
	 * 测试获取Row
	 */
	@Test
	public void select(){
		String where = "car_park_id is not null";
		SQLBuilder sb = SQLBuilder.getSQLBuilder(Admin.class);
		String sql = sb.fields("*").where(where).selectSql();
		List<Row> list = sqlRunner.select(sql);
		
		for(Row r:list){
			logger.info("@select >>>> admins:"+JSON.toJSONString(r));
		}
		
//		Assert.assertTrue(list.size()>0);
	}
	
	@Test
	public void find(){
		
		SQLBuilder sb = SQLBuilder.getSQLBuilder(Admin.class);
		String sql = sb.fields("*").where("id=#{0}").selectSql();
		Row row = sqlRunner.find(sql, 1);
		
		logger.info("@find >>>> admin:"+JSON.toJSONString(row));
		
		Assert.assertTrue(row.getInt("id")==1);
		
	}
	
	@Test
	public void count(){
		SQLBuilder sb = SQLBuilder.getSQLBuilder(Admin.class);
		String sql = sb.fields("count(*)").selectSql();
		int count = sqlRunner.count(sql);
		
		logger.info("@count >>>> count:"+count);
		
		Assert.assertTrue(count>0);
		
	}
	
	@Test
	public void test(){
		String json = JSON.toJSONString(roleService.getUIGridData(null, null));
		System.out.println(json);
		
	}

}
