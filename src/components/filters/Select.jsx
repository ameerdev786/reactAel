import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaSortDown } from "react-icons/fa";

const Selector = ({ title }) => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  console.log(selected);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
       
          setCountries(data.splice(3));
       
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto mt-6 font-medium h-auto">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-gray-500 text-white w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : title}
        <FaSortDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 w-11/12 rounded-md border-2 border-gray-400  mx-auto overflow-y-auto overflow-x-hidden ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
