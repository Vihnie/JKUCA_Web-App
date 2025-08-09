export default function LeaderCard({ imgSrc, name, position, department, quote }) {
  return (
    <div className="leader-card">
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <p>{position}</p>
      {department && <p><strong>Dept:</strong> {department}</p>}
      {quote && <blockquote>"{quote}"</blockquote>}
    </div>
  );
}
