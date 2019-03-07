import { createStore } from 'redux';
import userReduser from './Reducers/userReducer';

const store = createStore(userReduser);
export default store;