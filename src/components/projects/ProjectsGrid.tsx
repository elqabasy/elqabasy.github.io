
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";
import { Project, ProjectCategory } from "@/types/project";

interface ProjectsGridProps {
  activeFilter: ProjectCategory;
}

const ProjectsGrid = ({ activeFilter }: ProjectsGridProps) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  useEffect(() => {
    let filtered = activeFilter === "all"
      ? projectsData
      : projectsData.filter(project => project.categories.includes(activeFilter));
    
    setFeaturedProjects(filtered.filter(project => project.featured));
    setFilteredProjects(filtered.filter(project => !project.featured));
  }, [activeFilter]);

  return (
    <>
      {/* Featured Projects Section (if available) */}
      {featuredProjects.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
      
      {/* Regular Projects Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          {activeFilter === "all" ? "All Projects" : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Projects`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsGrid;
