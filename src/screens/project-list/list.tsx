import React from "react";
import { User } from "./search-panel";

interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}

interface listProps {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: listProps) => {
  const getPersonData = (list: Project) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === list.personId) {
        return users[i].name;
      }
    }
    return "未知";
  };

  const getListData = () => {
    let lists = [];
    for (let i = 0; i < list.length; i++) {
      lists.push(
        <tr key={list[i].id}>
          <td>{list[i].name}</td>
          <td>{getPersonData(list[i])}</td>
        </tr>
      );
    }
    return lists;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          getListData()
          // list.map(project => <tr>
          //     <td>{project.name}</td>
          //     <td>{
          //         // users.find(user => user.id === project.personId)?.name ?? '未知'
          //         getPersonData()
          //         }
          //     </td>
          // </tr>)
        }
      </tbody>
    </table>
  );
};
