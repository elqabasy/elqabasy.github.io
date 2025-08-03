
import { Education } from '@/types/education';
import { Building, GraduationCap } from 'lucide-react';
import { DynamicIcon } from '../ui/DynamicIcon';

interface FormalEducationTimelineProps {
  educationItems: Education[];
}

const FormalEducationTimeline = ({ educationItems }: FormalEducationTimelineProps) => {
  return (
    <section className="py-12" id="formal-education">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center">
          <span className="bg-blue-100 p-2 rounded-lg mr-3">
            <Building className="h-6 w-6 text-portfolio-blue" />
          </span>
          Formal Education
        </h2>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-blue-200 md:before:mx-auto md:before:translate-x-0">
          {educationItems.map((item, index) => (
            <div key={item.id} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="absolute left-0 top-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-portfolio-blue text-white z-10 md:left-1/2 md:-translate-x-1/2 md:top-0">
                <GraduationCap className="h-5 w-5" />
              </div>

              <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} animate-fade-in`}>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-blue-100 text-xs text-blue-800 px-2 py-0.5 rounded">
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.institution}</p>

                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm">{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormalEducationTimeline;
