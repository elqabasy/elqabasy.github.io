import React from 'react';
import { useGithub } from '@/contexts/GithubContext';
import StatsCard from './StatsCard';
import SectionHeader from './SectionHeader';
import { Github, GitBranch, BookKeyIcon, Users } from 'lucide-react';
import ChartContainer from './ChartContainer';
import LanguageChart from './LanguageChart';
import RepoCard from './RepoCard';
import ContributionsChart from './ContributionsChart';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import CollapsibleSection from './CollapsibleSection';
import GithubTabs from './GithubTabs';

const GithubSection: React.FC = () => {
  const { githubStats, isLoading, error, isRateLimited } = useGithub();

  if (error && !isRateLimited) {
    return (
      <section className="mb-16 animate-fade-in">
        <SectionHeader
          title="GitHub Insights"
          description="Activity and contributions across repositories"
          icon={<Github size={24} />}
        />
        <Alert variant="destructive" className="mt-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Error loading GitHub data: {error.message}
          </AlertDescription>
        </Alert>
      </section>
    );
  }

  return (
    <section className="mb-16 animate-fade-in">
      <SectionHeader
        title="GitHub Insights"
        description="Activity and contributions across repositories"
        icon={<Github size={24} />}
      />

      {isRateLimited && (
        <Alert className="mb-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            GitHub API rate limit exceeded. Using cached data. Real-time data will be available later.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {isLoading ? (
          <>
            <Skeleton className="h-[100px]" />
            <Skeleton className="h-[100px]" />
          </>
        ) : githubStats ? (
          <>
            <StatsCard
              title="Total Repositories"
              value={githubStats.totalRepositories}
              icon={<BookKeyIcon size={24} />}
              color="blue"
              className="animate-fade-in"
            />
            <StatsCard
              title="Total Commits"
              value={githubStats.totalCommits || 0}
              icon={<GitBranch size={24} />}
              color="green"
              className="animate-fade-in delay-100"
            />
            <StatsCard
              title="Followers & Following"
              value={`${githubStats.followerCount} / ${githubStats.followingCount}`}
              icon={<Users size={24} />}
              color="purple"
              className="animate-fade-in delay-200"
            />
          </>
        ) : null}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {isLoading ? (
          <>
            <Skeleton className="h-[300px]" />
            <Skeleton className="h-[300px]" />
          </>
        ) : githubStats ? (
          <>
            <ChartContainer
              title="Language Distribution"
              description="Programming languages used across repositories"
              height={300}
              className="animate-fade-in delay-300"
            >
              <LanguageChart languages={githubStats.languages} />
            </ChartContainer>

            <ChartContainer
              title="Monthly Contributions"
              description="Activity over the past months"
              height={300}
              className="animate-fade-in delay-400"
            >
              <ContributionsChart contributions={githubStats.contributions} />
            </ChartContainer>
          </>
        ) : null}
      </div>

      <CollapsibleSection
        title="Network"
        description="Followers, following, and starred repositories"
        icon={<Users size={18} />}
        defaultOpen={true}
        className="mb-8 animate-fade-in delay-500"
      >
        <GithubTabs />
      </CollapsibleSection>

      <CollapsibleSection
        title="Top Starred Projects"
        description="Most popular repositories"
        icon={<Github size={18} />}
        defaultOpen={true}
        className="animate-fade-in delay-600"
      >
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Skeleton className="h-[120px]" />
            <Skeleton className="h-[120px]" />
          </div>
        ) : githubStats ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {githubStats.topStarredProjects.map((project) => (
              <RepoCard
                key={project.name}
                name={project.name}
                stars={project.stars}
                url={project.url}
              />
            ))}
            {githubStats.topStarredProjects.length === 0 && (
              <p className="text-gray-500 col-span-full text-center py-4">
                No starred projects found.
              </p>
            )}
          </div>
        ) : null}
      </CollapsibleSection>
    </section>
  );
};

export default GithubSection;
