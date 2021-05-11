package com.myclass.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.myclass.dto.Data;
import com.myclass.dto.LoginDTO;
import com.myclass.dto.ResponseDTO;
import com.myclass.dto.UserDTO;
import com.myclass.service.AuthService;
import com.myclass.service.UserService;

@RestController
@RequestMapping("api/login")
public class AuthController {
	
	@Autowired
	private AuthService authService;
	@Autowired
	private UserService userService;
	
	@PostMapping("")
	public Object login(@RequestBody LoginDTO loginDTO) {
		try {
			String token = authService.login(loginDTO);
			ResponseDTO responseDTO = new ResponseDTO();
			responseDTO.setMessage("success");
			responseDTO.setStatusCode(200);
			UserDTO user = userService.getByEmail(loginDTO.getEmail());
			Data data = new Data();
			data.setAccess_token(token);
			data.setToken_type("Bearer");
			data.setExpires_in("1d");
			data.setUsername(user.getFullName());
			data.setRoleName(user.getRoleName());
			responseDTO.setData(data);
			return new ResponseEntity<Object>(responseDTO, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>("User not exsist", HttpStatus.BAD_REQUEST);
	}
	
}