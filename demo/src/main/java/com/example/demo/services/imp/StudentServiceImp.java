package com.example.demo.services.imp;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.StudentDTO;
import com.example.demo.entity.Student;
import com.example.demo.repository.Studentrepo;
import com.example.demo.services.Studentservice;

@Service
public class StudentServiceImp implements Studentservice{
    private final Studentrepo repository; 

    public StudentServiceImp(Studentrepo repo){
        this.repository = repo; 
    }

    @Override
    public Student createStudent(StudentDTO dto) {
        Student student = new Student(); 
        student.setName(dto.getName());      
        student.setEmail(dto.getEmail());
        student.setCourse(dto.getCourse());

        return repository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        // TODO Auto-generated method stub
        return repository.findAll();
    }
}
