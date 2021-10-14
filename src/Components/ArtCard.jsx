import React from 'react';

const ArtCard = ({ artObject, setObjectDetails }) => {

  const clickHandler = () => {
    return setObjectDetails(artObject);
  };

  return (
    <div className="collection-col" onClick={clickHandler}>
      <div className="collection-col__card" key={artObject.id}>
        <div className="collection-col__card collection-col__card--front">
          <img src={artObject.webImage.url ? artObject.webImage.url : artObject.title} alt="art-object" className="paint-sample" />
        </div>

        <div className="collection-col__card collection-col__card--back">
          <h3>{artObject.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default ArtCard;
