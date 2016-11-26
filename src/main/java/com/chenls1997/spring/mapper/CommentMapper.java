package com.chenls1997.spring.mapper;

import com.chenls1997.spring.model.Comment;
import org.springframework.stereotype.Component;

@Component
public interface CommentMapper {
    int deleteByPrimaryKey(Long commentid);

    int insert(Comment record);

    int insertSelective(Comment record);

    Comment selectByPrimaryKey(Long commentid);

    int updateByPrimaryKeySelective(Comment record);

    int updateByPrimaryKey(Comment record);
}