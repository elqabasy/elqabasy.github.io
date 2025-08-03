
import { Eye } from 'lucide-react';

const GoalsSection = () => {
  return (
    <section id="goals" className="py-16 bg-portfolio-light-bg scroll-mt-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center">
          <span className="bg-blue-100 p-2 rounded-lg mr-3">
            <Eye className="h-6 w-6 text-portfolio-blue" />
          </span>
          Future Vision
        </h2>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <blockquote className="text-xl md:text-2xl text-gray-700 italic font-light mb-6">
            "My goal is to bridge the gap between elegant frontend experiences and robust security practices, 
            creating digital solutions that are both beautiful and secure."
          </blockquote>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-3 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="text-gray-700">
                <strong className="text-portfolio-blue">Blue Team Specialist:</strong> Advancing my cybersecurity knowledge with a focus on defensive security, incident response, and secure development practices.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-3 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="text-gray-700">
                <strong className="text-portfolio-green">Frontend Architect:</strong> Building scalable, accessible web applications that combine innovative UX with enterprise-grade performance.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-3 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="text-gray-700">
                <strong className="text-portfolio-cyan">Knowledge Sharing:</strong> Contributing to open source, writing technical articles, and mentoring other developers in security-focused frontend development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
