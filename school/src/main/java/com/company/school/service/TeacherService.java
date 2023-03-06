package com.company.school.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.school.model.Teacher;
import com.company.school.repository.TeacherRepository;

@Service
public class TeacherService {
	
	@Autowired
	TeacherRepository teacherRepository;
	
	public void addTeacher(Teacher teacher) {
		teacherRepository.save(teacher);
	}

	public Optional<Teacher> getTeacherById(Long Id) {
		return teacherRepository.findById(Id);
	}
	
	public List<Teacher> getAllteacher() {
		List<Teacher> teachers=teacherRepository.findAll();
		return teachers;	
	}
	
	public void deleteTeacherById(Long Id) {
		Teacher teacher=teacherRepository.getById(Id);
		teacherRepository.delete(teacher);
	}
	
	public void updateTeacher(Teacher teacher, Long Id) {
		for (Teacher teach : teacherRepository.findAll()) {
			if(teach.getTeacherId()==Id) {
				teacherRepository.save(teacher);
			}
		}
	}
}
