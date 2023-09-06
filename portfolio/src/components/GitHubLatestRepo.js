import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GitHubLatestRepo() {
  const [latestRepo, setLatestRepo] = useState({});

  useEffect(() => {
    // Your GitHub username
    const username = 'HJK-X';
    // GitHub API endpoint for your latest repo
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=1`;

    axios.get(apiUrl)
      .then(response => {
        const latest = response.data[0];
        setLatestRepo(latest);
      })
      .catch(error => {
        console.error('Error fetching latest repo:', error);
      });
  }, []);

  return (
    <div className="latest-repo">
      <h2>Latest GitHub Repo</h2>
      <p>{latestRepo.name}</p>
      <p>{latestRepo.description}</p>
      <a href={latestRepo.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

export default GitHubLatestRepo;