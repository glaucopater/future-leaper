import "./LoginForm.css";

export const LoginForm = () => (
  <form className="Login-Form">
    <label>Username</label> <input type="text" placeholder="username"></input>
    <label>Password</label> <input type="text" placeholder="password"></input>
    <button>Login</button>
  </form>
);
