import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HOME_PATH } from './router/router-paths';

import LaunchesHomePage from "./components/LaunchesHomePage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Route exact path={HOME_PATH} component={LaunchesHomePage} />
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
