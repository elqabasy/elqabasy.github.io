
import { Code, Shield, BrainCircuit } from 'lucide-react';
import { skills } from '@/data/skills';
const SkillItem = ({ checked = false, children }: { checked?: boolean, children: React.ReactNode }) => {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>{children}</span>
    </div>
  );
};

const TechnicalExpertise = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle mx-auto">
            A combination of frontend development, cybersecurity knowledge, and problem-solving skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Frontend Development */}
          <div className="text-center md:text-left sm:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-portfolio-blue mb-6">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <div className="space-y-1">


              <SkillItem>React.js & Next.js</SkillItem>
              <SkillItem>Tailwind CSS & SCSS</SkillItem>
              <SkillItem>JavaScript & TypeScript</SkillItem>
              <SkillItem>Responsive UI/UX Design</SkillItem>
              {/* <SkillItem>State Management (Redux, Context)</SkillItem> */}
            </div>
          </div>

          {/* Cybersecurity */}
          <div className="text-center md:text-left sm:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-portfolio-green mb-6">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
            <div className="space-y-1">
              <SkillItem>Web Application Security</SkillItem>
              <SkillItem>Network Security Monitoring</SkillItem>
              <SkillItem>Vulnerability Assessment</SkillItem>
              <SkillItem>Security Incident Response</SkillItem>
              {/* <SkillItem>Defensive Security Tools</SkillItem> */}
            </div>
          </div>

          {/* Problem Solving */}
          <div className="text-center md:text-left sm:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
              <BrainCircuit size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Problem Solving</h3>
            <div className="space-y-1">
              <SkillItem>Algorithms & Data Structures</SkillItem>
              <SkillItem>Competitive Programming</SkillItem>
              <SkillItem>System Design</SkillItem>
              <SkillItem>Python & C++</SkillItem>
              <SkillItem>Optimization Techniques</SkillItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
