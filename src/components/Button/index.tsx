import React from "react";

interface ButtonProps {
  //   btnType: string;
  btnName: string;
  testId: string;
  onSubmit?: any;
  onClick?: () => void;
  noShowBtn?: boolean;
}
export default function Button({
  btnName,
  testId,
  onSubmit,
  onClick,
  noShowBtn,
}: ButtonProps) {
  return (
    <div
      className={`btn flex ${
        noShowBtn
          ? "text-t-dark "
          : "text-white bg-blue-less hover:bg-blue-more hover:cursor-pointer w-32 px-6 py-3"
      } align-middle rounded  font-medium  text-center `}
    >
      <button
        type="button"
        className={`${noShowBtn} login font-semibold`}
        id={testId}
        onClick={onClick}
      >
        {btnName}
      </button>
    </div>
  );
}
