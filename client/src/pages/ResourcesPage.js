export default function ResourcesPage() {
  return (
    <div className="page-container">
  <h1>Resources & Downloads</h1>
  <ul>
    <li><a href="/docs/constitution.pdf" className="download-btn" download>JKUCA Constitution</a></li>
    <li><a href="/docs/event-proposal.pdf" className="download-btn" download>Event Proposal Form</a></li>
    <li><a href="/docs/sample-letter.pdf" className="download-btn" download>Sample Letter to Companies</a></li>
    <li><a href="/docs/meeting-minutes.zip" className="download-btn" download>Meeting Minutes Archive</a></li>
  </ul>
</div>
  );
}
