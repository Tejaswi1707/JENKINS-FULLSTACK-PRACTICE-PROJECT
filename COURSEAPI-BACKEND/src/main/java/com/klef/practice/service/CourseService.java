package com.klef.practice.service;


import java.util.List;

import com.klef.practice.model.Course;


public interface CourseService {
    List<Course> viewAllCourses();
    Course getCourseById(int id);
    String addCourse(Course course);
    String updateCourse(Course course);
    String deleteCourse(int id);
}
