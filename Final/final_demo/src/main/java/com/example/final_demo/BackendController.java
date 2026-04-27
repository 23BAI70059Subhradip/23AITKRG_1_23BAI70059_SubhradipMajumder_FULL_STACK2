package com.example.final_demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BackendController {
    @GetMapping("hello")
    public String HelloSya() {
        return new String("Hello");
    }
    
    @GetMapping("test-no-cors")
    public String testNoCors() {
        return "This endpoint has NO CORS configuration";
    }

}
