// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import SignupPage from './routes/SignupPage';
import HomePage from './routes/HomePage';
import OnePage from './routes/OnePage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/prisma" element={<HomePage />} />
          <Route path="/" element={<OnePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
