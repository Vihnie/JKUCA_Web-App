export default function ContactForm() {
  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" required />

      <label>Registration Number</label>
      <input type="text" name="regNo" required />

      <label>Concern</label>
      <textarea name="concern" rows="4"></textarea>

      <label>Upload Supporting Document (Optional)</label>
      <input type="file" name="supportingDoc" />

      <button type="submit">Send</button>
    </form>
  );
}
