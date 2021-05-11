package com.myclass.dto;

import java.util.List;

public class DashboardDTO {
	
	private StatisticData statisticData;
	private List<UserDTO> loyalCustomers;
	private ChartData rentalChartData;

	public List<UserDTO> getLoyalCustomers() {
		return loyalCustomers;
	}

	public void setLoyalCustomers(List<UserDTO> loyalCustomers) {
		this.loyalCustomers = loyalCustomers;
	}

	public StatisticData getStatisticData() {
		return statisticData;
	}

	public void setStatisticData(StatisticData statisticData) {
		this.statisticData = statisticData;
	}

	public ChartData getRentalChartData() {
		return rentalChartData;
	}

	public void setRentalChartData(ChartData rentalChartData) {
		this.rentalChartData = rentalChartData;
	}
	
}
