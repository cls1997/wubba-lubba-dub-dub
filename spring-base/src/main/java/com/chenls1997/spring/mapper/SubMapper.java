package com.chenls1997.spring.mapper;

import com.chenls1997.spring.model.Sub;
import org.springframework.stereotype.Component;

@Component
public interface SubMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Sub record);

    int insertSelective(Sub record);

    Sub selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Sub record);

    int updateByPrimaryKey(Sub record);
}