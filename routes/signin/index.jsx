import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../src/utils/firebase/firebase.utils";
import SignUpForm from "../../src/components/sign-up-form";

export default function Signin() {
  async function logGoogleUser() {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
}
