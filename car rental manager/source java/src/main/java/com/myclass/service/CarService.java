package com.myclass.service;

import java.util.List;
import com.myclass.dto.CarDTO;

public interface CarService {
	
	List<CarDTO> getAll();
	CarDTO getById(int id);
	void save(CarDTO carDTO);
	void delete(int id);
	long countTotalCars();
	long countAvailableCar();
	long countRentingCar();
	List<CarDTO> getAvailableCar();
	List<CarDTO> getByOwner();
	
}
