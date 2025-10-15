import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import AddCourse from "./AddCourse";
import ViewAllCourses from "./ViewAllCourses";
import EditCourse from "./EditCourse";
import { useState } from "react";

export default function CourseNavBar() {
  const BASE = "/reactcourseapipractice"; // base URL
  const [editCourse, setEditCourse] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const handleEdit = (course) => {
    setEditCourse(course);
    navigate(`${BASE}/editcourse`);
  };

  const handleUpdate = () => {
    setEditCourse(null);
    setRefresh(!refresh);
    navigate(`${BASE}/viewallcourses`);
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><Link to={`${BASE}/`}>Home</Link></li>
          <li><Link to={`${BASE}/addcourse`}>Add Course</Link></li>
          <li><Link to={`${BASE}/viewallcourses`}>View All</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path={`${BASE}/`} element={<Home />} />
        <Route path={`${BASE}/addcourse`} element={<AddCourse fetchCourses={() => setRefresh(!refresh)} />} />
        <Route path={`${BASE}/viewallcourses`} element={<ViewAllCourses onEdit={handleEdit} key={refresh} />} />
        <Route path={`${BASE}/editcourse`} element={<EditCourse course={editCourse} onUpdate={handleUpdate} />} />
      </Routes>
    </div>
  );
}
