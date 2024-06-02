import SignUpForm from "../../src/components/sign-up-form";
import SignInForm from "../../src/components/sign-in-form";
import "./styles.scss";
export default function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
