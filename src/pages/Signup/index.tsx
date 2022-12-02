import { Header } from "../../components/Header";
import SignupForm from "../../components/Forms/SignupForm";
import "../../containers/MainContainer/App.css";

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
