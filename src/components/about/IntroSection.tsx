
import { Link } from 'react-router-dom';
import { Github, Linkedin, Youtube, Mail, ProjectorIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SocialAccounts from '../SocialAccounts';
import MahrosImage from "@/assets/images/mahros.jpg";


const IntroSection = () => {
  return (
    <section className="py-16 bg-portfolio-light-bg">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              About <span className="text-portfolio-blue">Mahros AL-Qabasy</span>
            </h1>

            <p className="text-lg mb-6">
              Hi! I'm Mahros, a passionate <span className="text-portfolio-blue font-medium">Frontend Developer</span> and <span className="text-portfolio-green font-medium">Blue Team Learner</span>.
              My journey blends strong coding skills, security curiosity, and a love for
              competitive problem-solving.
            </p>

            <p className="text-lg mb-8">
              With a background in Computer Science, I thrive on building robust,
              beautiful web interfaces and defending them with cybersecurity best
              practices. I'm recognized for my achievements in programming contests
              and my drive to continuously learn and teach.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <span className="bg-blue-800 w-2 h-2 rounded-full mr-1.5"></span>
                Frontend
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <span className="bg-green-800 w-2 h-2 rounded-full mr-1.5"></span>
                Cybersecurity
              </span>
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <span className="bg-cyan-800 w-2 h-2 rounded-full mr-1.5"></span>
                Contest Solver
              </span>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button asChild variant="default" className="bg-portfolio-blue hover:bg-blue-700">
                <Link to="/projects">
                  {/* <span className="mr-1">→</span> */}
                  <ProjectorIcon className="mr-2 h-4 w-4" />
                  Explore Projects
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-blue-50">
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Link>
              </Button>
            </div>

            <SocialAccounts className="mt-8" />
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-portfolio-cyan/20 -z-10"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-portfolio-green/20 -z-10"></div>
              <div className="rounded-xl overflow-hidden border-4 border-white shadow-lg max-w-md">
                <img
                  src={MahrosImage}
                  alt="Mahros AL-Qabasy"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
