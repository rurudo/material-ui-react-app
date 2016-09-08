import { combineReducers } from 'redux';
import nameList from './NameList';
import orderTable from './OrderTable';

const rootReducer = combineReducers({
  nameList,
  orderTable
});

export default rootReducer;
