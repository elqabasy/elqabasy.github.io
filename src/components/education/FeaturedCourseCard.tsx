
import { FeaturedCourse } from '@/types/education';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { FileText } from 'lucide-react';

interface FeaturedCourseCardProps {
  course: FeaturedCourse;
}

const FeaturedCourseCard = ({ course }: FeaturedCourseCardProps) => {
  return (
    <Card className="h-full flex flex-col justify-between transition-all duration-300 hover:shadow-md animate-fade-in">
      <CardContent className="pt-6 flex-grow">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-blue-100 rounded-full p-2.5">
            <DynamicIcon
              name={course.icon as any}
              className="h-5 w-5 text-portfolio-blue"
              size={20}
            />
          </div>
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2 bg-blue-50 text-blue-700 hover:bg-blue-100">
              {course.category.split('-').join(' ')}
            </Badge>
            <h3 className="text-xl font-bold mb-1">{course.title}</h3>
            <p className="text-gray-600 text-sm">
              {course.platform}
            </p>
          </div>
        </div>
        <p className="text-gray-700 text-sm mb-4">
          {course.description}
        </p>

      </CardContent>

      <CardFooter className="pt-0">
        <Button variant="outline" size="sm" className="text-portfolio-blue border-portfolio-blue hover:bg-blue-50">
          <FileText className="w-4 h-4 mr-2" /> View Certificate
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeaturedCourseCard;
