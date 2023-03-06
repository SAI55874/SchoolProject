package com.company.school.controler;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.school.model.Student;
import com.company.school.repository.StudentRepository;
import com.company.school.service.StudentService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@GetMapping("students")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}
	
	@GetMapping("students/{id}")
	@PreAuthorize("hasAuthority('ADMIN')")
	public Optional<Student> getStudent(@PathVariable Long id){
		return studentService.getStudent(id);
	}
	
	@PostMapping("students")
	@PreAuthorize("hasAuthority('ADMIN')")
	public void addStudent(@RequestBody Student student) {
		studentService.addStudent(student);
	}
	
	@PutMapping("students/{id}")
	@PreAuthorize("hasAuthority('ADMIN')")
	public void updateStudent(@RequestBody Student student, @PathVariable Long id) {
		studentService.updateStudent(student, id);
	}
	
	@DeleteMapping("students/{id}")
	@PreAuthorize("hasAuthority('ADMIN')")
	public void deleteStudent(@PathVariable Long id) {
		studentService.deleteStudentByID(id);
	}
	
	
}
