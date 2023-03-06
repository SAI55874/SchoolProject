package com.company.school.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.company.school.model.Subject;



@Repository
public interface SubjectRepository extends JpaRepository<Subject, Long>{

}
