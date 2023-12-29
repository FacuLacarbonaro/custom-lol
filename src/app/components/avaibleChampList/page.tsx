"use client";

import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store/store";

const AvaibleChampList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAvaibleList = () => {
    /* AXIOS.GET */

    console.log("get avaible champs not implemented");
    console.log(inputValue, "input value before edit");
  };

  const handleInputValue = (value: string) => {
    setInputValue(value);
  };

  useEffect(() => {
    handleAvaibleList();
  }, [inputValue, list]);

  return (
    <div>
      <div>
        <h2>Avaible Champions list</h2>

        <input
          type="text"
          placeholder="Search a champion"
          value={inputValue}
          onChange={(e) => handleInputValue(e.target.value)}
        />
      </div>

      <div className=" bg-slate-500 w-full grid  columns-auto ">
        {/* {list.map((champ) => (
          <div key={champ._id}>
            <span>{champ.name}</span>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default AvaibleChampList;
