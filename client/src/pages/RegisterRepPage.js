export default function RegisterRepPage() {
  return (
    <div className="page-container">
      <h1>Register as a Class Representative</h1>
      <form>
        <label>Full Name</label>
        <input type="text" name="fullName" required />

        <label>Registration Number</label>
        <input type="text" name="regNumber" required />

        <label>Year of Study</label>
        <input type="text" name="year" required />

        <label>Department & School</label>
        <input type="text" name="department" required />

        <label>WhatsApp Number</label>
        <input type="text" name="whatsapp" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Passport Photo</label>
        <input type="file" name="photo" />

        <label>What leadership values do you stand for?</label>
        <textarea name="values" rows="4"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
