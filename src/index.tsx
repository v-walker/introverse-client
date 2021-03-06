// @ts-nocheck
import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { PrivateRoute } from './features/user/PrivateRoute';
import RequireAuth from './features/user/RequireAuth';


import './index.css';
import "./fonts/Doom2016Text-GOlBq.ttf"

/** import components/pages for routes here */
import BaseLayout from './common/layout/BaseLayout';
import App from './App';
import QuizPage from './pages/QuizPage';
import RecommendationsPage from './pages/RecommendationsPage';
import AboutPage from './pages/AboutPage';
import DoomPage from './pages/DoomPage';

const persistor = persistStore(store);





ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <BaseLayout>
            <Routes>
              <Route path="/" element={<App />}/>
              
              <Route path="/quiz" element={  <RequireAuth ><QuizPage /></RequireAuth>}/>
              <Route path="/recommendations" element={<RequireAuth ><RecommendationsPage /></RequireAuth>}/>
              <Route path="/about" element={<RequireAuth ><AboutPage /></RequireAuth>}/>
              <Route path="/itrunsdoom" element={<RequireAuth ><DoomPage /></RequireAuth>}/>
            </Routes> 
          </BaseLayout>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
