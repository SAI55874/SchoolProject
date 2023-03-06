package com.company.school.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.company.school.model.Marks;


@Repository
public interface MarksRepository extends JpaRepository<Marks, Long> {

}
