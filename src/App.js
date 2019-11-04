import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router'; // react-router v4
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import configureStore, { history } from './redux/configureStore';
import logo from './logo.svg';
import './App.css';

import Calendar from './containers/Calendar'

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
    useNextVariants: true,
  },
});

const initialState = {};

const store = configureStore(initialState);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route path="/" component={Calendar} />
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
