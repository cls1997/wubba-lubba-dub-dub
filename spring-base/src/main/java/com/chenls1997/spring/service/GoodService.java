package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.GoodMapper;
import com.chenls1997.spring.model.Good;
import com.zlzkj.core.mybatis.SqlRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Chenls on 16/11/25.
 */

@Service
@Transactional
public class GoodService {
    @Autowired
    private GoodMapper mapper;

    @Autowired
    private SqlRunner sqlRunner;

    public Integer delete(Integer id){
        return mapper.deleteByPrimaryKey(id);
    }

    public Integer update(Good entity){
        return (Integer) mapper.updateByPrimaryKey(entity);
    }

    public Integer update(String sql){
        return sqlRunner.update(sql);
    }

    public Integer save(Good entity){
        mapper.insert(entity);
        return entity.getId();
    }

    public Good findByID(Integer id){
        return (Good) mapper.selectByPrimaryKey(id);
    }

    // TODO: 16/12/09
}
