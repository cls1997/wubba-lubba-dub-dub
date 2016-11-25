package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.TypesMapper;
import com.chenls1997.spring.model.Good;
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
    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private TypesMapper mapper;

    @Autowired
    private SqlRunner sqlRunner;

    public Integer delete(Long id){
        return mapper.deleteByPrimaryKey(id);
    }

    public Integer update(Types entity){
        return (Integer) mapper.updateByPrimaryKey(entity);
    }

    public Integer update(String sql){
        return sqlRunner.update(sql);
    }

    public Long save(Types entity){
        mapper.insert(entity);
        return entity.getTypeid();
    }

    public Types findByID(Long id){
        return (Types) mapper.selectByPrimaryKey(id);
    }

}
