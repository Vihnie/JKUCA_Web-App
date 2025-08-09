import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home">
      <section className="welcome">
        <h1>Welcome to JKUCA</h1>
        <div className="animated-text">Voice. Visibility. Value.</div>
        <p>
          "Welcome to the Official Platform of the JKUCA — where leadership meets
          purpose, voice finds power, and service unites us. I’m Sam Blaziar, your
          duly elected President 2025–2026. Together with my team, we are
          dedicated to redefining the role and recognition of class representatives
          across JKUAT. This website is our information hub, feedback channel, and
          connection center. Let’s lead, build, and empower — together."
        </p>
        <p>— Sam Blaziar, JKUCA President</p>
      </section>

      <section className="quick-buttons">
        <Link to="/about"><button>🧭 About JKUCA</button></Link>
        <a href="https://drive.google.com/file/d/1pvmWIL1uUWmTIcQ00qiiEPgOgodUdIVn/view?usp=drivesdk" target="_blank" rel="noreferrer"><button>📜 Our Constitution</button></a>
        <Link to="/leaders"><button>👥 Meet Your Leaders</button></Link>
        <Link to="/announcements"><button>📢 Announcements</button></Link>
        <Link to="/register"><button>📝 Register as a Class Rep</button></Link>
        <Link to="/contact"><button>📧 Submit a Proposal/Concern</button></Link>
        <Link to="/events"><button>🎉 Upcoming Events</button></Link>
      </section>
    </div>
  );
}
