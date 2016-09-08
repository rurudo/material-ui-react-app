import * as types from '../constants/OrderTableActionTypes';

export function selectIndex(id, index) {
  return {
    type: types.SELECT_INDEX,
    id,
    index
  };
}

export function selectPosition(id, index) {
  return {
    type: types.SELECT_POSITION,
    id,
    index
  };
}

export function selectName(id, index) {
  return {
    type: types.SELECT_NAME,
    id,
    index
  };
}