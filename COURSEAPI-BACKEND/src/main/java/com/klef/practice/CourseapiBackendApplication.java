package com.klef.practice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class CourseapiBackendApplication extends SpringBootServletInitializer
{

	public static void main(String[] args) {
		SpringApplication.run(CourseapiBackendApplication.class, args);
		System.out.println("Hello Project is Running");	
		}

}
