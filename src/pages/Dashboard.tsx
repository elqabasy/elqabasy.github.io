
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import GithubSection from '@/components/dashboard/GithubSection';
import CybersecuritySection from '@/components/dashboard/CybersecuritySection';
import CompetitiveProgrammingSection from '@/components/dashboard/CompetitiveProgrammingSection';
import CertificationsSection from '@/components/dashboard/CertificationsSection';
import CommunitySection from '@/components/dashboard/CommunitySection';
import stats from '@/data/stats';
import { Separator } from '@/components/ui/separator';
import { GithubProvider } from '@/contexts/GithubContext';
import GithubUserSelector from '@/components/dashboard/GithubUserSelector';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container py-10">
        <DashboardHeader />
        
        <GithubProvider>
          <div className="mb-6 flex justify-end">
            <GithubUserSelector />
          </div>
          <GithubSection />
          <Separator className="my-8" />
        </GithubProvider>

        <CybersecuritySection data={stats.cybersecurity} />
        <Separator className="my-8" />

        <CompetitiveProgrammingSection data={stats.competitiveProgramming} />
        <Separator className="my-8" />

        <CertificationsSection data={stats.certifications} />
        <Separator className="my-8" />

        <CommunitySection data={stats.community} />
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
