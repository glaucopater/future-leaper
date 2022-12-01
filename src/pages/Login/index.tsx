import { Header } from "../../components/Header";
import { LoginForm } from "../../components/LoginForm";
import "../../containers/MainContainer/App.css";

export const Login = () => {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <LoginForm />
      </main>
    </div>
  );
};
