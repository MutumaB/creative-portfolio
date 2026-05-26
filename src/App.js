import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';

const initialProjects = [
  { id: 1, name: "Portfolio Site", description: "Built with React", image: "https://placeholder.com" },
  { id: 2, name: "Task Manager", description: "A simple To-Do app", image: "https://placeholder.com" },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <header>
        <h1>My Project Showcase</h1>
      </header>
      <Search onSearch={setSearchTerm} />
      <ProjectForm onAdd={addProject} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
