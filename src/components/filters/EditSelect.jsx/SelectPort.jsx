import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaSortDown } from "react-icons/fa";

const SelectPort = ({ title, api, setSelectId, defaultVal }) => {
  const [filtersOption, setFilters] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [hideDef,setHideDef]=useState(false)
  const [open, setOpen] = useState(false);
  console.log(selected);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        setFilters(data.message);
      });
  }, []);
  return (
    <div>
      <select
        onChange={(e) => {
          setSelectId(e.target.value);
          if (e.target.value){
            setHideDef(true);
          }
        }}
        // value={!hideDef&&defaultVal}
        className="w-11/12 select"
      >
        <option>Select {title}</option>
        {filtersOption?.map((option) => (
          <option  value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPort;
