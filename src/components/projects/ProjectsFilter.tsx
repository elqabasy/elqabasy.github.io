
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Code, Database, Shield, Award, FileText, Package } from "lucide-react";
import { ProjectCategory } from "@/types/project";

interface ProjectsFilterProps {
  activeFilter: ProjectCategory;
  onFilterChange: (value: ProjectCategory) => void;
}

const ProjectsFilter = ({ activeFilter, onFilterChange }: ProjectsFilterProps) => {
  const handleValueChange = (value: string) => {
    if (value) onFilterChange(value as ProjectCategory);
  };

  return (
    <div className="flex justify-center mb-8">
      <ToggleGroup 
        type="single" 
        value={activeFilter}
        onValueChange={handleValueChange}
        className="flex flex-wrap justify-center gap-2"
      >
        <ToggleGroupItem 
          value="all" 
          className="px-4 py-2 border rounded-md"
          aria-label="Show all projects"
        >
          <Package className="mr-2 h-4 w-4" />
          All
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="frontend" 
          className="px-4 py-2 border rounded-md"
          aria-label="Show frontend projects"
        >
          <Code className="mr-2 h-4 w-4" />
          Frontend
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="backend" 
          className="px-4 py-2 border rounded-md"
          aria-label="Show backend projects"
        >
          <Code className="mr-2 h-4 w-4" />
          Backend
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="cybersecurity" 
          className="px-4 py-2 border rounded-md"
          aria-label="Show cybersecurity projects"
        >
          <Shield className="mr-2 h-4 w-4" />
          Cybersecurity
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="databases" 
          className="px-4 py-2 border rounded-md"
          aria-label="Show database projects"
        >
          <Database className="mr-2 h-4 w-4" />
          Databases
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="contests" 
          className="px-4 py-2 border rounded-md"
          aria-label="Show contest projects"
        >
          <Award className="mr-2 h-4 w-4" />
          Contests
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="others" 
          className="px-4 py-2 border rounded-md"
          aria-label="Show other projects"
        >
          <FileText className="mr-2 h-4 w-4" />
          Others
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ProjectsFilter;
