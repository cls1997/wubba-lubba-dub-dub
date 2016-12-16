package com.chenls1997.spring.mapper;

import com.chenls1997.spring.model.RoleNode;

public interface RoleNodeMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(RoleNode record);

    int insertSelective(RoleNode record);

    RoleNode selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(RoleNode record);

    int updateByPrimaryKey(RoleNode record);
}