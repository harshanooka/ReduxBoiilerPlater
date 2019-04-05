import produce from "immer";

import * as actions from '../actions/actions';

export default function(state = {}, action) {
  switch(action.type) {
    case actions.ADD: {
      let {text, columnIndex} = action.payload;
      return produce(state, draft => {
        draft.columns[columnIndex].Cards.push({text});
      })
    }
    case actions.MOVE: {
      let {direction, cardIndex, columnIndex} = action.payload;
      return produce(state, draft => {
        let card = draft.columns[columnIndex].Cards[cardIndex];
        draft.columns[columnIndex].Cards = draft.columns[columnIndex].Cards.filter((card, index) => cardIndex !== index);
        draft.columns[columnIndex+direction].Cards.push(card);
      })
    }
    default: 
    return produce(state, draft => draft);
  }
}