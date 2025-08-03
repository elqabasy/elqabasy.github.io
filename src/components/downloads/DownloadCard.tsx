
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, FileText, FileArchive, FileIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DownloadResource {
  id: string;
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  version?: string;
  tags: string[];
  downloadUrl: string;
  previewUrl?: string;
  icon?: "pdf" | "zip" | "docx" | "json" | "md" | "default";
}

const DownloadCard = ({ resource }: { resource: DownloadResource }) => {
  // Determine icon based on file type
  const getIcon = () => {
    switch (resource.icon) {
      case "pdf":
        return <FileText className="h-12 w-12 text-blue-500" />;
      case "zip":
        return <FileArchive className="h-12 w-12 text-green-500" />;
      case "docx":
        return <FileText className="h-12 w-12 text-purple-500" />;
      case "json":
        return <FileIcon className="h-12 w-12 text-amber-500" />;
      case "md":
        return <FileText className="h-12 w-12 text-gray-700" />;
      default:
        return <FileIcon className="h-12 w-12 text-gray-500" />;
    }
  };

  // Get badge color based on file type
  const getFileTypeBadgeClass = () => {
    switch (resource.icon) {
      case "pdf":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "zip":
        return "bg-green-100 text-green-800 border-green-200";
      case "docx":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "json":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "md":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
      <CardHeader className="flex flex-row items-start gap-4 pb-4">
        <div className="bg-white rounded-lg p-2 shadow-sm">{getIcon()}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{resource.title}</h3>
          <p className="text-sm text-muted-foreground">{resource.description}</p>
        </div>
        <Badge
          variant="outline"
          className={cn("uppercase text-xs font-medium", getFileTypeBadgeClass())}
        >
          {resource.fileType}
        </Badge>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex flex-wrap gap-1 mb-3">
          {resource.tags.map((tag) => (
            <span key={tag} className="tag text-xs">{tag}</span>
          ))}
        </div>
        <div className="flex flex-row items-center text-xs text-gray-500 gap-4">
          <span>Size: {resource.fileSize}</span>
          {resource.version && <span>Version: {resource.version}</span>}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="default" className="flex-1" asChild>
          <a href={resource.downloadUrl} download>
            <Download className="mr-2 h-4 w-4" />
            Download
          </a>
        </Button>
        {resource.previewUrl && (
          <Button variant="outline" asChild>
            <a href={resource.previewUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-4 w-4" />
              Preview
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default DownloadCard;
