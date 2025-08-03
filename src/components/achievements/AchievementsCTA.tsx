
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Handshake } from "lucide-react"; // or the correct icon library and icon name

const AchievementsCTA = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container text-center">
        <div className="flex justify-center mb-4">
          <Handshake size={48} className="text-portfolio-blue" />

        </div>
        <h2 className="text-3xl font-bold mb-4">Let's Achieve More Together!</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Interested in collaborating or have an exciting project idea? Let's
          connect and create something remarkable.
        </p>
        <Button asChild className="bg-portfolio-blue hover:bg-blue-700">
          <Link to="/contact">
            Get in Touch
          </Link>
        </Button>
      </div>
    </section >
  );
};

export default AchievementsCTA;
