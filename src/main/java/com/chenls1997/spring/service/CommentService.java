package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.CommentMapper;
import com.chenls1997.spring.model.Comment;
import com.zlzkj.core.mybatis.SqlRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Chenls on 16/11/25.
 */

@Service
@Transactional
public class CommentService {
    @Autowired
    private CommentMapper mapper;

    @Autowired
    private SqlRunner sqlRunner;

    public Integer delete(Long id){
        return mapper.deleteByPrimaryKey(id);
    }

    public Integer update(Comment entity){
        return (Integer) mapper.updateByPrimaryKey(entity);
    }

    public Integer update(String sql){
        return sqlRunner.update(sql);
    }

    public Long save(Comment entity){
        mapper.insert(entity);
        return entity.getCommentid();
    }

    public Comment findByID(Long id){
        return (Comment) mapper.selectByPrimaryKey(id);
    }

}
