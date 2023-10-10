import './App.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { extend } from 'react-three-fiber';
import Background from './components/backgroud';
import ConfigForm from './components/configForm';
import TokenForm from './components/tokenForm';
import { BrowserRouter as Router, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React, { useState } from 'react';

extend({OrbitControls});

function ProtectedWrapper() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
      // Check session validity
      fetch('http://localhost:3001/check-session', { credentials: 'include' })
      .then(res => res.json())
          .then(data => {
            console.log(data)
              if (data.authenticated) {
                  setIsAuthenticated(true);
              } else {
                  navigate('/');
              }
          })
          .catch(error => {
              console.error("Error checking session:", error);
              navigate('/');
          })
          .finally(() => {
              setIsLoading(false);
          });
  }, [navigate]);

  if (isLoading) {
      return <div>Loading...</div>; // Display a loading indicator while checking session
  }

  if (!isAuthenticated) {
      return null; // This will never be shown as the useEffect will navigate away if not authenticated
  }

  return <ConfigForm />;
}

function App() {
  return (
      <div className="app-container">
          <Background />
          <div className="content-container">
              <Router>
                  <Routes>
                      <Route path="/" element={<TokenForm />} />
                      <Route path="/config" element={<ProtectedWrapper />} />
                  </Routes>
              </Router>
          </div>
      </div>
  );
}

export default App;
