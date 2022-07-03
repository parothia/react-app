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
      className={`${
        noShowBtn
          ? "btn text-t-dark"
          : "btn text-white bg-blue-less hover:bg-blue-more hover:cursor-pointer "
      } align-middle rounded  font-medium  text-center`}
    >
      <button
        type="button"
        className={`${noShowBtn} login font-semibold w-25 px-6 py-3`}
        id={testId}
        onClick={onClick}
      >
        {btnName}
      </button>
    </div>
  );
}
