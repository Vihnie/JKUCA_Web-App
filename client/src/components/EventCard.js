export default function EventCard({ title, description, date, time, venue, rsvpLink }) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Venue:</strong> {venue}</p>
      {rsvpLink && <a href={rsvpLink} className="rsvp-btn">RSVP</a>}
    </div>
  );
}
