package com.example.demo.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String,String>> handleException(Exception ex){

        Map<String,String> error = new HashMap<>();
        error.put("message", ex.getMessage());

        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}