package com.company.school.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.company.school.model.UserInfo;
import com.company.school.repository.UserInfoRepository;



@Service
public class UserService {
	@Autowired
	private UserInfoRepository repository;
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	
	 public void addUser(UserInfo userInfo) {
	        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
	        repository.save(userInfo);
	        
	    }
}
