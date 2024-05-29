import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../src/utils/firebase/firebase.utils";
import SignUpForm from "../../src/components/sign-up-form";
import SignInForm from "../../src/components/sign-in-form";

export default function Authentication() {
  async function logGoogleUser() {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <h1>Sign in page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
