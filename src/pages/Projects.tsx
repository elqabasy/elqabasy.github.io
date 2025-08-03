
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { ProjectCategory } from "@/types/project";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <ProjectsHeader />
        
        {/* Filter Bar */}
        <section className="py-8 bg-portfolio-light-bg">
          <div className="container">
            <ProjectsFilter 
              activeFilter={activeFilter} 
              onFilterChange={setActiveFilter} 
            />
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <ProjectsGrid activeFilter={activeFilter} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
