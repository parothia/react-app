import { KeyObject } from "crypto";
import React, { useEffect } from "react";

interface TableProps {
  columnData: Array<ColumnType>;
  dataSource: Array<any>;
}

export interface ColumnType {
  key: string;
  title: string;
}
const Table = (props: TableProps) => {
  const { columnData, dataSource } = props;
  function objectValues<T extends {}>(obj: T) {
    return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
  }

  function objectKeys<T extends {}>(obj: T) {
    return Object.keys(obj).map((objKey) => objKey as keyof T);
  }

  type PrimitiveType = string | Symbol | number | boolean;

  function isPrimitive(value: any): value is PrimitiveType {
    return (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean" ||
      typeof value === "symbol"
    );
  }

  function renderRow(item: []) {
    return (
      <tr className="table-row my-2 justify-center border-t-2 text-white border-b dark:bg-gray-900 dark:border-gray-700">
        {objectKeys(item).map((itemProperty) => {
          console.log(itemProperty);

          return (
            <td className="table-col p-2 text-center">
              {item[itemProperty].toString()}
            </td>
          );
        })}
      </tr>
    );
  }

  return (
    <>
      <div className="table-wrapper border-2 w-[70%] mx-auto rounded overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="table w-[100%]">
          <tr className="table-header text-xs uppercase bg-gray-50 dark:bg-gray-700  text-white">
            {columnData.map((item, index) => {
              return <th className="table-h-col p-2">{item["title"]}</th>;
            })}
          </tr>
          <tbody>{dataSource.map(renderRow)}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
