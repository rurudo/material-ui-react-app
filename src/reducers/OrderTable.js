import { SELECT_POSITION, SELECT_NAME, SELECT_INDEX } from '../constants/OrderTableActionTypes';

import cookie from 'component-cookie'

const key = 'orderTable';
const initialJson = cookie(key);

const initialArray = [];
for(let i = 0; i < 10; i++) {
    initialArray.push({
       position: '',
       name: '',
       id: i
    });
}

const initialState = initialJson === undefined? initialArray :
  JSON.parse(initialJson).array;
  
export default function orderTable(state = initialState, action) {
  const list = _orderTable(state, action);
  const values = {};
  values.array = list;
  cookie(key, JSON.stringify(values));
  return list;
}

const swapKeys = (array, key,index1,index2) => { 
  const newArray = array.slice();
  const keyValue = array[index1][key];
  newArray[index1][key] = array[index2][key];
  newArray[index2][key] = keyValue;
  return newArray; 
};

function _orderTable(state = initialState, action) {
  switch (action.type) {
  case SELECT_INDEX:
    return swapKeys(state, 'id', action.id, action.index);
    
  case SELECT_POSITION:
    const target = state.find(row => row.position === action.index);
    if(target === undefined) {
      // Create new position
      return state.map(row =>
        row.id === action.id ?
          { ...row, position: action.index } :
          row
      );
    } else {
      // Swap position
      return swapKeys(state, 'position', action.id, target.id);
    }


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
