package com.company.school.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import com.company.school.model.Section;

public interface SectionRepository extends JpaRepository<Section, Long> {
	
	
	

}
