export default function AnnouncementCard({ title, date, content }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="card-date">{date}</p>
      <p>{content}</p>
    </div>
  );
}
