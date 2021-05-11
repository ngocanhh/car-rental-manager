package com.myclass.entity;

import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "cars")
public class Car {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "owner_id")
	private int ownerId;
	@Column(name = "name")
	private String name;
	@Column(name = "fuel")
	private String fuel;
	@Column(name = "car_number_plate")
	private String carNumberPlate;
	@Column(name = "status_id")
	private int statusId;
	@Column(name = "rent_cost")
	private float rentCost;
	@Column(name = "post_dated")
	private Date postDated;
	@Column(name = "location")
	private String location;
	@Column(name = "brand_id")
	private int brandId;
	@Lob
	@Column(name = "image")
	private String image;
	
	@ManyToOne
	@JoinColumn(name = "owner_id", insertable = false, updatable = false)
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "brand_id", insertable = false, updatable = false)
	private Brand brand;
	
	@ManyToOne
	@JoinColumn(name = "status_id", insertable = false, updatable = false)
	private Status status;
	
	@OneToMany(mappedBy = "car", fetch = FetchType.LAZY)
	private List<UserCar> userCars;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCarNumberPlate() {
		return carNumberPlate;
	}
	public void setCarNumberPlate(String carNumberPlate) {
		this.carNumberPlate = carNumberPlate;
	}
	public int getStatusId() {
		return statusId;
	}
	public void setStatusId(int statusId) {
		this.statusId = statusId;
	}
	public float getRentCost() {
		return rentCost;
	}
	public void setRentCost(float rentCost) {
		this.rentCost = rentCost;
	}
	public Date getPostDated() {
		return postDated;
	}
	public void setPostDated(Date postDated) {
		this.postDated = postDated;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public int getBrandId() {
		return brandId;
	}
	public void setBrandId(int brandId) {
		this.brandId = brandId;
	}
	public Brand getBrand() {
		return brand;
	}
	public void setBrand(Brand brand) {
		this.brand = brand;
	}
	public List<UserCar> getUserCars() {
		return userCars;
	}
	public void setUserCars(List<UserCar> userCars) {
		this.userCars = userCars;
	}
	public int getOwnerId() {
		return ownerId;
	}
	public void setOwnerId(int ownerId) {
		this.ownerId = ownerId;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getFuel() {
		return fuel;
	}
	public void setFuel(String fuel) {
		this.fuel = fuel;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
}