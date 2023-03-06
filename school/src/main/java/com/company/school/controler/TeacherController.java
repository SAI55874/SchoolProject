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
import com.company.school.model.Teacher;
import com.company.school.service.TeacherService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class TeacherController {
	
	@Autowired
	private TeacherService teacherService;
	
	@GetMapping("/teachers")
//	@PreAuthorize("hasAuthority('ADMIN')")
	public List<Teacher> getAllTeachers() {
		return teacherService.getAllteacher();
	}
	
	@GetMapping("/teacher/{id}")
//	@PreAuthorize("hasAuthority('ADMIN')")
	public Optional<Teacher> getTeacher(@PathVariable Long id){
		return teacherService.getTeacherById(id);
	}
	
	@PostMapping("/teachers")
	@PreAuthorize("hasAuthority('ADMIN')")
	public void addTeacher(@RequestBody Teacher teacher) {
		teacherService.addTeacher(teacher);
	}
	
	@PutMapping("/teachers/{id}")
	@PreAuthorize("hasAuthority('ADMIN')")
	public void updateStudent(@RequestBody Teacher teacher, @PathVariable Long id) {
		teacherService.updateTeacher(teacher, id);
	}
	
	@DeleteMapping("/teachers/{id}")
	@PreAuthorize("hasAuthority('ADMIN')")
	public void deleteTeacher(@PathVariable Long id) {
		teacherService.deleteTeacherById(id);
	}
	
}
