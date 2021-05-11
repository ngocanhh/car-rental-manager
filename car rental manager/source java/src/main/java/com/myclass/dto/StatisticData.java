package com.myclass.dto;

public class StatisticData {
	
	private long quantityCustomer;
	private long totalCars;
	private long rentingCars;
	private long availableCars;
	
	public long getQuantityCustomer() {
		return quantityCustomer;
	}
	public void setQuantityCustomer(long quantityCustomer) {
		this.quantityCustomer = quantityCustomer;
	}
	public long getTotalCars() {
		return totalCars;
	}
	public void setTotalCars(long totalCars) {
		this.totalCars = totalCars;
	}
	public long getRentingCars() {
		return rentingCars;
	}
	public void setRentingCars(long rentingCars) {
		this.rentingCars = rentingCars;
	}
	public long getAvailableCars() {
		return availableCars;
	}
	public void setAvailableCars(long availableCars) {
		this.availableCars = availableCars;
	}
	
}