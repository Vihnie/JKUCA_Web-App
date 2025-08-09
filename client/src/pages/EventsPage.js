export default function EventsPage() {
  return (
    <div className="events page-container">
      <h1>Upcoming Events</h1>

      <div className="card event-card">
        <h2>Certificate Awarding Ceremony</h2>
        <p className="card-date">Date: TBA | Venue: TBA</p>
        <p>Description: Recognition of outstanding Class Representatives.</p>
        <button>RSVP</button>
      </div>

      <div className="card event-card">
        <h2>Leadership Training</h2>
        <p className="card-date">Date: TBA | Venue: TBA</p>
        <p>Description: Training and mentorship for effective leadership.</p>
        <button>RSVP</button>
      </div>

      <div className="card event-card">
        <h2>Graduation Sendoff Party</h2>
        <p className="card-date">Date: TBA | Venue: TBA</p>
        <p>Description: Celebration of graduating reps and their service.</p>
        <button>RSVP</button>
      </div>

      <div className="card event-card">
        <h2>Constitution Review Meetings</h2>
        <p className="card-date">Date: TBA | Venue: TBA</p>
        <p>Description: Policy and structure review sessions.</p>
        <button>RSVP</button>
      </div>

      <div className="card event-card">
        <h2>Symposiums / Debates</h2>
        <p className="card-date">Date: TBA | Venue: TBA</p>
        <p>Description: Debates and discussions on student governance.</p>
        <button>RSVP</button>
      </div>
    </div>
  );
}
