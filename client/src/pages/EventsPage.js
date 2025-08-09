export default function EventsPage() {
  return (
    <div className="events">
      <h1>Upcoming Events</h1>

      <div className="event-card">
        <h2>Leadership Training</h2>
        <p>Date: 15th Sept 2025</p>
        <p>Venue: JKUAT Main Hall</p>
        <button>RSVP</button>
      </div>

      <div className="event-card">
        <h2>Certificate Awarding Ceremony</h2>
        <p>Date: 30th Oct 2025</p>
        <p>Venue: JKUAT Conference Center</p>
        <button>RSVP</button>
      </div>
    </div>
  );
}
