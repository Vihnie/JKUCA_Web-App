export default function RegistrationForm({ onSubmit }) {
  return (
    <form className="registration-form" onSubmit={onSubmit}>
      <input type="text" placeholder="Full Name" required />
      <input type="text" placeholder="Registration Number" required />
      <input type="text" placeholder="Year of Study" required />
      <input type="text" placeholder="Department & School" required />
      <input type="tel" placeholder="WhatsApp Number" required />
      <input type="email" placeholder="Email" required />
      <input type="file" accept="image/*" />
      <textarea placeholder="What leadership values do you stand for?" required></textarea>
      <button type="submit">Register</button>
    </form>
  );
}
