package com.fptudemy.mycoolapp.mycoolapp.controller;

import com.fptudemy.mycoolapp.mycoolapp.models.Course;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@CrossOrigin
@RestController
public class CourseController {

    @RequestMapping("/courses")
    public List<Course> getAllCourse() {
        return Arrays.asList(new Course(1, "Test 1", "PhucNM5"),
                new Course(2, "Test 3", "PhucNM5"),
                new Course(3, "Test 2", "PhucNM5"),
                new Course(3, "Test 2", "PhucNM5")

        );

    }
}
