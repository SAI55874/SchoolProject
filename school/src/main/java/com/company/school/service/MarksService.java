package com.company.school.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.school.repository.MarksRepository;

@Service
public class MarksService {
	
	@Autowired
	private MarksRepository marksRepository;

}
