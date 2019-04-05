import * as actions from './actions';

export function add(text, columnIndex) {
  return {
    type: actions.ADD,
    payload: {
      text,
      columnIndex
    }
  }
}

export function move(direction, cardIndex, columnIndex) {
  return {
    type: actions.MOVE,
    payload: {
      direction,
      cardIndex,
      columnIndex
    }
  }
}