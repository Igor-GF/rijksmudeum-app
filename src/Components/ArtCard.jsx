import React from 'react';

const ArtCard = ({ artObject }) => {

  return (
    <div className="collection-container--card" key={artObject.id}>
      <h2>{artObject.title}</h2>
      <img src={artObject.headerImage.url} alt="kunst-van-Rembrandt" className="paint-sample" />
    </div>
  )
}

export default ArtCard;
