import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import './index.css';
import App from './App';
import TestPage from './pages/TestPage';
import BaseLayout from './common/layout/BaseLayout'

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <BaseLayout>
            <Routes>
              <Route path="/" element={<App />}/>
              <Route path="/test_page" element={<TestPage />}/>
            </Routes>
          </BaseLayout>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
