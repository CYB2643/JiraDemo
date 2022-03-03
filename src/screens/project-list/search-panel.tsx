import React from "react";

export interface User {
  id: number;
  name: string;
}

interface searchPanelProps {
  // 对象中的类型定义
  param: {
    name: string;
    personId: string;
  };
  // 给变量设置类型的定义
  setParam: (param: searchPanelProps["param"]) => void;
  // users:[{id:number,name:string}]
  // 数组类型的定义，User是数组中每个对象的定义如上个interface
  users: User[];
}

export const SearchPanel = ({ param, setParam, users }: searchPanelProps) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
