import React from 'react';
import GitHubLatestRepo from './GitHubLatestRepo';
import TopRepo from './TopRepo';
import RepoCategories from './RepoCategories';
import './Home.css';

const topRepositories = [
  // Define your top repositories here
  {
    id: 1,
    name: 'Super AI Pets',
    description: 'Description for Repo 1',
    url: 'https://github.com/user/repo1',
    category: 'Web Development',  
  },
  // Add more repositories
];

function Home() {
  return (
    <div className="home">
      <GitHubLatestRepo />
      
      <h2>Top Repositories</h2>
      <div className="top-repos">
        {topRepositories.map(repo => (
          <TopRepo
            key={repo.id}
            name={repo.name}
            description={repo.description}
            url={repo.url}
          />
        ))}
      </div>
      
      <RepoCategories repositories={topRepositories} />
      
      {/* Add more sections/content here */}
    </div>
  );
}

export default Home;