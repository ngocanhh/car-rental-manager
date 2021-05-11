package com.myclass.controller.admin;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.myclass.dto.ResObject;
import com.myclass.dto.ResponseObjects;
import com.myclass.dto.UserDTO;
import com.myclass.service.UserService;

@RestController
@RequestMapping("api/admin/users")
public class AdminUserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("")
	public Object get() {
		try {
			ResponseObjects<UserDTO> responseUsers = new ResponseObjects<>();
			List<UserDTO> users = userService.getAll();
			responseUsers.setData(users);
			return new ResponseEntity<Object>(responseUsers, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/{id}")
	public Object get(@PathVariable("id") int id) {
		try {
			ResObject<UserDTO> res = new ResObject<>();
			UserDTO userDTO = userService.getById(id);
			res.setData(userDTO);
			return new ResponseEntity<Object>(res, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("")
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
	
	@PutMapping("")
	public Object put(@RequestBody UserDTO userDTO) {
		try {
			if(userService.update(userDTO)) {
				return new ResponseEntity<Object>(HttpStatus.OK);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
	@DeleteMapping("/{id}")
	public Object delete(@PathVariable("id") int id) {
		try {
			userService.delete(id);
			return new ResponseEntity<Object>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
}