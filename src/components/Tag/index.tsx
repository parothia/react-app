import axios from "axios";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
interface TagProps {
  name: string;
  value: Number;
}
const Tag = ({ name, value }: TagProps) => {
  const navigate = useNavigate();

  const callGetQuestions = () => {
    const values = {
      tagName: name,
    };
    // axios
    //   .post(`http://localhost:8080/api/v1/getQuestions`, values)
    //   .then()
    //   .catch((err) => console.log(err));
  };
  return (
    <div className="group m-2 flex items-center hover:text-blue-more hover:font-semibold">
      <button className="inline-flex items-center" onClick={callGetQuestions}>
        <span className="whitespace-nowrap group-hover:text-blue">{name}</span>
        <span className="ml-1 flex h-[18px] items-center justify-center rounded-[10px] px-1.5 text-xs font-normal text-label-3 bg-fill-3 bg-slate-400 group-hover:text-blue group-hover:bg-blue">
          {value.toString()}
        </span>
      </button>
    </div>
  );
};

export default Tag;
