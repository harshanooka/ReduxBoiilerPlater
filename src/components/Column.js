import React from 'react';


import Card from './Card';

export default function Column({column, columnIndex, add, move}) {
  let cardsList = column.Cards.map((card, cardIndex) => 
    <Card key={cardIndex} card={card} columnIndex={columnIndex} cardIndex={cardIndex} move={move}/>
  )

  const addCard = () => {
    let text = window.prompt('Provide the name of the card');
    text && text.length && add(text, columnIndex);
  }
  return (
    <div className="Column">
      <div className="Column-header">{column.name}</div>
      <div className="Cards-container">
        {cardsList}
      </div>
      <button onClick={addCard}>Add a Card</button>
    </div>
  )
}
