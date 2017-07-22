import { combineReducers } from 'redux';


const INITIAL_STATE = {
  test : 'hello'
};

export default combineReducers({
	auth_register: () => INITIAL_STATE
});
