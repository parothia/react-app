import React from "react";

interface TextBoxProp {
  label: string;
  placeholder: string;
}
const TextBox = (e: TextBoxProp) => {
  const { label, placeholder } = e;
  return (
    <div className="textbox mb-4">
      <label className={`${label}  decoration-5`}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className={`${label}-text border-solid border-2 min-w-full h-12 rounded bg-slate-100 my-2`}
      ></input>
    </div>
  );
};

export default TextBox;
