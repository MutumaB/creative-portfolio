import React, { useState } from 'react';

function ProjectForm({ onAdd }) {
  const [formData, setFormData] = useState({ name: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.description.trim()) return;
    onAdd(formData);
    setFormData({ name: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <input 
        type="text"
        placeholder="Project Title" 
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})} 
      />
      <input 
        type="text"
        placeholder="Project Description" 
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})} 
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
