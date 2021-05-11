package com.myclass.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.myclass.dto.DashboardDTO;
import com.myclass.dto.StatisticData;
import com.myclass.service.CarService;
import com.myclass.service.ChartService;
import com.myclass.service.UserService;

@RestController
@RequestMapping("api/admin/dashboard")
public class AdminDashboardController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private CarService carService;
	@Autowired
	private ChartService chartService;
	
	@GetMapping("")
	public Object dashboard() {
		try {
			DashboardDTO dashboardDTO = new DashboardDTO();
			StatisticData statisticData = new StatisticData();
			statisticData.setQuantityCustomer(userService.getQuantityCustomer());
			statisticData.setTotalCars(carService.countTotalCars());
			statisticData.setRentingCars(carService.countRentingCar());
			statisticData.setAvailableCars(carService.countAvailableCar());
			dashboardDTO.setStatisticData(statisticData);
			dashboardDTO.setLoyalCustomers(userService.getLoyalCustomer());
			dashboardDTO.setRentalChartData(chartService.getData());
			return new ResponseEntity<Object>(dashboardDTO, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
	
}