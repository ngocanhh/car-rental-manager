package com.myclass.entity;

import java.io.Serializable;

public class UserCarPK implements Serializable{
	private static final long serialVersionUID = 1L;
	
	protected int userId;
	protected int carId;
	
	public UserCarPK() {}
	
	public UserCarPK(int userId, int carId) {
		this.userId = userId;
		this.carId = carId;
	}
	
}
