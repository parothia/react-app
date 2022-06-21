import React from "react";

interface ButtonProps {
  //   btnType: string;
  btnName: string;
  testId: string;
}
export default function Button({ btnName, testId }: ButtonProps) {
  return (
    <div className="btn h-10 min-w-full bg-green-700 rounded text-center p-1">
      <button
        type="submit"
        className="login font-semibold text-white"
        id={testId}
      >
        {btnName}
      </button>
    </div>
  );
}
