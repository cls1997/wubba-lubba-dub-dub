package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.SubMapper;
import com.chenls1997.spring.model.Sub;
import com.zlzkj.core.mybatis.SqlRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 订单服务类
 * Created by Chenls on 16/11/25.
 */

@Service
@Transactional
public class SubService {
    @Autowired
    private SubMapper mapper;

    @Autowired
    private SqlRunner sqlRunner;

    public Integer delete(Integer id){
        return mapper.deleteByPrimaryKey(id);
    }

    public Integer update(Sub entity){
        return (Integer) mapper.updateByPrimaryKey(entity);
    }

    public Integer update(String sql){
        return sqlRunner.update(sql);
    }

    public Integer save(Sub entity){
        return mapper.insert(entity);
    }

    public Sub findByID(Integer id){
        return (Sub) mapper.selectByPrimaryKey(id);
    }

    // TODO: 16/12/09

}
