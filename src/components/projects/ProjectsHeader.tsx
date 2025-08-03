
const ProjectsHeader = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A curated list of my work across software domains and problem-solving disciplines
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <span className="tag bg-blue-100 text-blue-800">Frontend</span>
          <span className="tag bg-green-100 text-green-800">Backend</span>
          <span className="tag bg-purple-100 text-purple-800">Full-Stack</span>
          <span className="tag bg-red-100 text-red-800">Cybersecurity</span>
          <span className="tag bg-yellow-100 text-yellow-800">Databases</span>
          <span className="tag bg-indigo-100 text-indigo-800">AI</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHeader;
