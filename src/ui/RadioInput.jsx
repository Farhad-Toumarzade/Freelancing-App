function RadioInput({ label, value, id, name, onChange, role }) {
  return (
    <div>
      <input
        className="cursor-pointer w-4 h-4 form-radio text-primary-900 "
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        role={role}
      />
      <label htmlFor="OWNER">{label}</label>
    </div>
  );
}

export default RadioInput;
