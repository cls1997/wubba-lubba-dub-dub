package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.TypesMapper;
import com.chenls1997.spring.model.Types;
import com.zlzkj.core.mybatis.SqlRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Chenls on 16/11/25.
 */

@Service
@Transactional
public class TypeService {
    @Autowired
    private TypesMapper mapper;

    @Autowired
    private SqlRunner sqlRunner;

    public Integer delete(Integer id){
        return mapper.deleteByPrimaryKey(id);
    }

    public Integer update(Types entity){
        return (Integer) mapper.updateByPrimaryKey(entity);
    }

    public Integer update(String sql){
        return sqlRunner.update(sql);
    }

    public Integer save(Types entity){
        mapper.insert(entity);
        return entity.getId();
    }

    public Types findByID(Integer id){
        return (Types) mapper.selectByPrimaryKey(id);
    }

}
