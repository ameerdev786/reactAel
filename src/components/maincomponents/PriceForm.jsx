import React, { useEffect, useState } from "react";
import "../../style/sidefilters.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function PriceForm({ setSellingPrice }) {
  const navigate = useNavigate();
  const [priceValues, setValues] = useState({
    competitor: "",
    baseprice: "",
    indexprice: "",
  });
  function changeHandler(e) {
    let value = parseInt(e.target.value);
    let name = e.target.name;
    setValues({ ...priceValues, [name]: value });
  }
  function submit() {
    const gradeId = parseInt(localStorage.getItem("grade"));
    const portId = parseInt(localStorage.getItem("port"));
    const originId = parseInt(localStorage.getItem("origin"));

    createPriceGrade({ portId, gradeId, originId }, priceValues);
    console.log(priceValues, "priceValues");
    setValues({
      competitor: "",
      baseprice: "",
      indexprice: "",
    });
    // localStorage.clear()
  }

  const createPriceGrade = (ids, prices) => {
    console.log("ids", ids, "price", prices);
    let data = {
      competitor_price: prices.competitor,
      base_price: prices.baseprice,
      index_price: prices.indexprice,
      grade_id: ids.gradeId,
      port_id: ids.portId,
      origin_id: ids.originId,
    };
    axios({
      method: "post",
      url: "http://35.79.69.32:8000/coal/selling-price",
      headers: {
        accept: "application/json",
        // "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((res) => {
        // let { data, message, status } = res.data;
        console.log("result of post req", res);
        const sellingPrice = Object.values(res.data);
        if (res.status === 200) {
          toast.success("selling price added sucessfully!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          localStorage.setItem("sellingPrice", sellingPrice);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="priceform">
      <form>
        <div>
          <h1>Competitor Price</h1>
          <input
            type="number"
            name="competitor"
            value={priceValues.competitor}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <h1>Base Price</h1>
          <input
            type="number"
            name="baseprice"
            value={priceValues.baseprice}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <h1>Index Price</h1>
          <input
            type="number"
            name="indexprice"
            value={priceValues.indexprice}
            onChange={(e) => changeHandler(e)}
          />
        </div>
      </form>
      <div className="btn-con">
        <button onClick={submit}>Submit</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default PriceForm;
