import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

export default function ViewAllCourses({ onEdit }) {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState("");
  const baseUrl = `${config.url}/courseapi`;

  const fetchCourses = async () => {
    try {
      const res = await axios.get(`${baseUrl}/all`);
      setCourses(res.data);
    } catch (err) {
      setMessage("Error fetching courses");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`${baseUrl}/delete/${id}`);
      setMessage("Course deleted successfully");
      fetchCourses();
    } catch (err) {
      setMessage("Error deleting course");
    }
  };

  return (
    <div className="view-course-container">
      <h3>All Courses</h3>
      {message && <div className="message-banner">{message}</div>}
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <table className="course-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Instructor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.description}</td>
                <td>{c.duration}</td>
                <td>{c.instructor}</td>
                <td>
                  <button className="edit-button" onClick={() => onEdit(c)}>Edit</button>
                  <button className="delete-button" onClick={() => deleteCourse(c.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
