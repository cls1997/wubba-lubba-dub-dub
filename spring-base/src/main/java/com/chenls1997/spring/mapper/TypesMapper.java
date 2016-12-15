package com.chenls1997.spring.mapper;

import com.chenls1997.spring.model.Types;
import org.springframework.stereotype.Component;

@Component
public interface TypesMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Types record);

    int insertSelective(Types record);

    Types selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Types record);

    int updateByPrimaryKey(Types record);
}