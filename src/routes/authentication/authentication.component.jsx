import { SignUpForm, SignInForm } from "../../components";

import { AuthenticationContainer } from "./authentication.styles.jsx";

export const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};
