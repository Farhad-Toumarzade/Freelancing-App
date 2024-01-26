import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  console.log(role);

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8">
          <TextField
            label={"نام و نام خانوادگی"}
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            label={"ایمیل"}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className=" flex justify-center items-center gap-x-4 text-secondary-600">
            <RadioInput
              label="کارفرما"
              value="OWNER"
              id="OWNER"
              name="role"
              onChange={(e) => setRole(e.target.value)}
            />

            <RadioInput
              label="فریلنسر"
              value="FREELANCER"
              id="FREELANCER"
              name="role"
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <button className="btn btn--primary w-full">تائید</button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
