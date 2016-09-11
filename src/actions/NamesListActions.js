import * as types from '../constants/NamesListActionTypes';

export function addName(text, listNo) {
  return {
    type: types.ADD_NAME,
    text,
    listNo
  };
}

export function deleteName(id) {
  return {
    type: types.DELETE_NAME,
    id
  };
}

export function editName(id, text) {
  return {
    type: types.EDIT_NAME,
    id,
    text
  };
}

export function markName(id) {
  return {
    type: types.MARK_NAME,
    id
  };
}

export function markAll() {
  return {
    type: types.MARK_ALL
  };
}

export function clearMarked() {
  return {
    type: types.CLEAR_MARKED
  };
}
