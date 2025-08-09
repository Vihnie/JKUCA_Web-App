export default function ContactPage() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Registration No." required />
        <textarea placeholder="Your Concern" required></textarea>
        <input type="file" />
        <button type="submit">Send</button>
      </form>

      <div className="contact-info">
        <p>Email: jkucastudentsunion@gmail.com</p>
        <p>Phone: +254726002906</p>
        <p>Telegram/WhatsApp Group: [Link]</p>
      </div>
    </div>
  );
}
