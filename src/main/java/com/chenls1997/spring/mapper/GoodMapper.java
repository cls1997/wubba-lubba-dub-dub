package com.chenls1997.spring.mapper;

import com.chenls1997.spring.model.Good;

public interface GoodMapper {
    int deleteByPrimaryKey(Long gid);

    int insert(Good record);

    int insertSelective(Good record);

    Good selectByPrimaryKey(Long gid);

    int updateByPrimaryKeySelective(Good record);

    int updateByPrimaryKey(Good record);
}