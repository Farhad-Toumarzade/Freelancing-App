import { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <form className="space-y-10">
        <p className="font-bold text-secondary-800">کد تائید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input type="number" {...props} />}
          renderSeparator={<span>-</span>}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5 rem 0.3rem",
            border: "1px solid rgb(var(--color-primary-300",
            borderRadius: "0.5rem",
          }}
        />
        <button className="btn btn--primary w-full">تائید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
