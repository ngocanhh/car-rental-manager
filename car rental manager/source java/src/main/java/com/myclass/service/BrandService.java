package com.myclass.service;

import java.util.List;
import com.myclass.dto.BrandDTO;

public interface BrandService {

	List<BrandDTO> getAll();
	BrandDTO getById(int id);
	void save(BrandDTO brandDTO);
	void delete(int id);
}