"use client";
import React, { useState } from 'react';
import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import ProjectModal from './ProjectModal'; // Import the modal component
import projectData from "./projectData";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const openModal = (project) => {
    setSelectedProject(project);
  };
  
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-primary/5 py-16 md:py-16 lg:py-20">
      <div className="container">
        <SectionTitle
          title="Projects"
          paragraph="Check out my latest projects"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-x-6 lg:gap-x-8 lg:grid-cols-3 xl:grid-cols-4">
          {projectData.map((project) => (
            <div key={project.id} className="w-full" onClick={() => openModal(project)} >
              <SingleProject project={project} />
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </section>
  );
};

export default Project;
