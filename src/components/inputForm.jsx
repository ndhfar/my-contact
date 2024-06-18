import React from "react";

export const InputForm = ({
  name,
  handleNameChange,
  phone,
  handlePhoneChange,
}) => {
  return (
    <div className="relative w-full space-y-4">
      <Input
        label="bx-user"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />

      <Input
        label="bx-phone"
        type="tel"
        placeholder="Number"
        value={phone}
        pattern="[0-9]*"
        onChange={handlePhoneChange}
      />
    </div>
  );
};

const Input = ({ label, type, placeholder, value, pattern, onChange }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-slate-200 rounded-xl ">
      <i className={`bx ${label} text-2xl`}></i>
      <input
        type={type}
        className="rounded-md bg-transparent outline-none w-full"
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        required
        onChange={onChange}
      />
    </div>
  );
};
