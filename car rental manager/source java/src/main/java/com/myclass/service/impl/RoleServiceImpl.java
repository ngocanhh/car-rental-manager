package com.myclass.service.impl;

import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import com.myclass.dto.RoleDTO;
import com.myclass.entity.Role;
import com.myclass.repository.RoleRepository;
import com.myclass.service.RoleService;
import com.myclass.util.Mapper;

@Service
@Scope("prototype")
@Transactional(rollbackOn = Exception.class)
public class RoleServiceImpl implements RoleService{

	@Autowired
	private RoleRepository roleRepository;
	
	@Override
	public List<RoleDTO> getAll() {
		List<RoleDTO> roleDTOs = new ArrayList<>();
		List<Role> roles = roleRepository.findAll();
		for(Role entity : roles) {
			roleDTOs.add(Mapper.mapObjects(entity, RoleDTO.class));
		}
		return roleDTOs;
	}
	
}
