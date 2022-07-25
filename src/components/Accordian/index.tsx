import React, { useState } from "react";
import Tag from "../Tag";
import closeAccrd from "./Close/index";

function Accordian() {
  const [tagsCollapse, setTagsCollapse] = useState(true);
  const handleTagsCollapse = () => {
    setTagsCollapse(!tagsCollapse);
  };
  return (
    <div className="accordian-main w-auto min-w-1/4 max-w-4xl border-blue-less rounded border-2 relative mt-0">
      <button
        id=""
        className={`text-xs font-normal text-label-3  absolute  right-1 top-1`}
        onClick={handleTagsCollapse}
      >
        Expand
        <span className={`y${tagsCollapse ? "rotate-90" : "-rotate-90"}`}>
          {">>"}
        </span>
      </button>
      <div
        className={`accordian-inner mr-16 flex flex-wrap ${
          tagsCollapse ? "overflow-hidden h-10" : "overflow-visible"
        }`}
      >
        <Tag name="Array" value={212} />
        <Tag name="Stack" value={121} />
      </div>
    </div>
  );
}

export default Accordian;
