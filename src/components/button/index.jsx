import { BaseButton, GoogleSignInButton, InvertedButton } from "./styles.jsx";

export const BUTTON_TYPES_CLASS = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

function getButton(buttonType = BUTTON_TYPES_CLASS.base) {
  return {
    [BUTTON_TYPES_CLASS.base]: BaseButton,
    [BUTTON_TYPES_CLASS.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASS.inverted]: InvertedButton,
  }[buttonType];
}

export default function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
}
