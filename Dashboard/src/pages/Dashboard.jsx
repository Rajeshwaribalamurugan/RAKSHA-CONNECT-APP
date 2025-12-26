import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import AlertCard from '../components/AlertCard';
import IncidentMap from '../components/IncidentMap';
import { alertsData } from '../data/alertsData';

const Dashboard = ({ activeDept, setActiveDept, onNavigate }) => {
  const [alerts, setAlerts] = useState(alertsData);
  const [priorityFilter, setPriorityFilter] = useState('All'); // 'All', 'High', 'Low'
  const [statusFilter, setStatusFilter] = useState('All'); // 'All', 'Pending', 'Assigned'
  
  const currentAlerts = alerts[activeDept] || [];
  
  // Filter by priority and status
  let filteredAlerts = currentAlerts;
  
  if (priorityFilter !== 'All') {
    filteredAlerts = filteredAlerts.filter(a => a.priority === priorityFilter);
  }
  
  if (statusFilter !== 'All') {
    filteredAlerts = filteredAlerts.filter(a => a.status === statusFilter);
  }
  
  const pendingAlerts = filteredAlerts.filter(a => a.status === 'Pending');
  const assignedAlerts = filteredAlerts.filter(a => a.status === 'Assigned');
  
  // Count alerts by priority
  const highPriorityCount = currentAlerts.filter(a => a.priority === 'High').length;
  const lowPriorityCount = currentAlerts.filter(a => a.priority === 'Low').length;
  const pendingCount = currentAlerts.filter(a => a.status === 'Pending').length;
  const assignedCount = currentAlerts.filter(a => a.status === 'Assigned').length;
  
  const handleAssign = (id) => {
    console.log('Assigning alert:', id);
    setAlerts(prev => ({
      ...prev,
      [activeDept]: prev[activeDept].map(alert =>
        alert.id === id ? { ...alert, status: 'Assigned' } : alert
      )
    }));
  };
  
  const handleResolve = (id) => {
    console.log('Resolving alert:', id);
    setAlerts(prev => ({
      ...prev,
      [activeDept]: prev[activeDept].filter(alert => alert.id !== id)
    }));
  };
  
  const handlePriorityFilter = (priority) => {
    console.log('Filtering by priority:', priority);
    setPriorityFilter(priority);
  };
  
  const handleStatusFilter = (status) => {
    console.log('Filtering by status:', status);
    setStatusFilter(status);
  };
  
  const handlePriorityBadgeClick = (priority) => {
    // Toggle filter when badge is clicked
    if (priorityFilter === priority) {
      setPriorityFilter('All');
    } else {
      setPriorityFilter(priority);
    }
  };
  
  const handleStatusBadgeClick = (status) => {
    // Toggle filter when badge is clicked
    if (statusFilter === status) {
      setStatusFilter('All');
    } else {
      setStatusFilter(status);
    }
  };
  
  return (
    <div className="dashboard">
      <Sidebar 
        activeDept={activeDept} 
        setActiveDept={setActiveDept}
        onNavigate={onNavigate}
      />
      
      <div className="main-content">
        <div className="user-profile">
          <div className="profile-avatar">U</div>
        </div>
        
        <div className="stats-container">
          <StatCard 
            title="Total Active Alerts" 
            value={currentAlerts.length} 
            icon="⚠️"
          />
          <StatCard 
            title="Avg. Resolution Time" 
            value="0 min" 
            icon="🕐"
          />
          <StatCard 
            title="Resolved Today" 
            value="0" 
            icon="✓"
          />
        </div>
        
        {/* Priority Filter Buttons */}
        <div className="filter-section">
          <h3>Filter by Priority:</h3>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${priorityFilter === 'All' ? 'active' : ''}`}
              onClick={() => handlePriorityFilter('All')}
            >
              All ({currentAlerts.length})
            </button>
            <button 
              className={`filter-btn filter-high ${priorityFilter === 'High' ? 'active' : ''}`}
              onClick={() => handlePriorityFilter('High')}
            >
              🔴 High Priority ({highPriorityCount})
            </button>
            <button 
              className={`filter-btn filter-low ${priorityFilter === 'Low' ? 'active' : ''}`}
              onClick={() => handlePriorityFilter('Low')}
            >
              🟢 Low Priority ({lowPriorityCount})
            </button>
          </div>
          <h3 style={{ marginTop: '1rem' }}>Filter by Status:</h3>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${statusFilter === 'All' ? 'active' : ''}`}
              onClick={() => handleStatusFilter('All')}
            >
              All ({currentAlerts.length})
            </button>
            <button 
              className={`filter-btn filter-pending ${statusFilter === 'Pending' ? 'active' : ''}`}
              onClick={() => handleStatusFilter('Pending')}
            >
              ⏳ Pending ({pendingCount})
            </button>
            <button 
              className={`filter-btn filter-assigned ${statusFilter === 'Assigned' ? 'active' : ''}`}
              onClick={() => handleStatusFilter('Assigned')}
            >
              ✅ Assigned ({assignedCount})
            </button>
          </div>
        </div>
        
        <div className="alerts-section">
          <div className="alerts-column">
            <div className="column-header">
              <h2>Pending Alerts</h2>
              <span className="count-badge">{pendingAlerts.length}</span>
            </div>
            {pendingAlerts.length === 0 ? (
              <div className="empty-state">
                No pending alerts matching the current filters.
              </div>
            ) : (
              pendingAlerts.map(alert => (
                <AlertCard 
                  key={alert.id} 
                  alert={alert} 
                  onAssign={handleAssign}
                  onResolve={null}
                  onPriorityClick={handlePriorityBadgeClick}
                  onStatusClick={handleStatusBadgeClick}
                />
              ))
            )}
          </div>
          
          <div className="alerts-column">
            <div className="column-header">
              <h2>Assigned Incidents</h2>
              <span className="count-badge">{assignedAlerts.length}</span>
            </div>
            {assignedAlerts.length === 0 ? (
              <div className="empty-state">
                No assigned incidents matching the current filters.
              </div>
            ) : (
              assignedAlerts.map(alert => (
                <AlertCard 
                  key={alert.id} 
                  alert={alert} 
                  onAssign={null}
                  onResolve={handleResolve}
                  onPriorityClick={handlePriorityBadgeClick}
                  onStatusClick={handleStatusBadgeClick}
                />
              ))
            )}
          </div>
        </div>
      </div>
      
      <IncidentMap />
    </div>
  );
};

export default Dashboard;