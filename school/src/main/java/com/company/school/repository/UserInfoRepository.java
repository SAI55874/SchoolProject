package com.company.school.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.school.model.UserInfo;



public interface UserInfoRepository extends JpaRepository<UserInfo, Integer>{
//	 User findByUserName(String userName);
	 Optional<UserInfo> findByUserName(String userName);
}
