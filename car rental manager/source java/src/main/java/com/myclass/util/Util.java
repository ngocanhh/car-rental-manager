package com.myclass.util;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class Util {
	
	public static UserDetails getPrincipal() {
		Object principal = SecurityContextHolder.getContext()
				.getAuthentication().getPrincipal();
		UserDetails userDetails = (UserDetails) principal;
		return userDetails;
	}
	
}
