package com.myclass.dto;

import java.util.List;

public class ResponseObjects<T> {
	
	private List<T> data;

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}
	
}
