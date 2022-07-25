import React, { useEffect, useState } from "react";
import { List } from "reselect/es/types";
import Accordian from "../../components/Accordian";
import Table, { ColumnType } from "../../components/Table";

interface QuestionsList {
  questions: Question[];
}
interface Question {
  id: Number;
  title: String;
}
function LQA() {
  const [questions, setQuestions] = useState<QuestionsList>();
  const columnData: ColumnType[] = [
    { key: "hash", title: "#" },
    { key: "title", title: "Title" },
    { key: "difficulty", title: "Difficulty" },
  ];

  const mockQuestions = [
    { hash: 1, title: "www.anurag.com", difficulty: "medium" },
    { hash: 1, title: "anurag", difficulty: "medium" },
  ];
  // useEffect(() => {
  //   setQuestions(mockQuestions);
  // }, [mockQuestions]);
  return (
    <div className="main">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam
        rerum suscipit, laborum assumenda laboriosam eveniet fuga debitis nisi
        llam laborum temporibus! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quae itaque excepturi enim quisquam animi accusamus
        earum tempore delectus deserunt minima voluptatum, eum nemo, eveniet
        ipsam in esse fugiat, nisi eligendi! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Ea temporibus ducimus provident eligendi
        error reiciendis deleniti sequi expedita placeat, laudantium at facilis,
        eum unde veritatis labore nobis! Nulla, vel laborum.
      </p>
      {/* <Accordian /> */}
      <Table columnData={columnData} dataSource={mockQuestions} />)
    </div>
  );
}

export default LQA;
