export default function FormInput({ label, ...otherProps }) {
  return (
    <>
      <label>{label}</label>
      <input {...otherProps} />
    </>
  );
}
