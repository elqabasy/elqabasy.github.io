
import React from 'react';

const BlogHeader = () => {
  return (
    <section className="bg-white py-12 border-b">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles & Writeups</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Technical deep-dives, cybersecurity walkthroughs, tutorials, and career reflections.
        </p>
      </div>
    </section>
  );
};

export default BlogHeader;
