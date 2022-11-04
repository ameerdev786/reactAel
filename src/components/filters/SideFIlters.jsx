import React from 'react';
import "../../style/sidefilters.css"
import Selector from './Select';
import { FaSearch } from "react-icons/fa";

function SideFIlters() {
  return (
    <div className="sidefilters ">
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

      <Selector title="Port"/>
      <Selector title="Grade" />
      <Selector title="Origin" />
    </div>
  );
}

export default SideFIlters;