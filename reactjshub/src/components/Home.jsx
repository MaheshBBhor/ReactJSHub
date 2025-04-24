import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const projects = [
    { name: "Project 1", path: "/project1" },
    // { name: "Project 2", path: "/project2" },
    // Add more projects here
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Portfolio</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Link to={project.path}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
