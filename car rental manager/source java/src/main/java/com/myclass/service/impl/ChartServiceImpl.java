package com.myclass.service.impl;

import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import com.myclass.dto.ChartData;
import com.myclass.service.ChartService;

@Service
@Scope("prototype")
@Transactional(rollbackOn = Exception.class)
public class ChartServiceImpl implements ChartService {

	@Override
	public ChartData getData() {
		ChartData chartData = new ChartData();
		List<Integer> years = new ArrayList<>();
		years.add(2010);
		years.add(2011);
		years.add(2012);
		years.add(2013);
		years.add(2014);
		years.add(2015);
		List<Integer> quantityCars = new ArrayList<>();
		quantityCars.add(200);
		quantityCars.add(350);
		quantityCars.add(150);
		quantityCars.add(210);
		quantityCars.add(280);
		quantityCars.add(320);
		chartData.setYears(years);
		chartData.setQuantityCars(quantityCars);
		return chartData;
	}

}