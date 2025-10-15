package com.klef.practice.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.practice.model.Course;
import com.klef.practice.repository.CourseRepository;



@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository repository;

    @Override
    public List<Course> viewAllCourses() {
        return repository.findAll();
    }

    @Override
    public Course getCourseById(int id) {
        Optional<Course> obj = repository.findById(id);
        return obj.orElse(null);
    }

    @Override
    public String addCourse(Course course) {
        repository.save(course);
        return "Course Added Successfully";
    }

    @Override
    public String updateCourse(Course course) {
        Optional<Course> obj = repository.findById(course.getId());
        if(obj.isPresent()) {
            repository.save(course);
            return "Course Updated Successfully";
        } else {
            return "Course ID Not Found";
        }
    }

    @Override
    public String deleteCourse(int id) {
        Optional<Course> obj = repository.findById(id);
        if(obj.isPresent()) {
            repository.delete(obj.get());
            return "Course Deleted Successfully";
        } else {
            return "Course ID Not Found";
        }
    }
}
