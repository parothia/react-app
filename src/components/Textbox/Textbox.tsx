import React from "react";

interface TextBoxProp {
  label: string;
  placeholder: string;
  onChange: any;
  value: string;
  name: string;
  onBlur?: () => void;
}
const TextBox = (e: TextBoxProp) => {
  const { label, placeholder, onChange, value, name, onBlur } = e;
  return (
    <div className="textbox mb-4">
      <label className={`${label}  decoration-5`}>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className={`${label}-text border-solid border-2 min-w-full h-12 rounded bg-slate-100 my-2 px-2`}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      ></input>
    </div>
  );
};

export default TextBox;
