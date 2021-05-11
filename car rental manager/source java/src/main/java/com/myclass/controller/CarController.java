package com.myclass.controller;

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
import com.myclass.dto.CarDTO;
import com.myclass.dto.ResMessage;
import com.myclass.dto.ResObject;
import com.myclass.dto.ResponseObjects;
import com.myclass.service.CarService;

@RestController
@RequestMapping("api/cars")
public class CarController {
	
	@Autowired
	private CarService carService;
	
	@GetMapping("")
	public Object get() {
		try {
			ResponseObjects<CarDTO> res = new ResponseObjects<>();
			List<CarDTO> cars = carService.getAvailableCar();
			res.setData(cars);
			return new ResponseEntity<Object>(res, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/{id}")
	public Object get(@PathVariable("id") int id) {
		try {
			ResObject<CarDTO> res = new ResObject<>();
			CarDTO carDTO = carService.getById(id);
			res.setData(carDTO);
			return new ResponseEntity<Object>(res, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/mycars")
	public Object getByOwner() {
		try {
			ResponseObjects<CarDTO> res = new ResponseObjects<>();
			List<CarDTO> cars = carService.getByOwner();
			res.setData(cars);
			return new ResponseEntity<Object>(res, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("/post")
	public Object post(@RequestBody CarDTO carDTO) {
		try {
			carService.save(carDTO);
			ResMessage resMessage = new ResMessage();
			String status = "Ok";
			resMessage.setData(status);
			return new ResponseEntity<Object>(resMessage, HttpStatus.CREATED); // 201
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
	@PutMapping("/edit")
	public Object put(@RequestBody CarDTO carDTO) {
		try {
			carService.save(carDTO);
			ResMessage resMessage = new ResMessage();
			String status = "Ok";
			resMessage.setData(status);
			return new ResponseEntity<Object>(resMessage, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
	}
	
	@DeleteMapping("/remove/{id}")
	public Object delete(@PathVariable("id") int id) {
		try {
			carService.delete(id);
			ResMessage resMessage = new ResMessage();
			String status = "Ok";
			resMessage.setData(status);
			return new ResponseEntity<Object>(resMessage, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Object>(HttpStatus.OK);
	}
}