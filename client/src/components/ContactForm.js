export default function ContactForm({ onSubmit }) {
  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Registration No." required />
      <textarea placeholder="Your Concern" required></textarea>
      <input type="file" />
      <button type="submit">Send</button>
    </form>
  );
}
