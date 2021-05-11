package com.myclass.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.myclass.entity.UserCar;
import com.myclass.entity.UserCarPK;

@Repository
public interface UserCarRepository extends JpaRepository<UserCar, UserCarPK>{
	
	@Query("SELECT uc FROM UserCar uc, Car c, User u WHERE uc.carId = c.id "
			+ "AND c.ownerId = u.id AND uc.status = 'waiting'")
	List<UserCar> getContractsWaitingByOwnerId(int id);
	
	List<UserCar> getByUserId(int userId);
	
}
