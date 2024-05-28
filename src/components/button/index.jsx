import "./styles.scss";

const BUTTON_TYPES_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASS[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
