import React from "react";

interface ButtonProps {
  //   btnType: string;
  btnName: string | JSX.Element;
  testId: string;
  onSubmit?: any;
  onClick?: () => void;
  noShowBtn?: boolean;
  noStyle?: boolean;
}
export default function Button({
  btnName,
  testId,
  onSubmit,
  onClick,
  noShowBtn,
  noStyle,
}: ButtonProps) {
  const style = `btn flex ${
    noShowBtn
      ? "text-t-dark text-center"
      : "text-white bg-blue-less hover:bg-blue-more hover:cursor-pointer "
  } `;

  const inStyle = `${noShowBtn ? " align-middle" : " w-32 px-6 py-3"} login `;
  return (
    <div
      className={`${
        noStyle ? "nostyle" : style
      } align-middle rounded  font-medium`}
    >
      <button
        type="button"
        className={`${noStyle ? "nostyle my-3" : inStyle} font-semibold `}
        id={testId}
        onClick={onClick}
      >
        {btnName}
      </button>
    </div>
  );
}
