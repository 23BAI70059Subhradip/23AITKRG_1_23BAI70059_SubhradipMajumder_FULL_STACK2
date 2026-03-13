package com.example.demo.controller;

import com.example.demo.entity.Student;
import com.example.demo.service.StudentService;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return service.saveStudent(student);
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }

    @GetMapping("/paged")
    public Page<Student> getStudentsPaged(
            @RequestParam int page,
            @RequestParam int size) {

        return service.getStudentsPaged(page, size);
    }

    @GetMapping("/sorted")
    public List<Student> getSortedStudents() {
        return service.getStudentsSorted();
    }
}