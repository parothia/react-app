import React from "react";

interface TextBoxProp {
  label: string;
  placeholder: string;
}
const TextBox = (e: TextBoxProp) => {
  const { label, placeholder } = e;
  return (
    <div className="textbox mb-4">
      <label className={`${label} mr-4  decoration-5`}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className={`${label}-text`}
      ></input>
    </div>
  );
};

export default TextBox;
