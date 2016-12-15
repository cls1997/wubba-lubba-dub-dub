package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.CommentMapper;
import com.chenls1997.spring.model.Comment;
import com.chenls1997.spring.util.UIUtils;
import com.zlzkj.core.mybatis.SqlRunner;
import com.zlzkj.core.sql.Row;
import com.zlzkj.core.sql.SQLBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

/**
 * 评论服务类
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

        return mapper.insert(entity);
    }

    public Comment findByID(Integer id){
        return (Comment) mapper.selectByPrimaryKey(id);
    }
    
    public Map<String, Object> getUIGridData(Map<String, Object> where, Map<String,String> pageMap) {
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Comment.class);
        String sql = sqlBuilder
                .fields("*")
                .where(where)
                .parseUIPageAndOrder(pageMap)
                .order("good_id","asc")
                .selectSql();
        String countSql = sqlBuilder.fields("count(*)").where(where).selectSql();
        List<Row> list = sqlRunner.select(sql);
        Integer count = sqlRunner.count(countSql);
        return UIUtils.getGridData(count,list);
    }

    public List<Row> getCommentListByGoodId(Integer gid){
        SQLBuilder sqlBuilder = SQLBuilder.getSQLBuilder(Comment.class);
        String where = "good_id=" + gid;
        String sql = sqlBuilder
                .where(where)
                .order("id","DESC")
                .selectSql();
        List<Row> list = sqlRunner.select(sql);
        return list;
    }
}
