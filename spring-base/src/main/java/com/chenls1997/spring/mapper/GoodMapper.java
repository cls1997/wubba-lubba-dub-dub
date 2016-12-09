package com.chenls1997.spring.mapper;

import com.chenls1997.spring.model.Good;
import org.springframework.stereotype.Component;

@Component
public interface GoodMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Good record);

    int insertSelective(Good record);

    Good selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Good record);

    int updateByPrimaryKey(Good record);
}