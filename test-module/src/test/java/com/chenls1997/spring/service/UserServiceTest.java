package com.chenls1997.spring.service;

import com.chenls1997.spring.model.User;
import com.zlzkj.core.base.BaseSpringTest;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

/**
 * UserService Tester.
 *
 * @author <Authors name>
 * @since <pre>ʮ���� 15, 2016</pre>
 * @version 1.0
 */
public class UserServiceTest extends BaseSpringTest{

    @Autowired
    private UserService userService;
    @Before
    public void before() throws Exception {
    }

    @After
    public void after() throws Exception {
    }

    /**
     *
     * Method: delete(Integer id)
     *
     */
    @Test
    public void testDelete() throws Exception {
//TODO: Test goes here...
    }

    /**
     *
     * Method: update(User entity)
     *
     */
    @Test
    public void testUpdateEntity() throws Exception {
//TODO: Test goes here...
    }

    /**
     *
     * Method: update(String sql)
     *
     */
    @Test
    public void testUpdateSql() throws Exception {
//TODO: Test goes here...
    }

    /**
     *
     * Method: save(User entity)
     *
     */
    @Test
    public void testSave() throws Exception {
        User u = new User();
        u.setPassword("123");
        u.setRegTime(new Date());
        u.setAddress("1");
        u.setEmail("1");
        u.setPhone("1");
        u.setQuestion("1");
        u.setResult("1");
        u.setUsername("123");

        System.out.println(userService.save(u));

        u.getId();
    }

    /**
     *
     * Method: findByID(Integer id)
     *
     */
    @Test
    public void testFindByID() throws Exception {
//TODO: Test goes here...
    }

    /**
     *
     * Method: LoginGetObj(String username, String password)
     *
     */
    @Test
    public void testLoginGetObj() throws Exception {
//TODO: Test goes here...
    }

    /**
     *
     * Method: getList()
     *
     */
    @Test
    public void testGetList() throws Exception {
//TODO: Test goes here...
    }


}
