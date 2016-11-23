package com.chenls1997.spring.mapper;

import com.chenls1997.spring.model.Types;

public interface TypesMapper {
    int deleteByPrimaryKey(Long typeid);

    int insert(Types record);

    int insertSelective(Types record);

    Types selectByPrimaryKey(Long typeid);

    int updateByPrimaryKeySelective(Types record);

    int updateByPrimaryKey(Types record);
}