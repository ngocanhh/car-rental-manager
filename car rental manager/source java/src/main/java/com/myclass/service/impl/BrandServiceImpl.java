package com.myclass.service.impl;

import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import com.myclass.dto.BrandDTO;
import com.myclass.entity.Brand;
import com.myclass.repository.BrandRepository;
import com.myclass.service.BrandService;
import com.myclass.util.Mapper;

@Service
@Scope("prototype")
@Transactional(rollbackOn = Exception.class)
public class BrandServiceImpl implements BrandService {
	
	@Autowired
	private BrandRepository brandRepository;
	
	@Override
	public List<BrandDTO> getAll() {
		List<BrandDTO> brands = new ArrayList<>();
		List<Brand> entities = brandRepository.findAll();
		for(Brand entity : entities) {
			brands.add(Mapper.mapObjects(entity, BrandDTO.class));
		}
		return brands;
	}
	
	@Override
	public BrandDTO getById(int id) {
		Brand entity = brandRepository.findById(id).get();
		BrandDTO brandDTO = Mapper.mapObjects(entity, BrandDTO.class);
		return brandDTO;
	}

	@Override
	public void save(BrandDTO brandDTO) {
		Brand entity = Mapper.mapObjects(brandDTO, Brand.class);
		brandRepository.save(entity);
	}

	@Override
	public void delete(int id) {
		brandRepository.deleteById(id);
	}
	
}
