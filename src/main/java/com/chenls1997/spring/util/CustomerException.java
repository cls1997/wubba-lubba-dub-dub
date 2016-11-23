package com.chenls1997.spring.util;

/**
 * 
 * @author Administrator
 *
 */
public class CustomerException extends RuntimeException {

    private static final long serialVersionUID = -3491146776554220574L;
    
	public CustomerException() {
	}
	
	public CustomerException(String string) {
		super(string);
	}

}
