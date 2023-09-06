import React, { useState } from 'react';

function RepoCategories({ repositories }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Data Science', 'Mobile Apps', /* Add more categories */];

  const filteredRepos = selectedCategory === 'All'
    ? repositories
    : repositories.filter(repo => repo.category === selectedCategory);

  return (
    <div className="repo-categories">
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <button onClick={() => setSelectedCategory(category)}>{category}</button>
          </li>
        ))}
      </ul>
      <div className="repo-list">
        {filteredRepos.map(repo => (
          <div key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepoCategories;