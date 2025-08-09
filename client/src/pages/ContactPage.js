export default function ContactPage() {
  return (
    <div className="contact page-container">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Registration No." required />
        <textarea placeholder="Concern" required></textarea>
        <label>Upload Supporting Doc (Optional)</label>
        <input type="file" />
        <button type="submit">Send</button>
      </form>

      <div className="contact-info" style={{ marginTop: "1rem" }}>
        <p>Email: <a href="mailto:jkucastudentsunion@gmail.com">jkucastudentsunion@gmail.com</a></p>
        <p>Phone: <a href="tel:+254758473229">+254758473229</a></p>
        <p>WhatsApp Group: <a href="https://chat.whatsapp.com/GYDtsqCQvI8LJwkrf2S5vs?mode=ac_t" target="_blank" rel="noreferrer">Join here</a></p>
      </div>
    </div>
  );
}
