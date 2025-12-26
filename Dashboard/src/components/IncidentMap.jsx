import React from 'react';

const IncidentMap = () => {
  const incidents = [
    { id: 1, name: "T. Nagar Fire", x: 40, y: 35, type: "fire", priority: "high" },
    { id: 2, name: "Marina Beach", x: 75, y: 45, type: "fire", priority: "low" },
    { id: 3, name: "Express Avenue", x: 58, y: 42, type: "police", priority: "low" },
    { id: 4, name: "Central Station", x: 54, y: 40, type: "police", priority: "low" },
    { id: 5, name: "Chepauk Stadium", x: 60, y: 38, type: "ambulance", priority: "high" },
    { id: 6, name: "Besant Nagar", x: 62, y: 72, type: "ambulance", priority: "low" },
  ];

  return (
    <div className="incident-map">
      <h3>Incident Map</h3>
      <p className="map-subtitle">Chennai - Real-time Incidents</p>
      
      <div className="map-container-full">
        <div className="map-image-wrapper">
          {/* Chennai Map Image */}
          <img 
            src="https://i.pinimg.com/736x/af/30/04/af3004c73c77a268c921e68f8f67d44a.jpg"
            alt="Chennai Map"
            className="map-image"
            onError={(e) => {
              // Fallback if image doesn't load
              e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Chennai_District_map.png/800px-Chennai_District_map.png";
            }}
          />
          
          {/* Dark overlay for better marker visibility */}
          <div className="map-overlay"></div>
          
          {/* Incident markers */}
          <div className="markers-overlay">
            {incidents.map(incident => (
              <div
                key={incident.id}
                className={`incident-marker ${incident.type} ${incident.priority}`}
                style={{ left: `${incident.x}%`, top: `${incident.y}%` }}
                title={incident.name}
              >
                <div className="marker-pulse"></div>
                <div className="marker-icon">
                  {incident.type === 'fire' && '🔥'}
                  {incident.type === 'police' && '👮'}
                  {incident.type === 'ambulance' && '🚑'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="map-legend-compact">
        <div className="legend-row">
          <span className="legend-badge fire">🔥</span>
          <span className="legend-badge police">👮</span>
          <span className="legend-badge ambulance">🚑</span>
        </div>
      </div>
    </div>
  );
};

export default IncidentMap;