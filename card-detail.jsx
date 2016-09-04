import React from 'react';
//cards prop is imported from the card-review component
const CardDetail = ({card}) => {
  const { english, korean, createdOn } = card;

  return (
    <div>
      <h1>{english}</h1>
    </div>
  );
};

export default CardDetail;
