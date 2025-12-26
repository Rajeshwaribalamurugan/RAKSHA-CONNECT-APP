import React from 'react';

const Sidebar = ({ activeDept, setActiveDept, onNavigate }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header" onClick={() => onNavigate('landing')}>
        <div className="logo">🛡️</div>
        <h2>Raksha Connect</h2>
      </div>
      <nav className="sidebar-nav">
        <div 
          className={`nav-item ${activeDept === 'fire' ? 'active fire-active' : ''}`}
          onClick={() => setActiveDept('fire')}
        >
          <span className="nav-icon">🔥</span>
          <span>Fire Department</span>
        </div>
        <div 
          className={`nav-item ${activeDept === 'police' ? 'active police-active' : ''}`}
          onClick={() => setActiveDept('police')}
        >
          <span className="nav-icon">👮</span>
          <span>Police Department</span>
        </div>
        <div 
          className={`nav-item ${activeDept === 'ambulance' ? 'active ambulance-active' : ''}`}
          onClick={() => setActiveDept('ambulance')}
        >
          <span className="nav-icon">🚑</span>
          <span>Ambulance</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
