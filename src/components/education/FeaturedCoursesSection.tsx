
import { FeaturedCourse } from '@/types/education';
import FeaturedCourseCard from './FeaturedCourseCard';
import { Star } from 'lucide-react';

interface FeaturedCoursesSectionProps {
  courses: FeaturedCourse[];
}

const FeaturedCoursesSection = ({ courses }: FeaturedCoursesSectionProps) => {
  return (
    <section className="py-12" id="featured-courses">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center">
          <span className="bg-yellow-100 p-2 rounded-lg mr-3">
            <Star className="h-6 w-6 text-yellow-600" />
          </span>
          Featured Courses & Highlights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <FeaturedCourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
