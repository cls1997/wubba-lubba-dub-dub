package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.CartMapper;
import com.chenls1997.spring.model.Cart;
import com.zlzkj.core.mybatis.SqlRunner;
import com.zlzkj.core.sql.Row;
import com.zlzkj.core.sql.SQLBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
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
        mapper.insert(entity);
        return entity.getId();
    }

    public Cart findByID(Integer id){
        return (Cart) mapper.selectByPrimaryKey(id);
    }

    public List<Row> findByUserid(Integer id){
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Cart.class);
        String where = "user_id=" + id;
        String sql = sqlBuilder
                .fields("*")
                .where(where)
                .order("id","DESC")
                .selectSql();
        List<Row> lst = sqlRunner.select(sql);
        return lst;
    }

    public List<Integer> deleteByUserid(Integer id){
        List<Integer> ret = new ArrayList<>();
        List<Row> lst = this.findByUserid(id);
        for (Row r : lst) {
            ret.add(this.delete(r.getInt(id)));
        }
        return ret;
    }

    // TODO: 16/12/09  
}
