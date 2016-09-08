import { SELECT_POSITION, SELECT_NAME, SELECT_INDEX } from '../constants/OrderTableActionTypes';

const initialState = [];
for(let i = 0; i < 10; i++) {
    initialState.push({
       position: '',
       name: '',
       id: i
    });
}

const swapIndices = (array,index1,index2) => { 
  const newArray = array.slice();
  const id = array[index1].id;
  newArray[index1].id = array[index2].id;
  newArray[index2].id = id;
  return newArray; 
};

export default function orderTable(state = initialState, action) {
  switch (action.type) {
  case SELECT_INDEX:
    return swapIndices(state, action.id, action.index);
    
  case SELECT_POSITION:
    return state.map(row =>
      row.id === action.id ?
        { ...row, position: action.index } :
        row
    );

  case SELECT_NAME:
    return state.map(row =>
      row.id === action.id ?
        { ...row, name: action.index } :
        row
    );

  default:
    return state;
  }
}
