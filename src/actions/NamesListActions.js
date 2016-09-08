import * as types from '../constants/NamesListActionTypes';

export function addTodo(text, listNo) {
  return {
    type: types.ADD_TODO,
    text,
    listNo
  };
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id
  };
}

export function editTodo(id, text) {
  return {
    type: types.EDIT_TODO,
    id,
    text
  };
}

export function markTodo(id) {
  return {
    type: types.MARK_TODO,
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
