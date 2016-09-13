import { ADD_NAME, DELETE_NAME, EDIT_NAME, MARK_NAME, MARK_ALL, CLEAR_MARKED }
  from '../constants/NamesListActionTypes';

const key = 'nameList';
const initialJson = window.localStorage.getItem(key);
const initialState = initialJson === null? [] :
  JSON.parse(initialJson).array;

export default function nameList(state = initialState, action) {
  const list = _nameList(state, action);
  const values = {};
  values.array = list;
  window.localStorage.setItem(key, JSON.stringify(values));
  return list;
}

function _nameList(state = initialState, action) {
  switch (action.type) {
  case ADD_NAME:
    return [{
      id: (state.length === 0) ? 1 : state[0].id + 1,
      marked: false,
      text: action.text,
      listNo: action.listNo
    }, ...state];

  case DELETE_NAME:
    return state.filter(name =>
      name.id !== action.id
    );

  case EDIT_NAME:
    return state.map(name =>
      name.id === action.id ?
        { ...name, text: action.text } :
        name
    );

  case MARK_NAME:
    return state.map(name =>
      name.id === action.id ?
        { ...name, marked: !name.marked } :
        name
    );

  case MARK_ALL:
    const areAllMarked = state.every(name => name.marked);
    return state.map(name => ({
      ...name,
      marked: !areAllMarked
    }));

  case CLEAR_MARKED:
    return state.filter(name => name.marked === false);

  default:
    return state;
  }
}
