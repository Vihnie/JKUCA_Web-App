export default function LeaderCard({ name, position, department, roles, quote, photo }) {
  return (
    <div className="leader-card">
      <img src={photo} alt={`${name}`} className="leader-photo" />
      <h3>{name}</h3>
      <p><strong>{position}</strong> — {department}</p>
      <p>{roles}</p>
      {quote && <blockquote>“{quote}”</blockquote>}
    </div>
  );
}
