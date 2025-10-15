import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function EditCourse({ course, onUpdate }) {
  const [formData, setFormData] = useState(course || {});
  const [message, setMessage] = useState("");
  const baseUrl = `${config.url}/courseapi`;

  useEffect(() => {
    if (course) setFormData(course);
  }, [course]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const updateCourse = async () => {
    try {
      await axios.put(`${baseUrl}/update`, formData);
      setMessage("Course updated successfully");
      onUpdate && onUpdate();
    } catch (err) {
      setMessage("Error updating course");
    }
  };

  if (!course) return <p>Select a course to edit.</p>;

  return (
    <div className="add-course-form">
      <h3>Edit Course</h3>
      {message && <div className="message-banner">{message}</div>}
      <input type="number" name="id" value={formData.id} disabled />
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="text" name="description" value={formData.description} onChange={handleChange} />
      <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
      <input type="text" name="instructor" value={formData.instructor} onChange={handleChange} />
      <button onClick={updateCourse} className="update-btn">Update Course</button>
    </div>
  );
}
