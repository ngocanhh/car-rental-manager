package com.myclass.service.impl;

import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import com.myclass.dto.LoginDTO;
import com.myclass.service.AuthService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Override
	public String login(LoginDTO loginDTO) {
		Authentication authentication = 
				new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword());
		authenticationManager.authenticate(authentication);
		// Có thể set authentication vào context ở đây luôn
		Date nowDate = new Date();
		String token = Jwts.builder()
				.setSubject(loginDTO.getEmail())
				.setIssuedAt(nowDate)
				.setExpiration(new Date(nowDate.getTime() + 864000000L))
				.signWith(SignatureAlgorithm.HS512, "17520253")
				.compact();
		return token;
	}
	
}