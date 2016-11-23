package com.chenls1997.spring.mapper;

import com.chenls1997.spring.model.Cart;

public interface CartMapper {
    int deleteByPrimaryKey(Long carid);

    int insert(Cart record);

    int insertSelective(Cart record);

    Cart selectByPrimaryKey(Long carid);

    int updateByPrimaryKeySelective(Cart record);

    int updateByPrimaryKey(Cart record);
}