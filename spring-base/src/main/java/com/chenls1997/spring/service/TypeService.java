package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.TypeMapper;
import com.chenls1997.spring.model.Good;
import com.chenls1997.spring.model.Type;
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
 * 商品类型服务类
 * Created by Chenls on 16/11/25.
 */

@Service
@Transactional
public class TypeService {
    @Autowired
    private TypeMapper mapper;

    @Autowired
    private SqlRunner sqlRunner;

    public Integer delete(Integer id){
        return mapper.deleteByPrimaryKey(id);
    }

    public Integer update(Type entity){
        return (Integer) mapper.updateByPrimaryKey(entity);
    }

    public Integer update(String sql){
        return sqlRunner.update(sql);
    }

    public Integer save(Type entity){
        return mapper.insert(entity);
    }

    public Type findByID(Integer id){
        return (Type) mapper.selectByPrimaryKey(id);
    }

    public Map<String,Object> getUIGridData(Map<String,Object> where, Map<String,String> pageMap){
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Type.class);
        String sql = sqlBuilder.fields("*")
                .where(where)
                .parseUIPageAndOrder(pageMap)
                .order("id","asc")
                .selectSql();
        String countSql = sqlBuilder.fields("count(*)").where(where).selectSql();
        List<Row> list = sqlRunner.select(sql);
        Integer count = sqlRunner.count(countSql);
        return UIUtils.getGridData(count, list);
    }

    public boolean has(String name){
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Type.class);
        String where = "name=\'"+name+"\'";
        String countSql = sqlBuilder.fields("count(*)").where(where).selectSql();
        Integer count = sqlRunner.count(countSql);
        if (count==0){
            return false;
        } else {
            return true;
        }
    }

    public Integer getIdByName(String name){
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Type.class);
        String where = "name=\'"+name+"\'";
        String sql = sqlBuilder.fields("id").where(where).selectSql();
        List<Row> list = sqlRunner.select(sql);
        if (list.size()==0){
            return null;
        } else {
            return (Integer) list.get(0).get("id");
        }
    }

    public Integer newAndReturnId(String name){
        Type t = new Type();
        t.setName(name);
        this.save(t);
        return this.getIdByName(name);
    }
}
