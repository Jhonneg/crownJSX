import SignUpForm from "../../src/components/sign-up-form";
import SignInForm from "../../src/components/sign-in-form";
import { AuthenticationContainer } from "./styles";
export default function Authentication() {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
}
