import { combineReducers } from "redux";
import { reducer as toastrReducer } from 'react-redux-toastr';
import userReducer from './user/reducers/index';
import authReducer from './auth/reducers/index';

// Commom combine reducer
const rootReducer = combineReducers({
    authReducer,
    userReducer,
    toastr: toastrReducer
});

export default rootReducer;