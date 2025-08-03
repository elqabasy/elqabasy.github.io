import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { GithubProfile, GithubRepo, GithubEvent, GithubStats, GithubFollower } from '@/types/github';
import { 
  fetchGithubProfile,
  fetchGithubRepos,
  fetchGithubEvents,
  fetchGithubFollowers,
  fetchGithubFollowing,
  fetchGithubStarred,
  getLanguageDistribution,
  getMonthlyContributions,
  getTopStarredProjects
} from '@/lib/api/github';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

export type GithubUsername = 'elqabasy' | 'mahros-alqabasy' | 'alqabasy';

interface GithubContextType {
  currentUsername: GithubUsername;
  setCurrentUsername: (username: GithubUsername) => void;
  githubStats: GithubStats | null;
  followers: GithubFollower[];
  following: GithubFollower[];
  starredRepos: GithubRepo[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
  isRateLimited: boolean;
}

const GithubContext = createContext<GithubContextType | undefined>(undefined);

export const GithubProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUsername, setCurrentUsername] = useState<GithubUsername>('elqabasy');
  const [isRateLimited, setIsRateLimited] = useState(false);
  const { toast } = useToast();

  const { 
    data: githubData,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['githubStats', currentUsername],
    queryFn: async () => {
      try {
        setIsRateLimited(false);
        const [profile, repos, events, followers, following, starred] = await Promise.all([
          fetchGithubProfile(currentUsername),
          fetchGithubRepos(currentUsername),
          fetchGithubEvents(currentUsername),
          fetchGithubFollowers(currentUsername),
          fetchGithubFollowing(currentUsername),
          fetchGithubStarred(currentUsername)
        ]);

        // Process data into the format our components expect
        const languages = getLanguageDistribution(repos);
        const contributions = getMonthlyContributions(events);
        const topStarredProjects = getTopStarredProjects(repos);

        // Calculate total commit count (estimation from events)
        const commitEvents = events.filter(event => 
          event.type === 'PushEvent' || 
          event.type === 'CommitCommentEvent'
        );

        return {
          profile,
          repos,
          events,
          followers,
          following,
          starred,
          stats: {
            totalRepositories: profile.public_repos,
            totalCommits: commitEvents.length,  // This is an approximation
            languages,
            topStarredProjects,
            contributions,
            followerCount: followers.length,
            followingCount: following.length
          }
        };
      } catch (error) {
        // Check if this is a rate limit error
        if (error.response && error.response.status === 403 && 
            error.response.data && error.response.data.message && 
            error.response.data.message.includes('rate limit')) {
          setIsRateLimited(true);
          toast({
            title: "GitHub API Rate Limit Exceeded",
            description: "Using cached data instead. Try again later.",
            variant: "default", // Changed from "warning" to "default" as warning isn't available
          });
        }
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return (
    <GithubContext.Provider
      value={{
        currentUsername,
        setCurrentUsername,
        githubStats: githubData?.stats || null,
        followers: githubData?.followers || [],
        following: githubData?.following || [],
        starredRepos: githubData?.starred || [],
        isLoading,
        error: error as Error | null,
        refetch,
        isRateLimited
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGithub = (): GithubContextType => {
  const context = useContext(GithubContext);
  if (!context) {
    throw new Error('useGithub must be used within a GithubProvider');
  }
  return context;
};
