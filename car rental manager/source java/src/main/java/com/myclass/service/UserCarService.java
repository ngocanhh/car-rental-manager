package com.myclass.service;

import java.util.List;

import com.myclass.dto.UserCarDTO;

/*Tổng giá thuê = (số ngày * số tiền một ngày) + tiền giao xe tận nơi (nếu có) + chi phí phát sinh (hư hỏng...)*/
public interface UserCarService {
	
	boolean save(UserCarDTO userCarDTO);
	List<UserCarDTO> getContractsWaitingByOwnerId(int id);
	List<UserCarDTO> getUserContracts();
	
}
