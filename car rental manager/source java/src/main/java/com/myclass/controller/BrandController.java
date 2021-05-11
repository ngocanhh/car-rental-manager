package com.myclass.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.myclass.dto.BrandDTO;
import com.myclass.dto.ResponseObjects;
import com.myclass.service.BrandService;

@RestController
@RequestMapping("api/brands")
public class BrandController {
	
	@Autowired
	private BrandService brandService;
	
	@GetMapping("")
	public Object get() {
		try {
			ResponseObjects<BrandDTO> res = new ResponseObjects<>();
			List<BrandDTO> brands = brandService.getAll();
			res.setData(brands);
			return new ResponseEntity<Object>(res, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
}
