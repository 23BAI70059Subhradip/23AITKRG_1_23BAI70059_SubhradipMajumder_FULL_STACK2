package com.example.demo.repository;

import com.example.demo.entity.Student;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {

    @Query("SELECT s FROM Student s WHERE s.name = :name")
    List<Student> findByNameJPQL(@Param("name") String name);

    @Query(value = "SELECT * FROM students WHERE email = :email",
            nativeQuery = true)
    Student findByEmailNative(@Param("email") String email);

    Page<Student> findAll(Pageable pageable);

    List<Student> findAllByOrderByNameAsc();
}