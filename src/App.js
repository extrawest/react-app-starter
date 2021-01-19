import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";
import ReduxToastr from 'react-redux-toastr';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import Spinner from "components/common/Spinner";
import Routes from "routes";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { AbilityContext } from 'permissions/Can';
import ability from "permissions/ability";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

// Generate unique class name before all generation classes
const generateClassName = createGenerateClassName({
  seed: process.env.REACT_APP_NAME,
  productionPrefix: process.env.REACT_APP_NAME
});

const App = () => {
  return (
    // Redux store provider
    <Provider store={store}>
      {/* // Redux persistor gate */}
      <PersistGate loading={<Spinner />} persistor={persistor}>
        {/* Browser Router */}
        <BrowserRouter>
          {/* Permissions Casl Context */}
          <AbilityContext.Provider value={ability}>
            {/* Material UI theme context Context */}
            <StylesProvider generateClassName={generateClassName} injectFirst={true}> 
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes />
              </ThemeProvider>
            </StylesProvider>
          </AbilityContext.Provider>
        </BrowserRouter>
      </PersistGate>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="bottom-right"
        getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick  
      />
    </Provider>
  );
};

export default App;
