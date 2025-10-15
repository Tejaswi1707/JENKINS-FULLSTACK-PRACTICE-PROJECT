package com.klef.practice.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.practice.model.Course;
import com.klef.practice.service.CourseService;


@RestController
@RequestMapping("/courseapi")
@CrossOrigin("*")
public class CourseController {

    @Autowired
    private CourseService service;

    @GetMapping("/")
    public String home() {
        return "Course API Home";
    }

    @GetMapping("/all")
    public List<Course> viewAllCourses() {
        return service.viewAllCourses();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getById(@PathVariable int id) {
        Course course = service.getCourseById(id);
        if(course != null)
            return ResponseEntity.ok(course);
        else
            return ResponseEntity.status(404).body("Course with ID " + id + " not found");
    }

    @PostMapping("/add")
    public String addCourse(@RequestBody Course course) {
        return service.addCourse(course);
    }

    @PutMapping("/update")
    public String updateCourse(@RequestBody Course course) {
        return service.updateCourse(course);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteCourse(@PathVariable int id) {
        return service.deleteCourse(id);
    }
}
