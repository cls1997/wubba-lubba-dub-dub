package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.CartMapper;
import com.chenls1997.spring.model.Cart;
import com.zlzkj.core.mybatis.SqlRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}
