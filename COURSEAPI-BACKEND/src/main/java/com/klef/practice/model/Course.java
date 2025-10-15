package com.klef.practice.model;

import jakarta.persistence.*;

@Entity
@Table(name = "course_table")
public class Course {

    @Id
    @Column(name = "cid")
    private int id;

    @Column(name = "cname", length = 100, nullable = false)
    private String name;

    @Column(name = "cdescription", length = 255, nullable = false)
    private String description;

    @Column(name = "cduration", length = 50, nullable = false)
    private String duration;

    @Column(name = "cinstructor", length = 50, nullable = false)
    private String instructor;

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

    public String getInstructor() { return instructor; }
    public void setInstructor(String instructor) { this.instructor = instructor; }

    @Override
    public String toString() {
        return "Course [id=" + id + ", name=" + name + ", description=" + description + ", duration=" + duration + ", instructor=" + instructor + "]";
    }
}
