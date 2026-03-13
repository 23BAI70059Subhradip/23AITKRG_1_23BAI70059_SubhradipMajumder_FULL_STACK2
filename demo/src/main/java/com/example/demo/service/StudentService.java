package com.example.demo.service;

import com.example.demo.entity.Student;
import com.example.demo.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.*;
import java.util.List;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Page<Student> getStudentsPaged(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return repository.findAll(pageable);
    }

    public List<Student> getStudentsSorted() {
        return repository.findAll(Sort.by("name").ascending());
    }
}