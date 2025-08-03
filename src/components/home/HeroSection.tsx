
import { Link } from 'react-router-dom';
import { Code, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import MahrosImage from "@/assets/images/mahros.jpg";
const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white to-blue-50">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Frontend Developer, <span className="text-portfolio-blue">Blue Team Learner</span>, Contest Problem Solver
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Building beautiful user experiences while exploring cybersecurity and solving complex programming challenges.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-portfolio-blue hover:bg-blue-700 p-5">
              <Link to="/projects">
                <Code size={18} className="mr-2" />
                Explore My Projects
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-primary/100 hover:text-white p-5">
              <Link to="/contact">
                <Mail size={18} className="mr-2" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-lg w-full max-w-md mx-auto md:ml-auto">
            <img
              src={MahrosImage}
              alt="Mahros AL-Qabasy"
              className="object-cover w-full h-full bg-blue-200"
            />
          </div>
          <div className="absolute -z-10 w-72 h-72 rounded-full bg-portfolio-green opacity-10 -top-10 -right-10"></div>
          <div className="absolute -z-10 w-40 h-40 rounded-full bg-portfolio-cyan opacity-10 bottom-10 -left-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
