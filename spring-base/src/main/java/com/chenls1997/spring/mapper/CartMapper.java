package com.chenls1997.spring.mapper;

import com.chenls1997.spring.model.Cart;
import org.springframework.stereotype.Component;

@Component
public interface CartMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Cart record);

    int insertSelective(Cart record);

    Cart selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Cart record);

    int updateByPrimaryKey(Cart record);
}