export default function EventCard({ title, date, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="card-date">{date}</p>
      <p>{description}</p>
    </div>
  );
}
