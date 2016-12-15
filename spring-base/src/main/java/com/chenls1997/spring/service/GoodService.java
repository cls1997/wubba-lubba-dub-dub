package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.GoodMapper;
import com.chenls1997.spring.model.Good;
import com.chenls1997.spring.util.UIUtils;
import com.zlzkj.core.mybatis.SqlRunner;
import com.zlzkj.core.sql.Row;
import com.zlzkj.core.sql.SQLBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

/**
 * Created by Chenls on 16/11/25.
 */

@Service
@Transactional
public class GoodService {
    @Autowired
    private GoodMapper mapper;

    @Autowired
    private SqlRunner sqlRunner;

    public Integer delete(Integer id){
        return mapper.deleteByPrimaryKey(id);
    }

    public Integer update(Good entity){
        return (Integer) mapper.updateByPrimaryKey(entity);
    }

    public Integer update(String sql){
        return sqlRunner.update(sql);
    }

    public Integer save(Good entity){
        return mapper.insert(entity);
    }

    public Good findByID(Integer id){
        return (Good) mapper.selectByPrimaryKey(id);
    }

    public Map<String,Object> getUIGridData(Map<String,Object> where, Map<String,String> pageMap,String fields){
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Good.class);
        String sql = sqlBuilder.fields(fields)
                .where(where)
                .parseUIPageAndOrder(pageMap)
                .order("id","asc")
                .selectSql();
        String countSql = sqlBuilder.fields("count(*)").where(where).selectSql();
        List<Row> list = sqlRunner.select(sql);
        Integer count = sqlRunner.count(countSql);
        return UIUtils.getGridData(count, list);
    }
}
