import React from 'react';
import ArtCard from './ArtCard';

const Collection = (props) => {
  return (
    <section className="collection-container">
      <div className="collection-row">
        {
          props.artObjects.map((obj) => {
            return (
              <ArtCard artObject={obj} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Collection;
