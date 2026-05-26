import React from 'react';

function ProjectList({ projects }) {
  return (
    <div className="project-grid">
      {projects.length === 0 ? (
        <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>No projects found.</p>
      ) : (
        projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image || "https://placeholder.com"} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProjectList;
