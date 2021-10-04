import React from 'react';
import ArtCard from './ArtCard';

const Collection = (props) => {
  return (
    <div className="collection-row">
      {
        props.artObjects.map((obj) => {
          return <ArtCard artObject={obj} />
        })
      }
    </div>
  )
}

export default Collection;
