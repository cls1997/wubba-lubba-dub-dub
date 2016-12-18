package com.chenls1997.spring.mapper;

import com.chenls1997.spring.model.Comment;
import org.springframework.stereotype.Component;

@Component
public interface CommentMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Comment record);

    int insertSelective(Comment record);

    Comment selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Comment record);

    int updateByPrimaryKey(Comment record);
}