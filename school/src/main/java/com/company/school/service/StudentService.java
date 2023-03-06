package com.company.school.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.school.model.Student;
import com.company.school.repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
	
	
		// fetching all students
		public List<Student> getAllStudents(){
			List<Student> students = studentRepository.findAll();
			return students;
		}
		
		// fetching student by id
		public Optional<Student> getStudent(Long id) {
			Optional<Student> student=studentRepository.findById(id);
			return student;
		}
		
		
		// inserting student
		public void addStudent(Student student) {
			
			studentRepository.save(student);
		}
		
		// updating Student by id
		public void updateStudent(Student student,Long id) {
		
			for (Student stud : studentRepository.findAll()) {
				if (id==stud.getStudentId()) {
					studentRepository.save(student);
				}
			}
			
			//other way
//			if(id == student.getStudentId()) {
//				studentRepository.save(student);
//			}
		
			
		}
		
		// deleting student by id
		public void deleteStudentByID(Long id){
			Student student=studentRepository.getById(id);
			studentRepository.delete(student);
		}
		
		
}
