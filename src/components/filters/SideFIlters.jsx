import React ,{useState,useEffect}from "react";
import "../../style/sidefilters.css";
import Selector from "./Select";
import { FaSearch,FaBars } from "react-icons/fa";

function SideFIlters({ openFilters, setFIltetrs }) {
  // useEffect(() => {
  //   console.log(setFilters, "lo");
  // }, [setFilters]);
  const gradeApi='http://13.230.65.59:8000/coal/grade'
  const originApi='http://13.230.65.59:8000/coal/origin'
  const portApi='http://13.230.65.59:8000/coal/port'
  return (
    <div
      className={` ${openFilters ? "showfilter" : "hidefilters"} sidefilters`}
    >
      <div className="filterhead">
        <h1>Filters</h1>
        <h1>Clear Filters</h1>
      </div>
      <div className="search ">
        <input
          type="text"
          name="price"
          id="price"
          className="block w-11/12 m-auto rounded-sm border border-gray-300 pl-12 pr-12 h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Search"
        />
        <FaSearch className="icon" />
      </div>
      <Selector title="Port" api={portApi} />
      <Selector title="Grade" api={gradeApi} />
      <Selector title="Origin" api={originApi} />
    </div>
  );
}

export default SideFIlters;
