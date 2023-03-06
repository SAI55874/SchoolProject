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

import com.company.school.model.Section;
import com.company.school.service.SectionService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class SectionControler {
	
	@Autowired
	private SectionService sectionService;
	
	@GetMapping("Sections/{id}")
	public Optional<Section> getSectionById(@PathVariable Long id) {
		return sectionService.getSectionById(id);
	}
	
	@GetMapping("Sections")
//	@PreAuthorize("hasAuthority('ADMIN')")
	public List<Section> getAllSections(){
		return sectionService.getAllSections();
	}
	
	@DeleteMapping("Sections/{id}")
	@PreAuthorize("hasAuthority('ADMIN')")
	public void deleteSection(@PathVariable Long id) {
		sectionService.deleteSection(id);
	}
	
	@PutMapping("Sections/{id}")
	@PreAuthorize("hasAuthority('ADMIN')")
	public void updateSection(@RequestBody Section section, @PathVariable Long id) {
		sectionService.updateSection(section, id);
	}
	

}
