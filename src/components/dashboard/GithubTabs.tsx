
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGithub } from '@/contexts/GithubContext';
import GithubUserCard from './GithubUserCard';
import RepoCard from './RepoCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Users } from 'lucide-react';


const GithubTabs: React.FC = () => {
  const { followers, following, starredRepos, isLoading, isRateLimited } = useGithub();

  const renderContent = (items: any[], renderItem: (item: any) => JSX.Element, emptyMessage: string) => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Skeleton className="h-[100px]" />
          <Skeleton className="h-[100px]" />
        </div>
      );
    }

    if (items.length === 0) {
      return <p className="text-gray-500 py-4 text-center">{emptyMessage}</p>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(renderItem)}
      </div>
    );
  };

  return (
    <div className="mb-8">
      {isRateLimited && (
        <Alert className="mb-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            GitHub API rate limit exceeded. Using cached data. Real-time data will be available later.
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="followers" className="animate-fade-in overflow-x-auto">
        <TabsList className="mb-4">
          {/* <OverflowWrapper> */}
          <TabsTrigger value="followers">Followers ({followers.length})</TabsTrigger>
          <TabsTrigger value="following">Following ({following.length})</TabsTrigger>
          <TabsTrigger value="starred">Starred Repos ({starredRepos.length})</TabsTrigger>
          {/* </OverflowWrapper> */}
        </TabsList>

        <TabsContent value="followers" className="space-y-4">
          {renderContent(
            followers,
            (follower) => <GithubUserCard key={follower.id} user={follower} />,
            "No followers found."
          )}
        </TabsContent>

        <TabsContent value="following" className="space-y-4">
          {renderContent(
            following,
            (followed) => <GithubUserCard key={followed.id} user={followed} />,
            "Not following anyone."
          )}
        </TabsContent>

        <TabsContent value="starred" className="space-y-4">
          {renderContent(
            starredRepos,
            (repo) => (
              <RepoCard
                key={repo.id}
                name={repo.name}
                stars={repo.stargazers_count}
                url={repo.html_url}
              />
            ),
            "No starred repositories found."
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GithubTabs;
