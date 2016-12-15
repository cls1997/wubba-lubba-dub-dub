package com.chenls1997.spring.service;

import com.chenls1997.spring.mapper.TypesMapper;
import com.chenls1997.spring.model.Types;
import com.zlzkj.core.mybatis.SqlRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 商品类型服务类
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
        return mapper.insert(entity);
    }

    public Types findByID(Integer id){
        return (Types) mapper.selectByPrimaryKey(id);
    }

    // TODO: 16/12/09
}
