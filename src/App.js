// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './components/Signup';
import LoginPage from './components/Login';
import Header from './components/Header';
import { auth } from './Firebase/firebase';

const App = () => {
  // Check if a user is logged in or not
  const currentUser = auth.currentUser;

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              currentUser ? (
                <Home currentUser={currentUser} />
              ) : (
                <>
                  <SignupPage />
                  <LoginPage />
                </>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

const Home = ({ currentUser }) => (
  <div>
    <h1>Welcome to Swapster</h1>
    {currentUser ? (
      <p>Hello, {currentUser.email}! You are logged in.</p>
    ) : (
      <>
        <SignupPage />
        <LoginPage />
      </>
    )}
  </div>
);

export default App;
