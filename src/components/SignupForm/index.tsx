import "./SignupForm.css";

export const SignupForm = () => (
  <form className="Signup-Form">
    <label>Username</label> <input type="text" placeholder="username"></input>
    <label>Password</label> <input type="text" placeholder="password"></input>
    <button type="submit">Signup</button>
  </form>
);
