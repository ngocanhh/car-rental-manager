package com.myclass.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import com.myclass.dto.CarDTO;
import com.myclass.entity.Car;
import com.myclass.entity.User;
import com.myclass.repository.CarRepository;
import com.myclass.repository.UserRepository;
import com.myclass.service.CarService;
import com.myclass.util.Mapper;
import com.myclass.util.Util;

@Service
@Scope("prototype")
@Transactional(rollbackOn = Exception.class)
public class CarServiceImpl implements CarService {
	
	@Autowired
	private CarRepository carRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<CarDTO> getAll() {
		List<CarDTO> cars = new ArrayList<>();
		for(Car entity : carRepository.findAll()) {
			CarDTO carDTO = new CarDTO();
			carDTO = Mapper.mapObjects(entity, CarDTO.class);
			carDTO.setBrandName(entity.getBrand().getName());
			carDTO.setOwnerName(entity.getUser().getFullName());
			carDTO.setStatusName(entity.getStatus().getName());
			cars.add(carDTO);
		}
		return cars;
	}
	
	@Override
	public void save(CarDTO carDTO) {
		Car entity = Mapper.mapObjects(carDTO, Car.class);
		entity.setStatusId(1);
		entity.setPostDated(new Date(System.currentTimeMillis()));
		User user = userRepository.findByEmail(Util.getPrincipal().getUsername());
		entity.setOwnerId(user.getId());
		carRepository.save(entity);
	}
	
	@Override
	public CarDTO getById(int id) {
		Car entity = carRepository.findById(id).get();
		CarDTO carDTO = Mapper.mapObjects(entity, CarDTO.class);
		carDTO.setStatusName(entity.getStatus().getName());
		carDTO.setOwnerName(entity.getUser().getFullName());
		carDTO.setContactNumber(entity.getUser().getPhoneNumber());
		carDTO.setBrandName(entity.getBrand().getName());
		return carDTO;
	}

	@Override
	public void delete(int id) {
		carRepository.deleteById(id);
	}

	@Override
	public long countTotalCars() {
		return carRepository.count();
	}

	@Override
	public List<CarDTO> getByOwner() {
		User user = userRepository.findByEmail(Util.getPrincipal().getUsername());
		List<CarDTO> cars = new ArrayList<>();
		List<Car> entities = carRepository.getByOwnerId(user.getId());
		for(Car entity : entities) {
			CarDTO carDTO = new CarDTO();
			carDTO = Mapper.mapObjects(entity, CarDTO.class);
			carDTO.setBrandName(entity.getBrand().getName());
			carDTO.setOwnerName(entity.getUser().getFullName());
			carDTO.setStatusName(entity.getStatus().getName());
			cars.add(carDTO);
		}
		return cars;
	}

	@Override
	public List<CarDTO> getAvailableCar() {
		List<CarDTO> carDTOs = new ArrayList<>();
		String statusCode = "SS";
		List<Car> cars = carRepository.findAvailableCar(statusCode);
		for(Car car : cars) {
			CarDTO carDTO = Mapper.mapObjects(car, CarDTO.class);
			carDTO.setBrandName(car.getBrand().getName());
			carDTO.setOwnerName(car.getUser().getFullName());
			carDTO.setStatusName(car.getStatus().getName());
			carDTOs.add(carDTO);
		}
		return carDTOs;
	}

	@Override
	public long countAvailableCar() {
		String statusCode = "SS";
		return carRepository.countByStatusCode(statusCode);
	}

	@Override
	public long countRentingCar() {
		String statusCode = "DT";
		return carRepository.countByStatusCode(statusCode);
	}
}