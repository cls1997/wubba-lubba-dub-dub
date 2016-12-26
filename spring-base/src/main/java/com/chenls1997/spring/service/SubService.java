package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.SubMapper;
import com.chenls1997.spring.model.Sub;
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
 * 订单服务类
 * Created by Chenls on 16/11/25.
 */

@Service
@Transactional
public class SubService {
    @Autowired
    private SubMapper mapper;

    @Autowired
    private SqlRunner sqlRunner;

    public Integer delete(Integer id){
        return mapper.deleteByPrimaryKey(id);
    }

    public Integer update(Sub entity){
        return (Integer) mapper.updateByPrimaryKey(entity);
    }

    public Integer update(String sql){
        return sqlRunner.update(sql);
    }

    public Integer save(Sub entity){
        return mapper.insert(entity);
    }

    public Sub findByID(Integer id){
        return (Sub) mapper.selectByPrimaryKey(id);
    }

    public List<Row> getSubsByUserid(Integer id){
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Sub.class);
        Map<String,Object> where = new HashMap<>();
        where.put("user_id",id);
        where.put("state",1);
        String sql = sqlBuilder
                .where(where)
                .fields("*")
                .order("ordered_time","asc")
                .selectSql();
        List<Row> list = sqlRunner.select(sql);
        return list;
    }

    public List<Row> getOutdatedSubsByUserid(Integer id){
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Sub.class);
        Map<String,Object> where = new HashMap<>();
        where.put("user_id",id);
        where.put("state",0);
        String sql = sqlBuilder
                .where(where)
                .fields("*")
                .order("ordered_time","asc")
                .selectSql();
        List<Row> list = sqlRunner.select(sql);
        return list;
    }

}
