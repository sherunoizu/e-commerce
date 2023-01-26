import { signInWithGooglePopup } from "../../utils";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
    </div>
  );
};
