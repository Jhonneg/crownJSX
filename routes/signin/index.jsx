import { signInWithGooglePopup } from "../../src/utils/firebase/firebase.utils";

export default function Signin() {
  async function logGoogleUser() {
    const response = await signInWithGooglePopup();
    console.log(response);
  }
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
}
