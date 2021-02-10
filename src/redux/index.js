import { combineReducers } from "redux";
import { reducer as toastrReducer } from 'react-redux-toastr';
import userReducer from './user/reducers/index';
import authReducer from './auth/reducers/index';
import languageReducer from './language/reducers/index';

// Commom combine reducer
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    language: languageReducer,
    toastr: toastrReducer
});

export default rootReducer;