const GITHUB_API_BASE = 'https://api.github.com';

export const githubApi = {
  // Fetch user repositories
  async getUserRepos(username, options = {}) {
    const {
      sort = 'updated',
      per_page = 10,
      page = 1,
      type = 'all'
    } = options;

    const params = new URLSearchParams({
      sort,
      per_page: per_page.toString(),
      page: page.toString(),
      type
    });

    try {
      const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?${params}`);
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      throw error;
    }
  },

  // Fetch user profile
  async getUserProfile(username) {
    try {
      const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching GitHub profile:', error);
      throw error;
    }
  },

  // Fetch repository details
  async getRepoDetails(username, repoName) {
    try {
      const response = await fetch(`${GITHUB_API_BASE}/repos/${username}/${repoName}`);
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching repository details:', error);
      throw error;
    }
  },

  // Fetch repository languages
  async getRepoLanguages(username, repoName) {
    try {
      const response = await fetch(`${GITHUB_API_BASE}/repos/${username}/${repoName}/languages`);
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching repository languages:', error);
      throw error;
    }
  }
};

// Rate limiting helper
export const checkRateLimit = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/rate_limit`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error checking rate limit:', error);
    return null;
  }
};
