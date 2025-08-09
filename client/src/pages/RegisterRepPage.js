export default function RegisterRepPage() {
  return (
    <div className="register page-container">
      <h1>Class Representative Registration</h1>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScf7nf58RKLcRQkVFYkzyJTaXoNONuxq0EVlW9iVc3BbezJnw/viewform?embedded=true"
        width="100%"
        height="900"
        style={{ border: "none" }}
        title="Class Rep Registration"
      ></iframe>
      <p style={{ marginTop: "1rem" }}>
        Submissions automatically sync to the Google Sheet linked to this form. If you need admin dashboard access, we can connect a protected view later.
      </p>
    </div>
  );
}
