
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-portfolio-blue text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in working together?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="secondary" className="bg-white text-portfolio-blue hover:bg-gray-100">
            <Link to="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="default" className="border border-white text-white bg-blue-600">
            <Link to="/projects">View My Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
