import React, { useEffect, useState } from "react";
import "../../style/sidefilters.css";
import Selector from "../filters/DemandDD";
import SelectPort from "../filters/EditSelect.jsx/SelectPort";
import SelectGrade from "../filters/EditSelect.jsx/SelectGrade";
import SelectOrigin from "../filters/EditSelect.jsx/SelectOrigin";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { FaSearch, FaBars } from "react-icons/fa";
import axios from "axios";
import { useLocation } from "react-router-dom";

function DemandEdit() {
  const [portId, setPortId] = useState(null);
  const location = useLocation();
  const [originId, setOriginId] = useState(null);
  const [gradeId, setgradeID] = useState(null);
  const navigate = useNavigate();
  const [sellingData, setValues] = useState({
    importer: "",
    net_physical_stock: "",
    stock_qty: "",
    stock_status: "",
    in_transit_vessel_name: "",
    in_transit_eta_date: "",
    in_transit_status: "",
    in_transit_origin_id: "",
    in_transit_mines: "",
    in_transit_qty: "",
  });
  const gradeApi = "http://13.230.65.59:8000/coal/grade";
  const originApi = "http://13.230.65.59:8000/coal/origin";
  const portApi = "http://13.230.65.59:8000/coal/port";

  function changeHandler(e) {
    let value = e.target.value;
    let name = e.target.name;
    setValues({ ...sellingData, [name]: value });
  }
  function submit() {
    sellingData.grade_id = parseInt(gradeId);
    sellingData.origin_id = parseInt(originId);
    parseInt(sellingData.dispatch_qty);
    parseInt(sellingData.net_physical_stock);
    sellingData.port_id = parseInt(portId);
    console.log(sellingData, "sellingData");
    if (!portId || !originId || !gradeId) {
      toast.error("plz select port id ,grade id ,origin id", {
        position: toast.POSITION.TOP_CENTER,
        delay: 10,
        autoClose: false,
      });
    } else {
      createDemand(sellingData);
    }
    // setValues({
    //   dispatch_qty: "",
    //   importer: "",
    //   net_physical_stock: "",
    //   demandent_name: "",
    // });
    // setPortId(0);
    // setOriginId(0);
    // setgradeID(0);
  }

  const createDemand = (data) => {
    console.log("test of data===", location.state && location.state.id, "y id");

    axios({
      method: "put",
      url: `http://13.230.65.59:8000/coal/supply/${location.state.id}`,
      headers: {
        accept: "application/json",
        // "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((res) => {
        // let { data, message, status } = res.data;
        console.log("result of creat field", res);
        if (res.status === 200) {
          toast.success("supply edited sucessfully!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
            navigate("/supply");
          }, 1500);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    setPortId(location.state.port_id);
    setgradeID(location.state.grade_id);
    setOriginId(location.state.origin_id);
    setValues({
      importer: location.state.importer,
      net_physical_stock: location.state.net_physical_stock,
      stock_qty: location.state.stock_qty,
      stock_status: location.state.stock_status,
      in_transit_vessel_name: location.state.in_transit_vessel_name,
      in_transit_eta_date: location.state.in_transit_eta_date,
      in_transit_status: location.state.in_transit_status,
      in_transit_origin_id: location.state.in_transit_origin_id,
      in_transit_mines: location.state.in_transit_mines,
      in_transit_qty: location.state.in_transit_qty,
    });
  }, [location.state]);
  useEffect(() => {
    console.log(location, "location");
  }, []);
  return (
    <div className="sellingpost">
      <form>
        <div>
          <h1>select port</h1>
          <Selector title="Port" api={portApi} setSelectId={setPortId} />
        </div>
        <div>
          <h1>select grade</h1>
          <Selector title="grade" api={gradeApi} setSelectId={setgradeID} />
        </div>
        <div>
          <h1>select origin</h1>
          <Selector title="origin" api={originApi} setSelectId={setOriginId} />
        </div>
        <div>
          <h1>Importer</h1>
          <input
            type="text"
            name="importer"
            value={sellingData.importer}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <h1>stock qty</h1>
          <input
            type="number"
            name="stock_qty"
            value={sellingData.stock_qty}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <h1>stock status</h1>
          <input
            type="text"
            name="stock_status"
            value={sellingData.stock_status}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="w-full ">
          <h1>in transit eta date</h1>
          <input
            type="date"
            className="w-3/5"
            name="in_transit_eta_date"
            value={sellingData.in_transit_eta_date}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div>
          <h1>in transit vessel name</h1>
          <input
            type="text"
            name="in_transit_vessel_name"
            value={sellingData.in_transit_vessel_name}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div>
          <h1>in transit status</h1>
          <input
            type="text"
            name="in_transit_status"
            value={sellingData.in_transit_status}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div>
          <h1>in transit origin id</h1>
          <input
            type="number"
            name="in_transit_origin_id"
            value={sellingData.in_transit_origin_id}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div>
          <h1>in transit mines</h1>
          <input
            type="text"
            name="in_transit_mines"
            value={sellingData.in_transit_mines}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div>
          <h1>in transit qty</h1>
          <input
            type="number"
            name="in_transit_qty"
            value={sellingData.in_transit_qty}
            onChange={(e) => changeHandler(e)}
          />
        </div>
      </form>
      <div className="btn-sell btn-con">
        <button onClick={submit}>Submit</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default DemandEdit;
