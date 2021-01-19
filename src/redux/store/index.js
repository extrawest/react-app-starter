import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import rootReducer from "../index";

const persistConfig = {
    key: "primary",
    storage: storage,
    whitelist: ["auth", "user"],
};
const pReducer = persistReducer( persistConfig, rootReducer );

const middleware = composeWithDevTools( applyMiddleware( 
	thunk, 
	logger
) );

// Store with redux-persist (save stores in browser local storage )
const store = createStore(
    pReducer,
    process.env.NODE_ENV === "development" ? middleware : applyMiddleware( thunk ),
);

const persistor = persistStore( store );

export { persistor, store };