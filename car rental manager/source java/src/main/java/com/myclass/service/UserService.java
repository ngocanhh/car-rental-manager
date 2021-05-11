package com.myclass.service;

import java.util.List;
import com.myclass.dto.UserDTO;

public interface UserService {
	
	List<UserDTO> getAll();
	UserDTO getById(int id);
	UserDTO getProfile();
	List<UserDTO> getLoyalCustomer();
	long getQuantityCustomer();
	boolean save(UserDTO userDTO);
	void delete(int id);
	boolean update(UserDTO userDTO);
	UserDTO getByEmail(String email);
	boolean isCurrentUser(int id);
	boolean updateProfile(UserDTO userDTO);
}
