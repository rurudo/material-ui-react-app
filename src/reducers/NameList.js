import { ADD_NAME, DELETE_NAME, EDIT_NAME, MARK_NAME, MARK_ALL, CLEAR_MARKED }
  from '../constants/NamesListActionTypes';

const initialState = [];

export default function nameList(state = initialState, action) {
  switch (action.type) {
  case ADD_NAME:
    return [{
      id: (state.length === 0) ? 1 : state[0].id + 1,
      marked: false,
      text: action.text,
      listNo: action.listNo
    }, ...state];

  case DELETE_NAME:
    return state.filter(todo =>
      todo.id !== action.id
    );

  case EDIT_NAME:
    return state.map(todo =>
      todo.id === action.id ?
        { ...todo, text: action.text } :
        todo
    );

  case MARK_NAME:
    return state.map(todo =>
      todo.id === action.id ?
        { ...todo, marked: !todo.marked } :
        todo
    );

  case MARK_ALL:
    const areAllMarked = state.every(todo => todo.marked);
    return state.map(todo => ({
      ...todo,
      marked: !areAllMarked
    }));

  case CLEAR_MARKED:
    return state.filter(todo => todo.marked === false);

  default:
    return state;
  }
}
