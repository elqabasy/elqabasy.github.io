
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Blog tags available in the system
const tags = [
  { id: "all", label: "All" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "frontend", label: "Frontend Development" },
  { id: "contest", label: "Contest Solutions" },
];

interface BlogFiltersProps {
  activeTag: string | null;
  setActiveTag: (tag: string | null) => void;
}

const BlogFilters = ({ activeTag, setActiveTag }: BlogFiltersProps) => {
  const handleTagClick = (tagId: string) => {
    if (tagId === "all") {
      setActiveTag(null);
    } else if (activeTag === tagId) {
      setActiveTag(null); // Clicking the active tag deselects it
    } else {
      setActiveTag(tagId);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <Button
          key={tag.id}
          variant={activeTag === tag.id || (tag.id === "all" && activeTag === null) ? "default" : "outline"}
          size="sm"
          onClick={() => handleTagClick(tag.id)}
          className="rounded-full transition-all animate-fade-in"
        >
          {tag.id !== "all" && (
            <span className="mr-1">
              {tag.id === "cybersecurity" && "🔒"}
              {tag.id === "frontend" && "💻"}
              {tag.id === "contest" && "🏆"}
            </span>
          )}
          {tag.label}
        </Button>
      ))}
    </div>
  );
};

export default BlogFilters;
