
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EducationHeader from '@/components/education/EducationHeader';
import FormalEducationTimeline from '@/components/education/FormalEducationTimeline';
import CertificationsSection from '@/components/education/CertificationsSection';
import FeaturedCoursesSection from '@/components/education/FeaturedCoursesSection';
import DownloadCTA from '@/components/education/DownloadCTA';
import { formalEducation, platforms, featuredCourses } from '@/data/education';

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <EducationHeader />
        
        {/* Formal Education Timeline */}
        <FormalEducationTimeline educationItems={formalEducation} />
        
        {/* Certifications & Online Learning */}
        <CertificationsSection platforms={platforms} />
        
        {/* Featured Courses */}
        <FeaturedCoursesSection courses={featuredCourses} />
        
        {/* Download All Certificates */}
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Education;
