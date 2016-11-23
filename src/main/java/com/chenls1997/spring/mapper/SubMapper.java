package com.chenls1997.spring.mapper;

import com.chenls1997.spring.model.Sub;

public interface SubMapper {
    int deleteByPrimaryKey(String subid);

    int insert(Sub record);

    int insertSelective(Sub record);

    Sub selectByPrimaryKey(String subid);

    int updateByPrimaryKeySelective(Sub record);

    int updateByPrimaryKey(Sub record);
}