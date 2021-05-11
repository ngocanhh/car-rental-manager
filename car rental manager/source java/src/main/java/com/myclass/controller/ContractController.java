package com.myclass.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.myclass.dto.ResponseObjects;
import com.myclass.dto.UserCarDTO;
import com.myclass.service.UserCarService;

@RestController
@RequestMapping("/api/contracts")
public class ContractController {
	
	@Autowired
	private UserCarService userCarService;
	
	@GetMapping("mycontracts")
	public Object get() {
		try {
			ResponseObjects<UserCarDTO> res = new ResponseObjects<>();
			List<UserCarDTO> userCarDTOs = userCarService.getUserContracts();
			res.setData(userCarDTOs);
			return new ResponseEntity<Object>(res, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("")
	public Object post(@RequestBody UserCarDTO userCarDTO) {
		try {
			if(userCarService.save(userCarDTO)) {
				return new ResponseEntity<Object>(HttpStatus.CREATED);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
}