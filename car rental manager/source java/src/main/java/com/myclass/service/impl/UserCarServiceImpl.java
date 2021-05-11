package com.myclass.service.impl;

import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import com.myclass.dto.UserCarDTO;
import com.myclass.entity.Car;
import com.myclass.entity.User;
import com.myclass.entity.UserCar;
import com.myclass.repository.CarRepository;
import com.myclass.repository.UserCarRepository;
import com.myclass.repository.UserRepository;
import com.myclass.service.UserCarService;
import com.myclass.util.Mapper;
import com.myclass.util.Util;

@Service
@Scope("prototype")
@Transactional(rollbackOn = Exception.class)
public class UserCarServiceImpl implements UserCarService {
	
	@Autowired
	private UserCarRepository userCarRepository;
	
	@Autowired
	private CarRepository carRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public boolean save(UserCarDTO userCarDTO) {
		User user = userRepository.findByEmail(userCarDTO.getEmail());
		long startDateMS = userCarDTO.getStartDate().getTime();
		long endDateMS = userCarDTO.getEndDate().getTime();
		if(endDateMS > startDateMS) {
			UserCar entity = Mapper.mapObjects(userCarDTO, UserCar.class);
			entity.setUserId(user.getId());
			entity.setStatus("waiting");
			userCarRepository.save(entity);
			return true;
		}
		return false;
	}

	@Override
	public List<UserCarDTO> getContractsWaitingByOwnerId(int id) {
		List<UserCarDTO> userCarDTOs = new ArrayList<>();
		List<UserCar> entities = userCarRepository.getContractsWaitingByOwnerId(id);
		for(UserCar entity : entities) {
			userCarDTOs.add(Mapper.mapObjects(entity, UserCarDTO.class));
		}
		return userCarDTOs;
	}

	@Override
	public List<UserCarDTO> getUserContracts() {
		User user = userRepository.findByEmail(Util.getPrincipal().getUsername());
		List<UserCarDTO> userCarDTOs = new ArrayList<>();
		List<UserCar> entities = userCarRepository.getByUserId(user.getId());
		for(UserCar entity : entities) {
			UserCarDTO userCarDTO = Mapper.mapObjects(entity, UserCarDTO.class);
			Car car = carRepository.findById(entity.getCarId()).get();
			userCarDTO.setVehicleName(car.getName());
			userCarDTO.setFuel(car.getFuel());
			userCarDTOs.add(userCarDTO);
		}
		return userCarDTOs;
	}
	
}