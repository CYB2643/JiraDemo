import { useEffect, useState } from "react";
import { User } from "../screens/project-list/search-panel";

export const isFalsy = (value: any) => (value === 0 ? false : !value);
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};
export const useDebounce = (value: any, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    // 每次在value变化以后,设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    console.log(timeout);
    // 清理上一次的定时任务
    return () => clearTimeout(timeout);
  }, [value, delay]);
  console.log(debounceValue);
  return debounceValue;
};
