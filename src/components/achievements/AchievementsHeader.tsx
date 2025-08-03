
import React from 'react';

const AchievementsHeader = () => {
  return (
    <section className="bg-white py-12 border-b text-center">
      <div className="container">
        <div className="flex justify-center mb-4">
          <span className="text-yellow-400 text-4xl">🏆</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Achievements</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Highlights of my journey in contests, cybersecurity, hackathons,
          certifications, and personal milestones.
        </p>
      </div>
    </section>
  );
};

export default AchievementsHeader;
