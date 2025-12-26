import React from 'react';

const AlertCard = ({ alert, onAssign, onResolve, onPriorityClick, onStatusClick }) => {
  const getPriorityClass = (priority) => {
    return priority === 'High' ? 'priority-high' : 'priority-low';
  };

  const handleAssignClick = () => {
    if (onAssign) {
      console.log('Assign button clicked for alert:', alert.id);
      onAssign(alert.id);
    }
  };

  const handleResolveClick = () => {
    if (onResolve) {
      console.log('Resolve button clicked for alert:', alert.id);
      onResolve(alert.id);
    }
  };

  const handlePriorityBadgeClick = (e) => {
    e.stopPropagation();
    if (onPriorityClick) {
      console.log('Priority badge clicked:', alert.priority);
      onPriorityClick(alert.priority);
    }
  };

  const handleStatusBadgeClick = (e) => {
    e.stopPropagation();
    if (onStatusClick) {
      console.log('Status badge clicked:', alert.status);
      onStatusClick(alert.status);
    }
  };

  return (
    <div className="alert-card">
      <div className="alert-header">
        <div className="alert-user">
          <div className="user-avatar">
            {alert.name.charAt(0)}
          </div>
          <div className="user-info">
            <h3>{alert.name}</h3>
            <p>Age: {alert.age}</p>
          </div>
        </div>
        <div className="alert-badges">
          <span 
            className={`badge badge-clickable ${alert.status === 'Pending' ? 'badge-pending' : 'badge-assigned'}`}
            onClick={handleStatusBadgeClick}
            title={`Click to filter by ${alert.status}`}
          >
            {alert.status}
          </span>
          <span 
            className={`badge badge-clickable ${getPriorityClass(alert.priority)}`}
            onClick={handlePriorityBadgeClick}
            title={`Click to filter by ${alert.priority} priority`}
          >
            {alert.priority}
          </span>
        </div>
      </div>
      
      <div className="alert-content">
        <div className="alert-type">
          <span className="type-icon">⚠️</span>
          <strong>{alert.type}</strong>
          <span> - {alert.description}</span>
        </div>
        <div className="alert-location">
          <span className="location-icon">📍</span>
          <span>{alert.location}</span>
        </div>
        <div className="alert-time">
          <span className="time-icon">🕐</span>
          <span>Reported: {alert.reportedTime}</span>
        </div>
      </div>
      
      <div className="alert-actions">
        {alert.status === 'Pending' && onAssign && (
          <button 
            className="btn-assign" 
            onClick={handleAssignClick}
            type="button"
          >
            Assign →
          </button>
        )}
        {alert.status === 'Assigned' && onResolve && (
          <button 
            className="btn-resolve" 
            onClick={handleResolveClick}
            type="button"
          >
            ✓ Resolve
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertCard;