export default function LoginPage() {
  return (
    <div className="page-container">
      <h1>Admin Login</h1>
      <form>
        <label>Email</label>
        <input type="email" name="email" required />

        <label>Password</label>
        <input type="password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
