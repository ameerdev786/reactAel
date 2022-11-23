import React from "react";
import { useEffect, useState } from "react";

function DisplayInfo() {
  let [price, setPrice] = useState(localStorage.getItem("sellingPrice"));
  return (
    <div className="info">
      <div className="first-sec">
        <div className="info-head">
          <h1>Price</h1>
          <div className="border-h"></div>
          <h1>Port Name</h1>
        </div>
        <div className="total">
          <h1>${price}</h1>
          <div>
            <p>Coal Grade</p>
            <h1>...</h1>
          </div>
        </div>
      </div>
      <div className="sec-sec">kp4</div>
    </div>
  );
}

export default DisplayInfo;
