package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.CommentMapper;
import com.chenls1997.spring.model.Comment;
import com.zlzkj.core.mybatis.SqlRunner;
import com.zlzkj.core.sql.Row;
import com.zlzkj.core.sql.SQLBuilder;
import org.apache.ibatis.jdbc.SQL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

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

    public Integer delete(Integer id){
        return mapper.deleteByPrimaryKey(id);
    }

    public Integer update(Comment entity){
        return (Integer) mapper.updateByPrimaryKey(entity);
    }

    public Integer update(String sql){
        return sqlRunner.update(sql);
    }

    public Integer save(Comment entity){
        mapper.insert(entity);
        return entity.getId();
    }

    public Comment findByID(Integer id){
        return (Comment) mapper.selectByPrimaryKey(id);
    }
    
    public HashMap<String, Object> getUIGridData(Map<String, Object> where, Map<String,String> pageMap) {
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Comment.class);
        String sql = sqlBuilder
                .fields("*")
                .where(where)
                .parseUIPageAndOrder(pageMap)
                .order("good_id","asc")
                .selectSql();
        List<Row> lst = sqlRunner.select(sql);
        // TODO: 16/12/09  
        return null;
    }

    public List<Row> getCommentListByGoodId(Integer gid){
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Comment.class);
        String where = "good_id=" + gid;
        String sql = sqlBuilder
                .where(where)
                .order("id","DESC")
                .selectSql();
        List<Row> lst = sqlRunner.select(sql);
        return lst;
    }
    // TODO: 16/12/09

}
