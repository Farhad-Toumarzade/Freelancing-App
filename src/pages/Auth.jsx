import CheckOTPForm from "../features/Authentication/CheckOTPForm";
// import SendOTPForm from "../features/Authentication/SendOTPForm";

function Auth() {
  return (
    <div className="w-full sm:max-w-sm">
      {/* <SendOTPForm /> */}
      <CheckOTPForm />
    </div>
  );
}

export default Auth;
