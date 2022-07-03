import React from "react";
import close from "../../images/close.png";

interface ImageProp {
  onclose: any;
}
const Close = ({ onclose }: ImageProp) => {
  return (
    <img
      src={close}
      width="20"
      onClick={onclose}
      className="close-btn hover:cursor-pointer"
    />
  );
};
export default Close;
