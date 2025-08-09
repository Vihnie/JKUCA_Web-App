export default function ResourcesPage() {
  return (
    <div className="resources">
      <h1>Resources & Downloads</h1>
      <ul>
        <li><a href="/docs/constitution.pdf" download>JKUCA Constitution (PDF)</a></li>
        <li><a href="/docs/event-proposal.docx" download>Event Proposal Template</a></li>
        <li><a href="/docs/sample-letter.docx" download>Sample Letters to Companies</a></li>
        <li><a href="/docs/meeting-minutes.pdf" download>Meeting Minutes Archive</a></li>
      </ul>
    </div>
  );
}
