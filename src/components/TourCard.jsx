import React, { useState } from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-details">
        <h2>{name}</h2>
        <h3>${price}</h3>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? ' Show Less' : ' Read More'}
          </button>
        </p>
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    </article>
  );
}

export default TourCard;