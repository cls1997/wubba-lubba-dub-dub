package com.chenls1997.spring.service;

import com.chenls1997.spring.model.User;
import com.zlzkj.core.base.BaseSpringTest;
import org.junit.Before;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

/**
 * Created by Chenls on 16/12/12.
 */
@SuppressWarnings("SpringJavaAutowiringInspection")
public class UserServiceTest extends BaseSpringTest {
    @Autowired
    private UserService userService;

    @Before
    public static void init(){
    }
}
