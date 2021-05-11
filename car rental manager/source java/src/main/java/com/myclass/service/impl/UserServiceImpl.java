package com.myclass.service.impl;

import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import com.myclass.dto.UserDTO;
import com.myclass.entity.User;
import com.myclass.repository.UserRepository;
import com.myclass.service.UserService;
import com.myclass.util.Mapper;
import com.myclass.util.Util;

@Service
@Scope("prototype")
@Transactional(rollbackOn = Exception.class)
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<UserDTO> getAll() {
		List<UserDTO> userDTOs = new ArrayList<>();
		List<User> entities = userRepository.findAll();
		for(User entity : entities) {
			UserDTO userDTO = new UserDTO();
			userDTO = Mapper.mapObjects(entity, UserDTO.class);
			userDTO.setPassword(null);
			userDTOs.add(userDTO);
		}
		return userDTOs;
	}
	
	@Override
	public UserDTO getProfile() {
		String email = Util.getPrincipal().getUsername();
		User user = userRepository.findByEmail(email);
		UserDTO userDTO = Mapper.mapObjects(user, UserDTO.class);
		userDTO.setPassword(null);
		return userDTO;
	}
	
	@Override
	public UserDTO getById(int id) {
		User entity = userRepository.findById(id).get();
		UserDTO userDTO = Mapper.mapObjects(entity, UserDTO.class);
		userDTO.setPassword(null);
		userDTO.setRoleName(entity.getRole().getDescription());
		return userDTO;
	}

	@Override
	public UserDTO getByEmail(String email) {
		User user = userRepository.findByEmail(email);
		UserDTO userDTO = Mapper.mapObjects(user, UserDTO.class);
		userDTO.setRoleName(user.getRole().getName());
		return userDTO;
	}
	
	@Override
	public boolean save(UserDTO userDTO) {
		User entity = userRepository.findByEmail(userDTO.getEmail());
		if(entity == null) {
			String hash = BCrypt.hashpw(userDTO.getPassword(), BCrypt.gensalt());
			entity = Mapper.mapObjects(userDTO, User.class);
			entity.setPassword(hash);
			userRepository.save(entity);
			return true;
		}
		return false;
	}
	
	@Override
	public boolean update(UserDTO userDTO) {
		User user = userRepository.findById(userDTO.getId()).get();
		boolean existsEmail = userRepository.existsByEmail(userDTO.getEmail());
		if((user != null) && !existsEmail) {
			user.setAddress(userDTO.getAddress());
			user.setEmail(userDTO.getEmail());
			user.setFullName(userDTO.getFullName());
			user.setGender(userDTO.getGender());
			user.setIdCard(userDTO.getIdCard());
			user.setPhoneNumber(userDTO.getPhoneNumber());
			user.setRoleId(userDTO.getRoleId());
			userRepository.save(user);
			return true;
		}
		return false;
	}

	@Override
	public void delete(int id) {
		userRepository.deleteById(id);
	}

	@Override
	public long getQuantityCustomer() {
		long quantityCustomer = userRepository.countByRoleId(2) + userRepository.countByRoleId(3);
		return quantityCustomer;
	}

	@Override
	public List<UserDTO> getLoyalCustomer() {
		List<UserDTO> userDTOs = new ArrayList<>();
		List<User> entities = userRepository.findAll();
		for(User entity : entities) {
			userDTOs.add(Mapper.mapObjects(entity, UserDTO.class));
		}
		return userDTOs;
	}

	@Override
	public boolean isCurrentUser(int id) {
		User currentUser = userRepository.findByEmail(Util.getPrincipal().getUsername());
		User userReq = userRepository.findById(id).get();
		if(currentUser.equals(userReq)) {
			return true;
		}
		return false;
	}

	@Override
	public boolean updateProfile(UserDTO userDTO) {
		User user = userRepository.findByEmail(userDTO.getEmail());
		if(user != null) {
			user.setFullName(userDTO.getFullName());
			user.setAddress(userDTO.getAddress());
			user.setIdCard(userDTO.getIdCard());
			user.setEmail(userDTO.getEmail());
			user.setPhoneNumber(userDTO.getPhoneNumber());
			user.setGender(userDTO.getGender());
			userRepository.save(user);
			return true;
		}
		return false;
	}
	
}