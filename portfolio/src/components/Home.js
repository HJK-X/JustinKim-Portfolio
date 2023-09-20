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
    description: 'A reinforcement based learning algorithm for Super Auto Pets',
    url: 'https://github.com/HJK-X/Super-Auto-Pets',
    category: ['Deep Learning'],  
  },

  {
    id: 2,
    name: 'Password Manager',
    description: 'Password manager',
    url: 'https://github.com/HJK-X/password-manager',
    category: ['Crytography'],  
  },
  {
    id: 3,
    name: 'Portfolio Website',
    description: 'My portfolio',
    url: 'https://github.com/HJK-X/JustinKim-Portfolio',
    category: ['Web Design'],  
  },
  {
    id: 4,
    name: 'ReCodeZ',
    description: 'A beginner-friendly online development environment',
    url: 'https://github.com/HJK-X/ReCodeZ',
    category: ['Web Design', 'AWS'],  
  }

  
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