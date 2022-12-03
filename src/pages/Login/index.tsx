import { Header } from "../../components/Header";
import LoginForm from "../../components/Forms/LoginForm";
import "../../containers/Main/Main.css";

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
