export default function AnnouncementCard({ title, content, date }) {
  return (
    <div className="announcement-card">
      <h3>{title}</h3>
      <p>{content}</p>
      <small>Posted on: {date}</small>
    </div>
  );
}
