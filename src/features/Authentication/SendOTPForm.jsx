import { useState } from "react";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <form className="space-y-4">
        <div>
          <label className="mb-1" htmlFor="phonenumber">
            شماره موبایل
          </label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="phonenumber"
            className="w-full py-3 px4 rounded-xl text-secondary-900 border border-gray-300 hover:border-primary-500 focus:border-primary-500 focus:bg-white
            transition-all duration-300 ease-out focus:shadow-lg focus:shadow-primary-200"
            type="text"
          />
        </div>
        <button className="px-4 py2 font-bold bg-primary-900 text-white w-full rounded-xl transition-all duration-300 hover:bg-primary-800 shadow-lg shadow-primary-300">
          ارسال کد تائید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
