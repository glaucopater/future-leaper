import { Header } from "../../components/Header";
import SignupForm from "../../components/Forms/SignupForm";
import "../../containers/Main/Main.css";

export const Signup = () => {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <SignupForm />
      </main>
    </div>
  );
};
