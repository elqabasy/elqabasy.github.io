
import { BookOpen, LinkIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const EducationSection = () => {
  return (
    <section id="education" className="py-16 bg-white scroll-mt-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center">
          <span className="bg-blue-100 p-2 rounded-lg mr-3">
            <BookOpen className="h-6 w-6 text-portfolio-blue" />
          </span>
          Academic Background
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
                <div className="absolute top-0 left-[-8px] w-3.5 h-3.5 bg-portfolio-blue rounded-full"></div>
                <div className="mb-2">
                  <div className="flex items-start mb-1">
                    <div className="bg-blue-100 text-xs text-blue-800 px-2 py-0.5 rounded mr-2">2018-2022</div>
                    <h3 className="text-xl font-semibold">BSc in Computer Science</h3>
                  </div>
                  <p className="text-gray-600">Cairo University</p>
                </div>
                <p className="text-gray-700">
                  Focused on Algorithms, Data Structures, Software Engineering, and Web Development. Graduated with honors.
                </p>
              </div>

              <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
                <div className="absolute top-0 left-[-8px] w-3.5 h-3.5 bg-portfolio-green rounded-full"></div>
                <div className="mb-2">
                  <div className="flex items-start mb-1">
                    <div className="bg-green-100 text-xs text-green-800 px-2 py-0.5 rounded mr-2">2023</div>
                    <h3 className="text-xl font-semibold">Certified: TryHackMe Cybersecurity Path</h3>
                  </div>
                  <p className="text-gray-600">Top 1% Learner</p>
                </div>
                <p className="text-gray-700">
                  Completed comprehensive training in network security, penetration testing, and defensive security practices.
                </p>
              </div>

              <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
                <div className="absolute top-0 left-[-8px] w-3.5 h-3.5 bg-portfolio-cyan rounded-full"></div>
                <div className="mb-2">
                  <div className="flex items-start mb-1">
                    <div className="bg-cyan-100 text-xs text-cyan-800 px-2 py-0.5 rounded mr-2">2021</div>
                    <h3 className="text-xl font-semibold">React & Frontend Nanodegree</h3>
                  </div>
                  <p className="text-gray-600">Udacity</p>
                </div>
                <p className="text-gray-700">
                  Advanced training in React, Redux, and modern frontend development practices. Built several production-ready applications.
                </p>
              </div>
            </div>

            <Button variant="link" className="text-portfolio-blue mt-4">

              <Link to="/education" className="text-gray-400 text-primary text-sm">
                See Full Education History →
              </Link>

            </Button>
          </div>

          <div className="flex justify-center items-center">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="text-portfolio-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
              </div>
              <blockquote className="italic text-gray-600 max-w-xs">
                "Learning is a journey, not a destination."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
