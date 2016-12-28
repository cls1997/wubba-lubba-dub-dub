package com.chenls1997.spring.annotation;

import com.chenls1997.spring.utils.LoginType;

import java.lang.annotation.*;

/**
 * Created by Chenls on 16/12/28.
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Login {
    LoginType value() default LoginType.page;
}