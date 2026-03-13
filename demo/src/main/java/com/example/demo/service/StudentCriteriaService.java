package com.example.demo.service;

import jakarta.persistence.*;
import jakarta.persistence.criteria.*;
import com.example.demo.entity.Student;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentCriteriaService {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Student> findStudentsByName(String name) {

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Student> query = cb.createQuery(Student.class);

        Root<Student> root = query.from(Student.class);

        query.select(root)
                .where(cb.equal(root.get("name"), name));

        return entityManager.createQuery(query).getResultList();
    }
}