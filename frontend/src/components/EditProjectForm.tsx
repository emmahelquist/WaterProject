import { useState } from 'react';
import { Project } from '../types/project';
import { updateProject } from '../api/ProjectsAPI';

interface EditProjectFormProps {
  project: Project;
  onSuccess: () => void;
  onCancel: () => void;
}

// This is a function thing that creates a new Project based on formData
const EditProjectForm = ({
  project,
  onSuccess,
  onCancel,
}: EditProjectFormProps) => {
  const [formData, setFormData] = useState<Project>({ ...project });
  //   formData is what's passed into project

  // Update the form as changes are made
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Process the form submission, prevent it from reloading
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProject(formData.projectId, formData);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new project</h2>
      <label>
        Project Name{' '}
        <input
          type="text"
          name="projectName"
          value={formData.projectName}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Project Type{' '}
        <input
          type="text"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Project Regional Program{' '}
        <input
          type="text"
          name="projectRegionalProgram"
          value={formData.projectRegionalProgram}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Project Impact{' '}
        <input
          type="text"
          name="projectImpact"
          value={formData.projectImpact}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Project Phase{' '}
        <input
          type="text"
          name="projectPhase"
          value={formData.projectPhase}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Project Functionality Status{' '}
        <input
          type="text"
          name="projectFunctionalityStatus"
          value={formData.projectFunctionalityStatus}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">Add Project</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditProjectForm;
