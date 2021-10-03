import React from 'react';

const ArtCard = ({ artObject }) => {

  return (
    <div className="collection-col">
      <div className="collection-col__card" key={artObject.id}>
        <h3>{artObject.title}</h3>
        <img src={artObject.headerImage.url} alt="kunst-van-Rembrandt" className="paint-sample" />
      </div>
    </div>
  )
}

export default ArtCard;
