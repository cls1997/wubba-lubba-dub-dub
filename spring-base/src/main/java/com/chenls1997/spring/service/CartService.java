package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.CartMapper;
import com.chenls1997.spring.model.Cart;
import com.zlzkj.core.mybatis.SqlRunner;
import com.zlzkj.core.sql.Row;
import com.zlzkj.core.sql.SQLBuilder;
import org.apache.ibatis.jdbc.SQL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * 购物车服务类
 * Created by Chenls on 16/12/06.
 */
@Service
@Transactional
public class CartService {
    @Autowired
    private CartMapper mapper;

    @Autowired
    private SqlRunner sqlRunner;

    public Integer delete(Integer id){
        return mapper.deleteByPrimaryKey(id);
    }

    public Integer update(Cart entity){
        return (Integer) mapper.updateByPrimaryKey(entity);
    }

    public Integer update(String sql){
        return sqlRunner.update(sql);
    }

    public Integer save(Cart entity){
        return mapper.insert(entity);
    }

    public Cart findByID(Integer id){
        return (Cart) mapper.selectByPrimaryKey(id);
    }

    public Row rowFindByID(Integer id){
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Cart.class);
        String where = "id=" + id;
        String sql = sqlBuilder
                .fields("*")
                .where(where)
                .selectSql();
        List<Row> list = sqlRunner.select(sql);
        if (!list.isEmpty())
            return list.get(0);

        return null;
    }

    public List<Row> findByUserid(Integer id){
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Cart.class);
        String where = "user_id=" + id;
        String sql = sqlBuilder
                .fields("*")
                .where(where)
                .order("id","ASC")
                .selectSql();
        List<Row> lst = sqlRunner.select(sql);
        return lst;
    }
}
