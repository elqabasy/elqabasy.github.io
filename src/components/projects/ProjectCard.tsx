
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/project";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] overflow-hidden flex flex-col justify-between">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
          {project.featured && (
            <Badge variant="secondary" className="bg-portfolio-blue/10 text-portfolio-blue">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Technology Icons */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech) => (
            <HoverCard key={tech.name}>
              <HoverCardTrigger>
                <Badge variant="outline" className="px-2 py-1">
                  {tech.name}
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto p-2">
                <span>{tech.name}</span>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tags.map((tag) => (
              <span key={tag} className="tag text-xs">{tag}</span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 bg-white max-h-[100px]">
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
          {project.caseStudyUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                Details
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
