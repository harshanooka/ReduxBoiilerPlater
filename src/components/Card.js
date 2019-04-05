import React from 'react'

export default function Card(props) {
  let {card, columnIndex, cardIndex, move} = props;
  const LEFT = -1, RIGHT = 1;
  const moveCard = (direction) => {
    move(direction, cardIndex, columnIndex);
  }
  return (
    <div className="Card">
      {
        columnIndex !== 0 && <button onClick={() => moveCard(LEFT)}>{'<'}</button>        
      }
      <span>{card.text}</span>
      {
        columnIndex !== 3 && <button onClick={() => moveCard(RIGHT)}>{'>'}</button>
      }
    </div>
  )
}
