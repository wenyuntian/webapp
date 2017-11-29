import { combineReducers } from 'redux';
import userInfor from './home/index';
import storeList from './store'

const reducers = combineReducers({
    userInfor,
    storeList
});

export default reducers