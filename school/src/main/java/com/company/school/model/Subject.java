package com.company.school.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Subjects")
public class Subject {
	 @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long subjectId;

	  @Column(name = "subjectName")
	  private String subjectName;

	public Long getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(Long subjectId) {
		this.subjectId = subjectId;
	}

	public String getSubjectName() {
		return subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	public Subject() {
		super();
		// TODO Auto-generated constructor stub
	}
}
