package com.example.demo.services;

import java.util.List;

import com.example.demo.dto.StudentDTO;
import com.example.demo.entity.Student;

public interface Studentservice {
    Student createStudent(StudentDTO dto); 
    List<Student> getAllStudents();
}
