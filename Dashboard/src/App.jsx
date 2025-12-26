
import React, { useState } from 'react';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import './styles/global.css';
import './styles/landing.css';
import './styles/dashboard.css';

const App = () => {
  const [page, setPage] = useState('landing');
  const [activeDept, setActiveDept] = useState('fire');
  
  const handleSelectDept = (dept) => {
    setActiveDept(dept);
    setPage('dashboard');
  };
  
  const handleNavigate = (newPage) => {
    setPage(newPage);
  };
  
  return (
    <div className="app">
      {page === 'landing' ? (
        <Landing onSelectDept={handleSelectDept} />
      ) : (
        <Dashboard 
          activeDept={activeDept} 
          setActiveDept={setActiveDept}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
};

export default App;