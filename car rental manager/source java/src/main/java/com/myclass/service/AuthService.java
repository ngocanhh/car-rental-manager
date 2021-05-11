package com.myclass.service;

import com.myclass.dto.LoginDTO;

public interface AuthService {
	
	String login(LoginDTO loginDTO);
	
}
