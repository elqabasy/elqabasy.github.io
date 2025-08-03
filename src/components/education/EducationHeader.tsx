
import React from 'react';
import { GraduationCap } from 'lucide-react';

const EducationHeader = () => {
  return (
    <section className="py-12 bg-gray-50 border-b">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Education & Learning Path</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Explore my academic journey, technical certifications, and the continuous
              learning path that shapes my skills as a developer and cybersecurity
              enthusiast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationHeader;
