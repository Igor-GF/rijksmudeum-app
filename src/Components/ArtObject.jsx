import React from 'react';

const ArtObject = ({ longTitle, webImage }) => {
  return (
    <section className="details-container">

      <div className="details-container--text">
        <h4>Full title:</h4>
        <h2>{longTitle}</h2>
        {/* <h4>Image width: {webImage.width}</h4>
        <h4>Image height: {webImage.height}</h4> */}
      </div>

      <div className="details-container--paint">
        {/* <img src={webImage.url} alt="paint" /> */}
      </div>
    </section>
  )
}

export default ArtObject;
