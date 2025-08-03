
import axios from 'axios';
import { GithubProfile, GithubRepo, GithubFollower, GithubEvent } from '@/types/github';
import { storeWithExpiry, getWithExpiry } from '@/lib/storage';

import elqabasy_account from '../../data/github/elqabasy.json';
import mahros_alqabasy_account from '../../data/github/mahros-alqabasy.json';
import alqabasy_account from '../../data/github/alqabasy.json';

const BASE_URL = 'https://api.github.com';

// Create an axios instance with common configs
const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

// Fallback data for when the API is rate-limited
const FALLBACK_DATA = {
  profiles: {
    'elqabasy': elqabasy_account,
    'mahros-alqabasy': mahros_alqabasy_account,
    'alqabasy': alqabasy_account,
  },
};

// In-memory cache for API responses
const apiCache = new Map();
const CACHE_TTL = 3600000; // 1 hour in milliseconds
const SESSION_CACHE_PREFIX = 'github_';

const getFromCache = (key: string) => {
  // First check in-memory cache
  const cached = apiCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    console.log(`Using in-memory cached data for ${key}`);
    return cached.data;
  }

  // Then try localStorage
  const sessionCached = getWithExpiry<any>(`${SESSION_CACHE_PREFIX}${key}`);
  if (sessionCached) {
    console.log(`Using session cached data for ${key}`);
    // Update in-memory cache
    apiCache.set(key, {
      data: sessionCached,
      timestamp: Date.now(),
    });
    return sessionCached;
  }

  return null;
};

const setToCache = (key: string, data: any) => {
  // Set in-memory cache
  apiCache.set(key, {
    data,
    timestamp: Date.now(),
  });

  // Set localStorage cache
  storeWithExpiry(`${SESSION_CACHE_PREFIX}${key}`, data, CACHE_TTL);
};

export const fetchGithubProfile = async (username: string): Promise<GithubProfile> => {
  const cacheKey = `profile-${username}`;
  const cached = getFromCache(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const response = await githubApi.get(`/users/${username}`);
    setToCache(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);

    // Fallback to static data if rate limited or other error
    if (FALLBACK_DATA.profiles[username]) {
      console.log(`Using fallback data for ${username}`);
      return FALLBACK_DATA.profiles[username];
    }

    throw error;
  }
};

export const fetchGithubRepos = async (username: string): Promise<GithubRepo[]> => {
  const cacheKey = `repos-${username}`;
  const cached = getFromCache(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const response = await githubApi.get(`/users/${username}/repos?sort=updated&per_page=100`);
    setToCache(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
};

export const fetchGithubFollowers = async (username: string): Promise<GithubFollower[]> => {
  const cacheKey = `followers-${username}`;
  const cached = getFromCache(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const response = await githubApi.get(`/users/${username}/followers`);
    setToCache(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub followers:', error);
    return []; // Fallback to empty array
  }
};

export const fetchGithubFollowing = async (username: string): Promise<GithubFollower[]> => {
  const cacheKey = `following-${username}`;
  const cached = getFromCache(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const response = await githubApi.get(`/users/${username}/following`);
    setToCache(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub following:', error);
    return []; // Fallback to empty array
  }
};

export const fetchGithubEvents = async (username: string): Promise<GithubEvent[]> => {
  const cacheKey = `events-${username}`;
  const cached = getFromCache(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const response = await githubApi.get(`/users/${username}/events?per_page=100`);
    setToCache(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub events:', error);
    return []; // Fallback to empty array
  }
};

export const fetchGithubStarred = async (username: string): Promise<GithubRepo[]> => {
  const cacheKey = `starred-${username}`;
  const cached = getFromCache(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const response = await githubApi.get(`/users/${username}/starred`);
    setToCache(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub starred repos:', error);
    return []; // Fallback to empty array
  }
};

// Helper functions to process GitHub data
export const getLanguageDistribution = (repos: GithubRepo[]): { name: string; percentage: number }[] => {
  // Count languages
  const languageCounts: Record<string, number> = {};
  let totalReposWithLanguage = 0;

  repos.forEach(repo => {
    if (repo.language) {
      languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      totalReposWithLanguage++;
    }
  });

  // Convert to percentage
  const languages = Object.entries(languageCounts)
    .map(([name, count]) => ({
      name,
      percentage: Math.round((count / totalReposWithLanguage) * 100)
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 5); // Get top 5 languages

  return languages;
};

export const getMonthlyContributions = (events: GithubEvent[]): { month: string; count: number }[] => {
  // Group events by month
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const now = new Date();
  const lastFiveMonths: { month: string; count: number }[] = [];

  // Get the last 5 months
  for (let i = 4; i >= 0; i--) {
    const monthIndex = (now.getMonth() - i + 12) % 12;
    lastFiveMonths.push({ month: months[monthIndex], count: 0 });
  }

  // Count events per month
  events.forEach(event => {
    const eventDate = new Date(event.created_at);
    const monthName = months[eventDate.getMonth()];
    const monthEntry = lastFiveMonths.find(m => m.month === monthName);
    if (monthEntry) {
      monthEntry.count++;
    }
  });

  return lastFiveMonths;
};

export const getTopStarredProjects = (repos: GithubRepo[]): { name: string; stars: number; url: string }[] => {
  return repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3) // Show top 3 instead of 2
    .map(repo => ({
      name: repo.name,
      stars: repo.stargazers_count,
      url: repo.html_url
    }));
};
