package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.SubMapper;
import com.chenls1997.spring.model.Sub;
import com.zlzkj.core.mybatis.SqlRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Chenls on 16/11/25.
 */

@Service
@Transactional
public class SubService {
    @Autowired
    private SubMapper mapper;

    @Autowired
    private SqlRunner sqlRunner;

    public Integer delete(Long id){
        return mapper.deleteByPrimaryKey(id);
    }

    public Integer update(Sub entity){
        return (Integer) mapper.updateByPrimaryKey(entity);
    }

    public Integer update(String sql){
        return sqlRunner.update(sql);
    }

    public Long save(Sub entity){
        mapper.insert(entity);
        return entity.getSubid();
    }

    public Sub findByID(Long id){
        return (Sub) mapper.selectByPrimaryKey(id);
    }

}
