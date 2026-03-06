package com.example.demo.API;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.StudentDTO;
import com.example.demo.entity.Student;
import com.example.demo.services.Studentservice;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/students")
public class StudentsController {
    
    private final Studentservice studentservice; 

    public StudentsController (Studentservice sc){
        this.studentservice = sc; 
    }

    @PostMapping
    public ResponseEntity<Student> createStudent(@Valid @RequestBody StudentDTO studentDto){
        Student savedStudent = studentservice.createStudent(studentDto);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED); 
    }
    
    @GetMapping  
    public List<Student> getStudent(){
        return studentservice.getAllStudents();
    }


}
