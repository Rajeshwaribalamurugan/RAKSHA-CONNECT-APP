export default function IncidentCard({
  image,
  name,
  age,
  status,
  priority,
  description,
  location,
  time,
  actionText,
  onAction,
}) {
  return (
    <div className="incident-card">
      <div className="incident-header">
        <img src={image} alt={name} className="avatar" />

        <div>
          <h4>{name}</h4>
          <p>Age: {age}</p>
        </div>
      </div>

      <p>🔥 {description}</p>
      <p>📍 {location}</p>
      <p>⏱ {time}</p>

      <button onClick={onAction}>{actionText}</button>
    </div>
  );
}
