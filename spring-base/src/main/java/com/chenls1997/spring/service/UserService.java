package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.UserMapper;
import com.chenls1997.spring.model.User;
import com.chenls1997.spring.util.UIUtils;
import com.zlzkj.core.mybatis.SqlRunner;
import com.zlzkj.core.sql.Row;
import com.zlzkj.core.sql.SQLBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        return mapper.insert(entity);
    }

    public User findByID(Integer id){
        return (User) mapper.selectByPrimaryKey(id);
    }

    public Integer getIdByUsername(String username){
        String where = "username=\'"+username+"\'";
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(User.class);
        String sql = sqlBuilder.fields("id").where(where).selectSql();

        List<Row> result = sqlRunner.select(sql);

        if (result.size()>0){
            return result.get(0).getInt("id");
        } else {
            return null;
        }
    }

    /**
     * 登录获取对象用
     * @param username
     * @param password
     * @return
     */
    public User LoginGetObj(String username,String password){
        HashMap<String, Object> where = new HashMap<String, Object>();
        where.put("username",username);
        where.put("password",password);
        SQLBuilder sb = SQLBuilder.getSQLBuilder(User.class);
        String sql = sb.fields("*")
                .where(where).selectSql();
        List<Row> list = sqlRunner.select(sql);
        if (list.size()>0)
            return this.findByID(list.get(0).getInt("id"));
        else
            return null;
    }

    public boolean forgetPassword(String username, String question, String result){
        User u = this.findByID(
                this.getIdByUsername(username)
                );

        if (question.equals(u.getQuestion()) && result.equals(u.getResult())){
            return true;
        }

        return false;
    }

    public Map<String,Object> getUIGridData(Map<String,Object> where, Map<String,String> pageMap){
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(User.class);
        String sql = sqlBuilder.fields("id,username,password,email,phone,question,result,address,reg_time")
                .where(where)
                .parseUIPageAndOrder(pageMap)
                .order("id","asc")
                .selectSql();
        String countSql = sqlBuilder.fields("count(*)").where(where).selectSql();
        List<Row> list = sqlRunner.select(sql);
        Integer count = sqlRunner.count(countSql);
        return UIUtils.getGridData(count, list);
    }

    public boolean check(String username){
        String where = "username=\'"+username+"\'";
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(User.class);
        String sql = sqlBuilder.fields("id").where(where).selectSql();

        List<Row> result = sqlRunner.select(sql);

        if (result.size()>0){
            return true;
        } else {
            return false;
        }
    }

}
