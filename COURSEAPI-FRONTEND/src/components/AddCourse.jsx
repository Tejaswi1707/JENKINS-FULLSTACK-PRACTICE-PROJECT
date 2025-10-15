import React, { useState } from "react";
import axios from "axios";
import config from "../config";

export default function AddCourse({ fetchCourses }) {
  const [course, setCourse] = useState({
    id: "",
    name: "",
    description: "",
    duration: "",
    instructor: ""
  });
  const [message, setMessage] = useState("");

  const baseUrl = `${config.url}/courseapi`;

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    for (let key in course) {
      if (!course[key] || course[key].toString().trim() === "") {
        setMessage(`Please fill out ${key}`);
        return false;
      }
    }
    return true;
  };

  const addCourse = async () => {
    if (!validateForm()) return;
    try {
      await axios.post(`${baseUrl}/add`, course);
      setMessage("Course added successfully");
      fetchCourses && fetchCourses();
      setCourse({ id: "", name: "", description: "", duration: "", instructor: "" });
    } catch (err) {
      setMessage("Error adding course");
    }
  };

  return (
    <div className="add-course-form">
      <h3>Add Course</h3>
      {message && <div className="message-banner">{message}</div>}
      <input type="number" name="id" placeholder="ID" value={course.id} onChange={handleChange} />
      <input type="text" name="name" placeholder="Name" value={course.name} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={course.description} onChange={handleChange} />
      <input type="text" name="duration" placeholder="Duration" value={course.duration} onChange={handleChange} />
      <input type="text" name="instructor" placeholder="Instructor" value={course.instructor} onChange={handleChange} />
      <button onClick={addCourse}>Add Course</button>
    </div>
  );
}
