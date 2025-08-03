
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";

interface HighlightProps {
  category: string;
  date: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  badge: string;
}

const Highlight = ({ category, date, title, description, link, linkText, badge }: HighlightProps) => {
  return (
    <div className="card p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <Badge variant="outline" className="bg-blue-50 text-portfolio-blue border-blue-200">{category}</Badge>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Link
        to={link}
        className="text-portfolio-blue font-medium hover:underline inline-flex items-center group mt-2"
      >
        {linkText}
        <ArrowRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

const RecentHighlights = () => {
  const highlights = [
    // {
    //   category: "Cybersecurity",
    //   date: "Sept 16, 2023",
    //   title: "Analyzing Common Web Vulnerabilities",
    //   description: "An in-depth exploration of XSS, CSRF, and SQL injection attacks with practical defense strategies.",
    //   link: "/write-ups/web-vulnerabilities",
    //   linkText: "Read Write-up",
    //   badge: "Security"
    // },
    {
      category: "Frontend Development",
      date: "Apr 2, 2025",
      title: "Cura-Agent",
      description: "A hospital information system, supports LLMs.",
      link: "https://mahros-alqabasy.github.io/cura-agent",
      linkText: "See Project",
      badge: "React"
    },
    {
      category: "BashScript",
      date: "May 15, 2024",
      title: "Picoctf",
      description: "A BashScript tool, find the picoctf flag from any directory, and formate it.",
      link: "https://www.github.com/mahros-alqabasy/picoctf",
      linkText: "View Source Code",
      badge: "Code"
      // contest
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="section-title text-center">Recent Highlights</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {highlights.map((highlight, index) => (
            <Highlight key={index} {...highlight} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentHighlights;
