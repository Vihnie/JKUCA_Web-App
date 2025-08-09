export default function LeadersPage() {
  return (
    <div className="page-container">
      <h1>Meet Your Leaders</h1>
      <div className="leaders-grid">
        <div className="leader-card">
          <img src="/images/president.jpg" alt="President" />
          <h3>Sam Blaziar</h3>
          <p>President</p>
        </div>
        <div className="leader-card">
          <img src="/images/deputy.jpg" alt="Deputy President" />
          <h3>Anastasia Nkii</h3>
          <p>Deputy President</p>
        </div>
        <div className="leader-card">
          <img src="/images/treasurer.jpg" alt="Treasurer" />
          <h3>Jacon William</h3>
          <p>Treasurer</p>
        </div>
      </div>
    </div>
  );
}
