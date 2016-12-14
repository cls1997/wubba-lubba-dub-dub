package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.UserMapper;
import com.chenls1997.spring.model.User;
import com.zlzkj.core.mybatis.SqlRunner;
import com.zlzkj.core.sql.Row;
import com.zlzkj.core.sql.SQLBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

/**
 * 用户服务类
 * Created by Chenls on 16/11/23.
 */

@Service
@Transactional
public class UserService {
    @Autowired
    private UserMapper mapper;

    @Autowired
    private SqlRunner sqlRunner;

    public Integer delete(Integer id){
        return mapper.deleteByPrimaryKey(id);
    }

    public Integer update(User entity){
        return (Integer) mapper.updateByPrimaryKey(entity);
    }

    public Integer update(String sql){
        return sqlRunner.update(sql);
    }

    public Integer save(User entity){
        mapper.insert(entity);
        return entity.getId();
    }

    public User findByID(Integer id){
        return (User) mapper.selectByPrimaryKey(id);
    }

    /**
     * 登录获取对象用
     * @param username
     * @param password
     * @return
     */
    public User LoginGetObj(String username,String password){
        HashMap<String, Object> where = new HashMap<String, Object>();
        where.put("Username",username);
        where.put("UserPassword",password);
        SQLBuilder sb = SQLBuilder.getSQLBuilder(User.class);
        String sql = sb.fields("Userid, Username, UserPassword, Email, Phone, Question, Result, Address, RegTime")
                .where(where).selectSql();
        List<Row> list = sqlRunner.select(sql);
        if (list.size()>0)
            return this.findByID(list.get(0).getInt("Userid"));
        else
            return null;
    }

    public List<Row> getList(){
        String sql = "";
        List<Row> lst = sqlRunner.select(sql);
        return null;
    }
}
