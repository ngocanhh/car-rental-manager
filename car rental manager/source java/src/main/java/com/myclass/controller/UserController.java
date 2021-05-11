package com.myclass.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.myclass.dto.ResObject;
import com.myclass.dto.UserDTO;
import com.myclass.service.UserService;

@Controller
@RequestMapping("api/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("register")
	public Object post(@RequestBody UserDTO userDTO) {
		try {
			if(userService.save(userDTO)) {
				return new ResponseEntity<Object>(HttpStatus.CREATED); //HttpStatus = 201
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("profile")
	public Object get() {
		try {
			ResObject<UserDTO> res = new ResObject<>();
			UserDTO userDTO = userService.getProfile();
			res.setData(userDTO);
			res.setStatus("Ok");
			return new ResponseEntity<Object>(res, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
	@PutMapping("/profile/edit")
	public Object put(@RequestBody UserDTO userDTO) {
		try {
			if(userService.updateProfile(userDTO)) {
				ResObject<Object> res = new ResObject<>();
				res.setStatus("Ok");
				return new ResponseEntity<Object>(res, HttpStatus.OK);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}	
	
}