
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Achievement } from "@/types/achievement";
import { FileText, ExternalLink } from "lucide-react";

interface SpotlightAchievementProps {
  achievement: Achievement;
}

const SpotlightAchievement = ({ achievement }: SpotlightAchievementProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md border overflow-hidden animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {achievement.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
          
          <p className="text-gray-700 mb-4">{achievement.description}</p>
          
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md mr-2">
              {achievement.formattedDate}
            </span>
            {achievement.badgeText && (
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">
                {achievement.badgeText}
              </span>
            )}
          </div>

          {achievement.link && (
            <Button 
              variant="outline"
              size="sm"
              className="text-portfolio-blue border-portfolio-blue hover:bg-blue-50"
            >
              {achievement.link.type === "writeup" ? (
                <FileText className="w-4 h-4 mr-2" />
              ) : (
                <ExternalLink className="w-4 h-4 mr-2" />
              )}
              {achievement.link.label}
            </Button>
          )}
        </div>

        <div className="bg-gray-100 flex justify-center items-center p-8">
          <div className="flex justify-center items-center h-full">
            <div className="bg-yellow-100 p-8 rounded-full">
              <span className="text-8xl">🏆</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightAchievement;
