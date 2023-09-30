import React from 'react';

function TopRepo({ name, description, url }) {
  return (
    <div className="top-repo">
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a> 
    </div>
  );
}

export default TopRepo;