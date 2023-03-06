package com.company.school.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.school.model.Section;
import com.company.school.repository.SectionRepository;

@Service
public class SectionService {

	@Autowired
	private SectionRepository sectionRepository;
	
	//Get section by Id
	public Optional<Section> getSectionById(Long sectionId ) {
		Optional<Section> section = sectionRepository.findById(sectionId);
		return section;
	}
	
	//Get All Sections
	public List<Section> getAllSections(){
		return sectionRepository.findAll();
	}
	
	//Delete a Section
	public void deleteSection(Long sectionId) {
		sectionRepository.deleteById(sectionId);
	}
	
	//Update a Section
	public void updateSection(Section section, Long sectionId) {
		for (Section sec : sectionRepository.findAll()) {
			if(sec.getSectionId()==sectionId) {
				sectionRepository.save(section);
			}
		}
		
	}
}
