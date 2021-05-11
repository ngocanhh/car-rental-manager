package com.myclass.dto;

import java.util.List;

public class ChartData {
	
	private List<Integer> years;
	private List<Integer> quantityCars;
	
	public List<Integer> getYears() {
		return years;
	}
	public void setYears(List<Integer> years) {
		this.years = years;
	}
	public List<Integer> getQuantityCars() {
		return quantityCars;
	}
	public void setQuantityCars(List<Integer> quantityCars) {
		this.quantityCars = quantityCars;
	}
	
}
