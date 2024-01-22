import TextField from "../../ui/TextField";

import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit, isSendingOtp, phoneNumber, onChange }) {
  return (
    <div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تائید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
