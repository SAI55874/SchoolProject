package com.company.school.model;

import java.util.List;
import java.util.Set;

import org.springframework.web.bind.annotation.RequestBody;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Sections")
public class Section {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long sectionId;
	
	
	@Column
	private int sectionStrength;
	
	@ManyToOne
	@JoinColumn(name = "teacherId")
	private Teacher sectionTeacher;

	public long getSectionId() {
		return sectionId;
	}

	public void setSectionId(long sectionId) {
		this.sectionId = sectionId;
	}
	
	
	@JsonBackReference
	@OneToMany(mappedBy = "studentOfSection")
	private Set<Student> students;

	public Set<Student> getStudents() {
		return students;
	}

	public void setStudents(Set<Student> students) {
		this.students = students;
	}

	public int getSectionStrength() {
		return students.size();
	}

	public void setSectionStrength(int sectionStrength) {
//		sectionStrength=students.size();
		this.sectionStrength =sectionStrength;
	}

	public Teacher getSectionTeacher() {
		return sectionTeacher;
	}

	public void setSectionTecher( Teacher sectionTeacher) {
		this.sectionTeacher = sectionTeacher;
	}
	
	public Section() {
		super();
		// TODO Auto-generated constructor stub
	}
		
}
