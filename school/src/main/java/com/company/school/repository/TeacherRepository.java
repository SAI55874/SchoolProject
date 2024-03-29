package com.company.school.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.school.model.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

}
