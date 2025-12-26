import React from 'react';

const Landing = ({ onSelectDept }) => {
  return (
    <div className="landing-page">
      <div className="landing-bg"></div>
      <div className="landing-content">
        <div className="landing-logo">🛡️ Raksha Connect</div>
        <h1 className="landing-title">Raksha Connect</h1>
        <p className="landing-subtitle">
          Real-time SOS monitoring and response coordination. Empowering first
          responders to save lives.
        </p>
        
        <div className="dashboard-selection">
          <h2>Choose Your Dashboard</h2>
          <p>Access specialized dashboards for Fire, Police, and Ambulance services.</p>
          
          <div className="dept-buttons">
            <button className="dept-btn" onClick={() => onSelectDept('fire')}>
              <span className="dept-icon">🔥</span>
              <span>Fire Dept.</span>
            </button>
            <button className="dept-btn" onClick={() => onSelectDept('police')}>
              <span className="dept-icon">👮</span>
              <span>Police Dept.</span>
            </button>
            <button className="dept-btn" onClick={() => onSelectDept('ambulance')}>
              <span className="dept-icon">🚑</span>
              <span>Ambulance</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
