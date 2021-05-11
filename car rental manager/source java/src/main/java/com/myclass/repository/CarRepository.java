package com.myclass.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.myclass.entity.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {
	
	List<Car> getByOwnerId(int id);
	
	@Query("SELECT c FROM Car c, Status s WHERE c.statusId = s.id and s.code = ?1")
	List<Car> findAvailableCar(String statusCode);
	
	@Query(value = "SELECT COUNT(*) FROM CARS C, STATUS S WHERE C.STATUS_ID = S.ID AND CODE = ?1", 
			nativeQuery = true) // sử dụng native sql
	long countByStatusCode(String statusCode);
	
}
